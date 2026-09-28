"use client";

/* ============================================================
   KARIMBA — FRONTEND-ONLY AUTH (demo for university competition)
   ------------------------------------------------------------
   NOTE (developers): this is NOT production authentication.
   Passwords live in the browser's localStorage for demo purposes
   only. Replace this layer with a real backend (sessions/JWT,
   server cookies) before any production use.

   Storage keys:
   - karimba_users : StoredUser[]
   - karimba_auth  : "true" (session flag)
   - karimba_user  : { name, email } (session identity)
   Session keys live in localStorage ("Remember me") or
   sessionStorage (this tab only).
   ============================================================ */

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

export interface AuthUser {
  name: string;
  email: string;
}

interface StoredUser extends AuthUser {
  password: string;
}

const USERS_KEY = "karimba_users";
const AUTH_KEY = "karimba_auth";
const USER_KEY = "karimba_user";
const PARTICIPANTS_KEY = "karimba_tree_participants";

/* Displayed base count preserved from the original campaign design.
   Real total = base + unique local participants. */
export const PARTICIPATION_BASE_COUNT = 128;

export function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

function readParticipants(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(PARTICIPANTS_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    if (!Array.isArray(parsed)) return [];
    const seen = new Set<string>();
    for (const entry of parsed) {
      if (typeof entry === "string" && entry.includes("@"))
        seen.add(normalizeEmail(entry));
    }
    return Array.from(seen);
  } catch {
    return [];
  }
}

const DUMMY_USER: StoredUser = {
  name: "User Karimba",
  email: "user@gmail.com",
  password: "karimba123",
};

function readUsers(): StoredUser[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(USERS_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

/* Seed the demo account once — never duplicated. */
function ensureDummyUser(): StoredUser[] {
  const users = readUsers();
  const exists = users.some(
    (u) => u.email.toLowerCase() === DUMMY_USER.email.toLowerCase()
  );
  if (!exists) {
    const next = [...users, DUMMY_USER];
    try {
      window.localStorage.setItem(USERS_KEY, JSON.stringify(next));
    } catch {
      /* storage unavailable — demo continues in memory */
    }
    return next;
  }
  return users;
}

function readSession(): AuthUser | null {
  if (typeof window === "undefined") return null;
  try {
    const stores = [window.localStorage, window.sessionStorage];
    for (const store of stores) {
      if (store.getItem(AUTH_KEY) === "true") {
        const raw = store.getItem(USER_KEY);
        if (!raw) continue;
        const parsed = JSON.parse(raw);
        if (parsed && parsed.name && parsed.email)
          return { name: parsed.name, email: parsed.email };
      }
    }
  } catch {
    /* ignore */
  }
  return null;
}

function writeSession(user: AuthUser, remember: boolean) {
  const store = remember ? window.localStorage : window.sessionStorage;
  const other = remember ? window.sessionStorage : window.localStorage;
  try {
    other.removeItem(AUTH_KEY);
    other.removeItem(USER_KEY);
    store.setItem(AUTH_KEY, "true");
    store.setItem(USER_KEY, JSON.stringify(user));
  } catch {
    /* ignore */
  }
}

function clearSession() {
  for (const store of [window.localStorage, window.sessionStorage]) {
    try {
      store.removeItem(AUTH_KEY);
      store.removeItem(USER_KEY);
    } catch {
      /* ignore */
    }
  }
}

export function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

interface AuthResult {
  ok: boolean;
  error?: string;
}

interface AuthContextValue {
  user: AuthUser | null;
  login: (email: string, password: string, remember: boolean) => AuthResult;
  register: (name: string, email: string, password: string) => AuthResult;
  logout: () => void;
  notify: (message: string) => void;
  /* Centralized 1 User 1 Tree participation (single source of truth). */
  participants: string[];
  totalParticipants: number;
  participated: boolean;
  participate: () => { ok: boolean; duplicate?: boolean };
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within <AuthProvider>");
  return ctx;
}

interface Toast {
  id: number;
  message: string;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  /* Start logged-out on both server and client (SSR has no storage),
     then restore the persisted session client-side. This keeps the
     first client render identical to the server HTML (no hydration
     mismatch) while still restoring login instantly after mount. */
  const [user, setUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    ensureDummyUser();
    setUser(readSession());
  }, []);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const toastId = useRef(0);

  const notify = useCallback((message: string) => {
    const id = ++toastId.current;
    setToasts((prev) => [...prev.slice(-2), { id, message }]);
    window.setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  }, []);

  const login = useCallback(
    (email: string, password: string, remember: boolean): AuthResult => {
      const users = ensureDummyUser();
      const found = users.find(
        (u) => u.email.toLowerCase() === email.trim().toLowerCase()
      );
      if (!found || found.password !== password) {
        return { ok: false, error: "Email or password is incorrect." };
      }
      const identity = { name: found.name, email: found.email };
      writeSession(identity, remember);
      setUser(identity);
      notify(`Welcome back, ${found.name.split(" ")[0]}.`);
      return { ok: true };
    },
    [notify]
  );

  const register = useCallback(
    (name: string, email: string, password: string): AuthResult => {
      const users = ensureDummyUser();
      const cleanName = name.trim();
      const cleanEmail = email.trim();
      if (users.some((u) => u.email.toLowerCase() === cleanEmail.toLowerCase())) {
        return { ok: false, error: "An account with this email already exists." };
      }
      const created: StoredUser = { name: cleanName, email: cleanEmail, password };
      try {
        window.localStorage.setItem(USERS_KEY, JSON.stringify([...users, created]));
      } catch {
        /* ignore */
      }
      const identity = { name: created.name, email: created.email };
      writeSession(identity, true);
      setUser(identity);
      notify(`Welcome to KARIMBA, ${created.name.split(" ")[0]}.`);
      return { ok: true };
    },
    [notify]
  );

  const logout = useCallback(() => {
    clearSession();
    setUser(null);
  }, []);

  /* ---------- 1 User 1 Tree participation ---------- */

  const [participants, setParticipants] = useState<string[]>([]);

  useEffect(() => {
    setParticipants(readParticipants());
    const sync = (e: StorageEvent) => {
      if (e.key === PARTICIPANTS_KEY) setParticipants(readParticipants());
    };
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);

  const participated = useMemo(
    () =>
      user !== null &&
      participants.includes(normalizeEmail(user.email)),
    [user, participants]
  );

  const totalParticipants = PARTICIPATION_BASE_COUNT + participants.length;

  const participate = useCallback(() => {
    if (!user) return { ok: false as const };
    const email = normalizeEmail(user.email);
    const current = readParticipants();
    if (current.includes(email)) {
      notify("You've already planted your tree.");
      return { ok: false as const, duplicate: true as const };
    }
    const next = [...current, email];
    try {
      window.localStorage.setItem(PARTICIPANTS_KEY, JSON.stringify(next));
    } catch {
      /* ignore */
    }
    setParticipants(next);
    notify("Your tree has been counted.");
    return { ok: true as const };
  }, [user, notify]);

  const value = useMemo(
    () => ({
      user,
      login,
      register,
      logout,
      notify,
      participants,
      totalParticipants,
      participated,
      participate,
    }),
    [user, login, register, logout, notify, participants, totalParticipants, participated, participate]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
      <div
        aria-live="polite"
        className="pointer-events-none fixed bottom-6 left-1/2 z-[100] flex w-full max-w-sm -translate-x-1/2 flex-col items-center gap-2 px-4"
      >
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="w-full rounded-lg border border-[rgba(244,240,232,0.16)] bg-[#101A12]/95 px-4 py-3 text-center text-sm font-body text-[#F4F0E8] shadow-lg backdrop-blur-md"
          >
            {toast.message}
          </div>
        ))}
      </div>
    </AuthContext.Provider>
  );
}

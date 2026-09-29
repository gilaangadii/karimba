"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";
import { isValidEmail, useAuth } from "@/lib/auth";

type Mode = "login" | "register";

const SLIDE =
  "transition-transform duration-[800ms] ease-[cubic-bezier(0.77,0,0.175,1)] motion-reduce:transition-none";
const FADE =
  "transition-all duration-500 ease-out motion-reduce:transition-none";

/* ---------------- Forest image panel (purely visual) ---------------- */

function ImagePanel({ mode }: { mode: Mode }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative h-44 w-full shrink-0 overflow-hidden sm:h-52",
        "lg:absolute lg:inset-y-0 lg:left-0 lg:h-auto lg:w-1/2 lg:shrink",
        "z-10 will-change-transform",
        SLIDE,
        mode === "register" ? "lg:translate-x-full" : "lg:translate-x-0"
      )}
    >
      <img
        src="/images/forests/Taman_Nasional_Gunung_Rinjani.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[#0B160F]/25" />
    </div>
  );
}

/* ---------------- Shared form bits ---------------- */

function Field({
  id,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  action,
  autoComplete,
}: {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  action?: React.ReactNode;
  autoComplete?: string;
}) {
  const [visible, setVisible] = useState(false);
  const isPassword = type === "password";
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between">
        <label
          htmlFor={id}
          className="text-[10px] font-body font-semibold uppercase tracking-[0.15em] text-[#1E3420]/70"
        >
          {label}
        </label>
        {action}
      </div>
      <div className="relative">
        <input
          id={id}
          name={id}
          type={isPassword && visible ? "text" : type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          autoComplete={autoComplete}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className={cn(
            "w-full rounded-md border bg-white/60 px-3.5 py-2.5 text-sm font-body text-[#1E3420] placeholder:text-[#1E3420]/35 outline-none transition-colors focus:bg-white",
            error
              ? "border-[#B4443C]/60 focus:border-[#B4443C]"
              : "border-[#1E3420]/20 focus:border-[#1E3420]"
          )}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setVisible((v) => !v)}
            aria-label={visible ? "Hide password" : "Show password"}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#1E3420]/45 transition-colors hover:text-[#1E3420]"
          >
            {visible ? <EyeOff size={15} /> : <Eye size={15} />}
          </button>
        )}
      </div>
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-[11px] font-body text-[#B4443C]">
          {error}
        </p>
      )}
    </div>
  );
}

function useRedirectTarget() {
  const [target, setTarget] = useState("/");
  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get("next");
    if (param && param.startsWith("/") && !param.startsWith("//")) setTarget(param);
  }, []);
  return target;
}

function LoginForm({ onSwitch }: { onSwitch: () => void }) {
  const { login } = useAuth();
  const router = useRouter();
  const redirectTo = useRedirectTarget();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [errors, setErrors] = useState<{ email?: string; password?: string; form?: string }>({});

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: typeof errors = {};
    if (!email.trim()) next.email = "Please complete this field.";
    else if (!isValidEmail(email)) next.email = "Please enter a valid email address.";
    if (!password) next.password = "Please complete this field.";
    setErrors(next);
    if (next.email || next.password) return;
    const result = login(email, password, remember);
    if (!result.ok) {
      setErrors({ form: result.error });
      return;
    }
    router.push(redirectTo);
  };

  return (
    <div className="mx-auto w-full max-w-sm">
      <p className="text-[10px] font-body font-semibold uppercase tracking-[0.2em] text-[#1E3420]/55">
        Welcome Back
      </p>
      <h1 className="mt-2 font-headline text-3xl font-bold leading-tight text-[#1E3420] md:text-4xl">
        Welcome back to KARIMBA.
      </h1>
      <p className="mt-3 text-sm font-body leading-relaxed text-[#1E3420]/65">
        Continue exploring Indonesia&rsquo;s ancient forests and uncover the
        stories shaping conservation.
      </p>

      <form className="mt-7 space-y-4" onSubmit={submit} noValidate>
        <Field
          id="login-email"
          label="Email Address"
          type="email"
          placeholder="name@example.com"
          value={email}
          onChange={(v) => {
            setEmail(v);
            setErrors((p) => ({ ...p, email: undefined, form: undefined }));
          }}
          error={errors.email}
          autoComplete="email"
        />
        <Field
          id="login-password"
          label="Password"
          type="password"
          placeholder="••••••••••"
          value={password}
          onChange={(v) => {
            setPassword(v);
            setErrors((p) => ({ ...p, password: undefined, form: undefined }));
          }}
          error={errors.password}
          autoComplete="current-password"
          action={
            <a
              href="#"
              className="text-[11px] font-body font-medium text-[#1E3420]/60 underline-offset-2 transition-colors hover:text-[#1E3420] hover:underline"
            >
              Forgot password?
            </a>
          }
        />

        {errors.form && (
          <p role="alert" className="text-xs font-body font-medium text-[#B4443C]">
            {errors.form}
          </p>
        )}

        <label className="flex cursor-pointer items-center gap-2 text-xs font-body text-[#1E3420]/70">
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
            className="h-3.5 w-3.5 rounded border-[#1E3420]/30 accent-[#1E3420]"
          />
          Remember me for 30 days
        </label>

        <button
          type="submit"
          className="group flex w-full items-center justify-center gap-2 rounded-md bg-[#1E3420] py-3 text-sm font-body font-semibold text-[#F4F0E8] transition-colors hover:bg-[#2a452c]"
        >
          Sign In
          <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
        </button>
      </form>

      <p className="mt-5 text-center text-xs font-body text-[#1E3420]/60">
        Don&rsquo;t have an account?{" "}
        <button
          type="button"
          onClick={onSwitch}
          className="font-semibold text-[#1E3420] underline underline-offset-2 hover:no-underline"
        >
          Create an account
        </button>
      </p>
    </div>
  );
}

/* ---------------- Register form ---------------- */

function RegisterForm({ onSwitch }: { onSwitch: () => void }) {
  const { register } = useAuth();
  const router = useRouter();
  const redirectTo = useRedirectTarget();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [terms, setTerms] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    password?: string;
    confirm?: string;
    terms?: string;
    form?: string;
  }>({});

  const clear = (key: keyof typeof errors) =>
    setErrors((p) => ({ ...p, [key]: undefined, form: undefined }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: typeof errors = {};
    if (!name.trim()) next.name = "Please complete this field.";
    if (!email.trim()) next.email = "Please complete this field.";
    else if (!isValidEmail(email)) next.email = "Please enter a valid email address.";
    if (!password) next.password = "Please complete this field.";
    else if (password.length < 8)
      next.password = "Password must contain at least 8 characters.";
    if (!confirm) next.confirm = "Please complete this field.";
    else if (confirm !== password) next.confirm = "Passwords do not match.";
    if (!terms) next.terms = "Please agree to the Terms of Service and Privacy Policy to continue.";
    setErrors(next);
    if (next.name || next.email || next.password || next.confirm || next.terms) return;
    const result = register(name, email, password);
    if (!result.ok) {
      setErrors({ form: result.error });
      return;
    }
    router.push(redirectTo);
  };

  return (
    <div className="mx-auto w-full max-w-sm">
      <p className="text-[10px] font-body font-semibold uppercase tracking-[0.2em] text-[#1E3420]/55">
        Join the Movement
      </p>
      <h1 className="mt-2 font-headline text-3xl font-bold leading-tight text-[#1E3420] md:text-4xl">
        Create your KARIMBA account.
      </h1>
      <p className="mt-3 text-sm font-body leading-relaxed text-[#1E3420]/65">
        Join the community and become part of a movement to protect
        Indonesia&rsquo;s forests.
      </p>

      <form className="mt-7 space-y-4" onSubmit={submit} noValidate>
        <Field
          id="register-name"
          label="Full Name"
          placeholder="Your name"
          value={name}
          onChange={(v) => {
            setName(v);
            clear("name");
          }}
          error={errors.name}
          autoComplete="name"
        />
        <Field
          id="register-email"
          label="Email Address"
          type="email"
          placeholder="name@example.com"
          value={email}
          onChange={(v) => {
            setEmail(v);
            clear("email");
          }}
          error={errors.email}
          autoComplete="email"
        />
        <Field
          id="register-password"
          label="Password"
          type="password"
          placeholder="••••••••••"
          value={password}
          onChange={(v) => {
            setPassword(v);
            clear("password");
          }}
          error={errors.password}
          autoComplete="new-password"
        />
        <Field
          id="register-confirm"
          label="Confirm Password"
          type="password"
          placeholder="••••••••••"
          value={confirm}
          onChange={(v) => {
            setConfirm(v);
            clear("confirm");
          }}
          error={errors.confirm}
          autoComplete="new-password"
        />

        {errors.form && (
          <p role="alert" className="text-xs font-body font-medium text-[#B4443C]">
            {errors.form}
          </p>
        )}

        <div>
          <label className="flex cursor-pointer items-start gap-2 text-xs font-body leading-relaxed text-[#1E3420]/70">
            <input
              type="checkbox"
              checked={terms}
              onChange={(e) => {
                setTerms(e.target.checked);
                clear("terms");
              }}
              aria-describedby={errors.terms ? "register-terms-error" : undefined}
              className="mt-0.5 h-3.5 w-3.5 shrink-0 rounded border-[#1E3420]/30 accent-[#1E3420]"
            />
          <span>
            I agree to the{" "}
            <a href="#" className="font-medium text-[#1E3420] underline underline-offset-2">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="font-medium text-[#1E3420] underline underline-offset-2">
              Privacy Policy
            </a>
            .
          </span>
          </label>
          {errors.terms && (
            <p id="register-terms-error" role="alert" className="mt-1.5 text-[11px] font-body text-[#B4443C]">
              {errors.terms}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="group flex w-full items-center justify-center gap-2 rounded-md bg-[#1E3420] py-3 text-sm font-body font-semibold text-[#F4F0E8] transition-colors hover:bg-[#2a452c]"
        >
          Create Account
          <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
        </button>
      </form>

      <p className="mt-5 text-center text-xs font-body text-[#1E3420]/60">
        Already have an account?{" "}
        <button
          type="button"
          onClick={onSwitch}
          className="font-semibold text-[#1E3420] underline underline-offset-2 hover:no-underline"
        >
          Sign in
        </button>
      </p>
    </div>
  );
}

/* ---------------- Container ---------------- */

export default function AuthExperience() {
  /* Default to login for identical server/client HTML, then pick up
     ?mode=register client-side to avoid a hydration mismatch. */
  const [mode, setMode] = useState<Mode>("login");

  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("mode") === "register") {
      setMode("register");
    }
  }, []);
  const touchX = useRef<number | null>(null);

  const go = (next: Mode) => setMode(next);

  return (
    <div className="flex min-h-svh items-center justify-center bg-[#101A12] p-4 md:p-8">
      <div
        className="relative flex w-full max-w-6xl flex-col overflow-hidden rounded-xl border border-[rgba(244,240,232,0.14)] bg-[#F4F0E8] lg:block lg:h-[calc(100svh-5rem)] lg:min-h-[620px] lg:max-h-[820px]"
        onTouchStart={(e) => {
          touchX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          touchX.current = null;
          if (Math.abs(dx) < 60) return;
          if (dx < 0 && mode === "login") go("register");
          if (dx > 0 && mode === "register") go("login");
        }}
      >
        <ImagePanel mode={mode} />

        {/* Login panel — right half on desktop */}
        <div
          className={cn(
            "z-0 flex flex-col px-6 py-8 sm:px-10 lg:w-1/2 lg:overflow-y-auto lg:px-12 lg:py-10 will-change-transform",
            SLIDE,
            FADE,
            mode === "login"
              ? "visible relative flex-1 opacity-100 lg:absolute lg:inset-y-0 lg:right-0 lg:translate-x-0"
              : "invisible pointer-events-none absolute inset-0 opacity-0 lg:left-auto lg:translate-x-10"
          )}
          aria-hidden={mode !== "login"}
        >
          <PanelChrome mode={mode} onSwitch={go} />
          <div className="flex flex-1 items-center py-6">
            <LoginForm onSwitch={() => go("register")} />
          </div>
          <PanelFooter />
        </div>

        {/* Register panel — left half on desktop */}
        <div
          className={cn(
            "z-0 flex flex-col px-6 py-8 sm:px-10 lg:w-1/2 lg:overflow-y-auto lg:px-12 lg:py-10 will-change-transform",
            SLIDE,
            FADE,
            mode === "register"
              ? "visible relative flex-1 opacity-100 lg:absolute lg:inset-y-0 lg:left-0 lg:translate-x-0"
              : "invisible pointer-events-none absolute inset-0 opacity-0 lg:right-auto lg:-translate-x-10"
          )}
          aria-hidden={mode !== "register"}
        >
          <PanelChrome mode={mode} onSwitch={go} />
          <div className="flex flex-1 items-center py-6">
            <RegisterForm onSwitch={() => go("login")} />
          </div>
          <PanelFooter />
        </div>
      </div>
    </div>
  );
}

function PanelChrome({ mode, onSwitch }: { mode: Mode; onSwitch: (m: Mode) => void }) {
  return (
    <div className="flex items-center justify-between">
      <a
        href="/"
        className="inline-flex items-center gap-1.5 text-[11px] font-body font-medium text-[#1E3420]/60 transition-colors hover:text-[#1E3420]"
      >
        <ArrowLeft size={13} />
        Back to Home
      </a>
      <div
        role="tablist"
        aria-label="Authentication mode"
        className="flex items-center gap-1 rounded-full border border-[#1E3420]/15 p-1"
      >
        {(
          [
            { key: "login", label: "Login" },
            { key: "register", label: "Create Account" },
          ] as const
        ).map((tab) => (
          <button
            key={tab.key}
            role="tab"
            aria-selected={mode === tab.key}
            onClick={() => onSwitch(tab.key)}
            className={cn(
              "rounded-full px-3 py-1 text-[10px] font-body font-semibold transition-all",
              mode === tab.key
                ? "bg-[#1E3420] text-[#F4F0E8]"
                : "text-[#1E3420]/55 hover:text-[#1E3420]"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function PanelFooter() {
  return (
    <div className="flex items-center justify-between border-t border-[#1E3420]/10 pt-4 text-[10px] font-body text-[#1E3420]/45">
      <span>© 2026 KARIMBA</span>
      <span className="flex items-center gap-3">
        <a href="#" className="transition-colors hover:text-[#1E3420]">Privacy</a>
        <a href="#" className="transition-colors hover:text-[#1E3420]">Terms</a>
      </span>
    </div>
  );
}

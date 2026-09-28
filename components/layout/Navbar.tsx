"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ChevronDown, LogOut, UserRound } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/lib/auth";

const baseNavLinks = [
  { key: "home", label: "Home", homeHref: "#home", awayHref: "/" },
  { key: "explore", label: "Explore", homeHref: "/explore", awayHref: "/explore" },
  { key: "issues", label: "Issues", homeHref: "/issues", awayHref: "/issues" },
  { key: "about", label: "About", homeHref: "/about", awayHref: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const onHome = pathname === "/";

  // On the home page links scroll to anchors; on other pages they route back.
  // EXPLORE always opens the dedicated Explore page.
  const navLinks = baseNavLinks.map((link) => ({
    ...link,
    href: onHome ? link.homeHref : link.awayHref,
  }));
  const activeKey =
    pathname === "/"
      ? "home"
      : pathname.startsWith("/explore")
        ? "explore"
        : pathname.startsWith("/issues")
          ? "issues"
          : pathname.startsWith("/about")
            ? "about"
            : "home";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-bg-navbar/90 backdrop-blur-xl border-b border-border-subtle"
          : "bg-transparent"
      )}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#"
            className="font-headline text-xl md:text-3xl font-bold tracking-tight text-neutral hover:text-accent transition-colors"
          >
            KARIMBA
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-current={link.key === activeKey ? "page" : undefined}
                className={cn(
                  "relative text-xs font-body font-medium tracking-[0.1em] uppercase transition-colors duration-300 pb-1",
                  link.key === activeKey
                    ? "text-neutral after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:bg-accent"
                    : "text-neutral/70 hover:text-accent"
                )}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <AuthButtons />
          </div>

          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral p-2 hover:text-accent transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-500 ease-in-out",
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="bg-bg-navbar/95 backdrop-blur-xl border-t border-border-subtle px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              aria-current={link.key === activeKey ? "page" : undefined}
              className={cn(
                "block text-sm font-body font-medium tracking-[0.1em] uppercase transition-colors py-2",
                link.key === activeKey ? "text-accent" : "text-neutral/70 hover:text-accent"
              )}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-neutral/10 space-y-3">
            <AuthButtons mobile onNavigate={() => setIsOpen(false)} />
          </div>
        </div>
      </div>
    </nav>
  );
}

function AuthButtons({ mobile = false, onNavigate }: { mobile?: boolean; onNavigate?: () => void }) {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", close);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", close);
      document.removeEventListener("keydown", onKey);
    };
  }, [open ]);

  if (!user) {
    return (
      <div className={cn(mobile && "grid grid-cols-2 gap-3", !mobile && "flex items-center gap-3")}>
        <a
          href="/login"
          onClick={onNavigate}
          className="text-center text-[11px] font-body font-semibold tracking-[0.1em] uppercase text-neutral/80 border border-neutral/20 px-4 py-2 md:py-2.5 rounded hover:border-neutral/40 hover:bg-neutral/5 transition-all duration-300 w-full"
        >
          Login
        </a>
        <a
          href="/login?mode=register"
          onClick={onNavigate}
          className="text-center text-[11px] font-body font-bold tracking-[0.1em] uppercase text-primary bg-accent px-4 py-2 md:py-2.5 rounded hover:bg-accent/90 shadow-sm transition-all duration-300 w-full"
        >
          Register
        </a>
      </div>
    );
  }

  const firstName = user.name.split(" ")[0];

  return (
    <div ref={menuRef} className={cn("relative", mobile ? "w-full" : "w-auto")}>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="flex w-full items-center justify-center gap-1.5 text-[11px] font-body font-bold tracking-[0.1em] uppercase text-primary bg-accent px-4 py-2 md:py-2.5 rounded hover:bg-accent/90 shadow-sm transition-all duration-300"
      >
        <UserRound size={13} />
        <span className="max-w-[120px] truncate">{firstName}</span>
        <ChevronDown size={13} className={cn("transition-transform", open && "rotate-180")} />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 top-[calc(100%+8px)] z-50 w-44 overflow-hidden rounded-lg border border-[rgba(244,240,232,0.14)] bg-[#101A12]/98 shadow-xl backdrop-blur-xl"
        >
          <button
            role="menuitem"
            onClick={() => {
              setOpen(false);
              onNavigate?.();
              router.push("/profile");
            }}
            className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-xs font-body text-neutral/75 transition-colors hover:bg-white/5 hover:text-accent"
          >
            <UserRound size={13} />
            My Profile
          </button>
          <button
            role="menuitem"
            onClick={() => {
              logout();
              setOpen(false);
              onNavigate?.();
              router.push("/");
            }}
            className="flex w-full items-center gap-2 border-t border-white/10 px-4 py-2.5 text-left text-xs font-body text-neutral/75 transition-colors hover:bg-white/5 hover:text-accent"
          >
            <LogOut size={13} />
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

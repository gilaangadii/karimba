"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "Explore", href: "#explore" },
  { label: "Discover", href: "#discover" },
  { label: "Issues", href: "#issues" },
  { label: "Stories", href: "#stories" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
          ? "bg-surface/90 backdrop-blur-xl border-b border-neutral/5"
          : "bg-transparent"
      )}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#"
            className="font-headline text-xl md:text-2xl font-bold tracking-tight text-neutral hover:text-secondary transition-colors"
          >
            KARIMBA
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-body font-medium tracking-[0.1em] uppercase text-neutral/70 hover:text-secondary transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Button variant="secondary" size="sm">
              Mulai Menjelajah
            </Button>
            <div className="flex items-center gap-2 text-xs font-body text-neutral/60">
              <button className="text-secondary font-medium">ID</button>
              <span>|</span>
              <button className="hover:text-secondary transition-colors">EN</button>
            </div>
          </div>

          <div className="flex lg:hidden items-center gap-3">
            <div className="flex items-center gap-1 text-xs font-body text-neutral/60 mr-2">
              <button className="text-secondary font-medium">ID</button>
              <span>|</span>
              <button className="hover:text-secondary transition-colors">EN</button>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral p-2 hover:text-secondary transition-colors"
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
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="bg-surface/95 backdrop-blur-xl border-t border-neutral/5 px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm font-body font-medium tracking-[0.1em] uppercase text-neutral/70 hover:text-secondary transition-colors py-2"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-neutral/10">
            <Button variant="secondary" size="md" className="w-full">
              Mulai Menjelajah
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

"use client";

import Link from "next/link";
import { Globe, MessageCircle, Share2, Mail } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const footerLinks = {
  navigasi: [
    { key: "home", href: "/" },
    { key: "explore", href: "/explore" },
    { key: "issues", href: "/issues" },
    { key: "about", href: "/about" },
  ],
  sumberData: [
    { label: "KLHK", href: "https://www.kehutanan.go.id/" },
    { label: "WWF Indonesia", href: "https://www.worldwildlife.org/places/indonesia" },
    { label: "FAO", href: "https://www.fao.org/indonesia/en/" },
    { label: "BPS Indonesia", href: "https://www.bps.go.id/" },
  ],
};

const socialLinks = [
  { icon: Globe, href: "#", key: "website" },
  { icon: MessageCircle, href: "#", key: "chat" },
  { icon: Share2, href: "#", key: "share" },
  { icon: Mail, href: "#", key: "email" },
] as const;

export default function Footer() {
  const { dict } = useLanguage();

  return (
    <footer id="about" className="bg-bg-footer border-t border-border-subtle">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-10">
          <div className="lg:col-span-1">
            <a
              href="#"
              className="font-headline text-2xl font-bold tracking-tight text-neutral hover:text-secondary transition-colors inline-block mb-4"
            >
              KARIMBA
            </a>
            <p className="text-sm font-body text-neutral/60 leading-relaxed max-w-xs">
              {dict.footer.tagline}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-neutral/40 mb-4">
              {dict.footer.navigation}
            </h4>
            <ul className="space-y-3">
              {footerLinks.navigasi.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-sm font-body text-neutral/60 hover:text-secondary transition-colors"
                  >
                    {dict.nav[link.key as keyof typeof dict.nav]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-neutral/40 mb-4">
              {dict.footer.dataSources}
            </h4>
            <ul className="space-y-3">
              {footerLinks.sumberData.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-body text-neutral/60 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-neutral/40 mb-4">
              {dict.footer.followUs}
            </h4>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.key}
                  href={social.href}
                  aria-label={dict.footer.social[social.key]}
                  className="w-10 h-10 rounded-full border border-neutral/20 flex items-center justify-center text-neutral/60 hover:text-secondary hover:border-secondary/50 transition-all duration-300"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-body text-neutral/40">
            {dict.footer.rights}
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs font-body text-neutral/40 hover:text-secondary transition-colors"
            >
              {dict.footer.privacy}
            </a>
            <a
              href="#"
              className="text-xs font-body text-neutral/40 hover:text-secondary transition-colors"
            >
              {dict.footer.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

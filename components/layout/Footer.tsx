"use client";

import { Globe, MessageCircle, Share2, Mail } from "lucide-react";

const footerLinks = {
  navigasi: [
    { label: "Explore", href: "#explore" },
    { label: "Discover", href: "#discover" },
    { label: "Issues", href: "#issues" },
    { label: "Stories", href: "#stories" },
    { label: "About", href: "#about" },
  ],
  bahasa: [
    { label: "ID", href: "#", active: true },
    { label: "EN", href: "#" },
  ],
  sumberData: [
    { label: "KLHK", href: "#" },
    { label: "WWF Indonesia", href: "#" },
    { label: "FAO", href: "#" },
    { label: "BPS Indonesia", href: "#" },
  ],
};

const socialLinks = [
  { icon: Globe, href: "#", label: "Website" },
  { icon: MessageCircle, href: "#", label: "Chat" },
  { icon: Share2, href: "#", label: "Share" },
  { icon: Mail, href: "#", label: "Email" },
];

export default function Footer() {
  return (
    <footer id="about" className="bg-surface border-t border-neutral/10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          <div className="lg:col-span-1">
            <a
              href="#"
              className="font-headline text-2xl font-bold tracking-tight text-neutral hover:text-secondary transition-colors inline-block mb-4"
            >
              KARIMBA
            </a>
            <p className="text-sm font-body text-neutral/60 leading-relaxed max-w-xs">
              Menjelajahi kekayaan alam dan keanekaragaman hayati yang tersembunyi di dalam hutan Indonesia.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-neutral/40 mb-4">
              Navigasi
            </h4>
            <ul className="space-y-3">
              {footerLinks.navigasi.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
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
              Bahasa
            </h4>
            <div className="flex items-center gap-3 mb-8">
              {footerLinks.bahasa.map((lang) => (
                <a
                  key={lang.label}
                  href={lang.href}
                  className={`text-sm font-body transition-colors ${
                    lang.active
                      ? "text-secondary font-medium"
                      : "text-neutral/60 hover:text-secondary"
                  }`}
                >
                  {lang.label}
                </a>
              ))}
            </div>

            <h4 className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-neutral/40 mb-4">
              Sumber Data
            </h4>
            <ul className="space-y-3">
              {footerLinks.sumberData.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
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
              Ikuti Kami
            </h4>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
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
            &copy; 2026 KARIMBA. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs font-body text-neutral/40 hover:text-secondary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs font-body text-neutral/40 hover:text-secondary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

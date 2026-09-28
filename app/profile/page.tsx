"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, KeyRound, LogOut, Sprout, UserRound } from "lucide-react";
import { useAuth } from "@/lib/auth";
import { cn } from "@/lib/utils";

function maskEmail(email: string) {
  const [local, domain] = email.split("@");
  if (!domain) return email;
  return `${local.slice(0, 3)}***@${domain}`;
}

export default function ProfilePage() {
  const { user, logout, participated } = useAuth();
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (!user) router.replace("/login");
    else setChecked(true);
  }, [user, router]);

  if (!user) return null;

  const planted = participated;

  return (
    <div className="relative flex min-h-svh items-center justify-center overflow-hidden px-4 py-10">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/forests/Taman_Nasional_Sebangau.jpg')",
        }}
        role="img"
        aria-label="Aerial view of tropical peat swamp forest"
      />
      <div className="absolute inset-0 bg-[#0B160F]/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B160F]/50 via-transparent to-[#0B160F]/70" />

      <div className="relative z-10 w-full max-w-md">
        <div className="mb-6 flex items-center justify-between">
          <a
            href="/"
            className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(244,240,232,0.25)] bg-black/30 px-3.5 py-1.5 text-[11px] font-body font-medium text-[#F4F0E8]/85 backdrop-blur-md transition-all hover:border-[#DDEA81] hover:text-[#DDEA81]"
          >
            <ArrowLeft size={13} />
            Back to Home
          </a>
          <span className="font-headline text-xs font-bold tracking-[0.2em] text-[#F4F0E8]/60">
            KARIMBA
          </span>
        </div>

        {checked && (
          <div className="rounded-2xl border border-[rgba(244,240,232,0.16)] bg-[rgba(30,52,32,0.55)] px-6 py-8 text-center shadow-2xl backdrop-blur-xl md:px-8">
            <p className="text-[10px] font-body font-semibold uppercase tracking-[0.25em] text-[#F4F0E8]/55">
              Member Sanctuary
            </p>
            <h1 className="mt-1 font-headline text-2xl font-bold text-[#F4F0E8] md:text-3xl">
              My Profile
            </h1>

            <div className="mx-auto mt-5 flex h-20 w-20 items-center justify-center rounded-full border border-[rgba(244,240,232,0.2)] bg-[rgba(244,240,232,0.08)]">
              <UserRound size={34} className="text-[#DDEA81]/80" aria-label="Default profile avatar" />
            </div>

            <p className="mt-4 font-headline text-xl font-bold text-[#F4F0E8]">
              {user.name}
            </p>
            <p className="mx-auto mt-1.5 inline-block rounded-full bg-black/30 px-3 py-1 text-[11px] font-body text-[#F4F0E8]/70">
              {maskEmail(user.email)}
            </p>

            <div className="mt-6 border-t border-[rgba(244,240,232,0.12)] pt-5 text-left">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-[10px] font-body font-semibold uppercase tracking-[0.2em] text-[#F4F0E8]/55">
                  Tree Planting Status
                </p>
                <span
                  className={cn(
                    "rounded-full px-2.5 py-0.5 text-[10px] font-body font-semibold",
                    planted
                      ? "bg-[rgba(221,234,129,0.15)] text-[#DDEA81]"
                      : "bg-white/10 text-[#F4F0E8]/60"
                  )}
                >
                  {planted ? "Planted" : "Empty"}
                </span>
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-[rgba(244,240,232,0.1)] bg-black/25 p-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[rgba(221,234,129,0.12)]">
                  <Sprout size={17} className="text-[#DDEA81]" />
                </span>
                <div>
                  <p className="text-sm font-body font-semibold text-[#F4F0E8]">
                    {planted ? "Tree Planted" : "No Tree Planted Yet"}
                  </p>
                  <p className="mt-1 text-xs font-body leading-relaxed text-[#F4F0E8]/65">
                    {planted
                      ? "You have planted 1 tree and become part of the movement."
                      : "Take your first step and become part of the movement."}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <button
                type="button"
                className="flex items-center justify-center gap-1.5 rounded-lg border border-[rgba(244,240,232,0.2)] px-3 py-2.5 text-xs font-body font-medium text-[#F4F0E8]/85 transition-all hover:border-[#DDEA81] hover:text-[#DDEA81]"
              >
                <KeyRound size={13} />
                Change Password
              </button>
              <button
                type="button"
                onClick={() => {
                  logout();
                  router.push("/");
                }}
                className="flex items-center justify-center gap-1.5 rounded-lg bg-[#C5D182] px-3 py-2.5 text-xs font-body font-bold text-[#1E3420] transition-colors hover:bg-[#DDEA81]"
              >
                <LogOut size={13} />
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

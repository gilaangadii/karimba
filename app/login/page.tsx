import type { Metadata } from "next";
import AuthExperience from "@/components/auth/AuthExperience";

export const metadata: Metadata = {
  title: "KARIMBA — Login",
  description: "Sign in or create your KARIMBA account.",
};

export default function LoginPage() {
  return <AuthExperience />;
}

import type { Metadata } from "next";
import { profile } from "@/data/profile";
import "./globals.css";

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.role}`,
  description:
    "Portfólio profissional de Thais Ferreira Gomes, engenheira de software com experiência em desenvolvimento web e segurança da informação.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full bg-[#080a0f] text-zinc-100">{children}</body>
    </html>
  );
}

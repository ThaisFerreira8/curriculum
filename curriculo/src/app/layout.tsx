import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { profile } from "@/data/profile";
import "./globals.css";

const themeInitializationScript = `
  (() => {
    try {
      const savedTheme = localStorage.getItem("portfolio-theme");
      const systemTheme = matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
      const theme = savedTheme === "light" || savedTheme === "dark" ? savedTheme : systemTheme;
      document.documentElement.dataset.theme = theme;
      document.documentElement.style.colorScheme = theme;
    } catch {
      document.documentElement.dataset.theme = "dark";
      document.documentElement.style.colorScheme = "dark";
    }
  })();
`;

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
    <html lang="pt-BR" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitializationScript }} />
      </head>
      <body className="min-h-full bg-[var(--app-bg)] text-[var(--app-text)]">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

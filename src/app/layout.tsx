import type { Metadata } from "next";
import "./globals.css";
import { PERSONAL } from "@/lib/data";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  title: `${PERSONAL.name} · ${PERSONAL.title}`,
  description: `${PERSONAL.bio}`,
  keywords: ["Frontend Developer", "React", "Next.js", "TypeScript", "Portfolio"],
  authors: [{ name: PERSONAL.name }],
  openGraph: {
    title: `${PERSONAL.name} · ${PERSONAL.title}`,
    description: PERSONAL.bio,
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Inline script prevents flash of wrong theme on first paint */}
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          (function() {
            var saved = localStorage.getItem('theme');
            var preferred = saved || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
            document.documentElement.setAttribute('data-theme', preferred);
          })();
        `,
          }}
        />
      </head>
      <body style={{ overflowX: "clip" }}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

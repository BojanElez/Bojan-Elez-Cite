import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "./components.css";
import "@/components/header/Header.css";
import "@/components/hero/Hero.css";
import "@/components/about/About.css";
import "@/components/skills/Skills.css";
import "@/components/experience/Experience.css";
import "@/components/education/Education.css";
import "@/components/contact/Contact.css";
import "@/components/footer/Footer.css";
import "@/components/projects/Projects.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "Bojan Elez | Fullstack Engineer",
  description: "Experienced Fullstack Engineer specializing in React, Next.js, and modern web technologies. Building user-focused applications with clean, performant code.",
  keywords: ["Fullstack Engineer", "React Developer", "Next.js", "TypeScript", "JavaScript", "Web Development"],
  authors: [{ name: "Bojan Elez" }],
  creator: "Bojan Elez",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bojan-elez.dev",
    title: "Bojan Elez | Fullstack Engineer",
    description: "Experienced Fullstack Engineer specializing in React, Next.js, and modern web technologies.",
    siteName: "Bojan Elez Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bojan Elez | Fullstack Engineer",
    description: "Experienced Fullstack Engineer specializing in React, Next.js, and modern web technologies.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Runs before React hydration — prevents dark-mode flash (FOUC)
const themeInitScript = `try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={`${inter.variable} ${jetBrainsMono.variable} app-body`}
      >
        {children}
      </body>
    </html>
  );
}

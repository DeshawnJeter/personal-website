import type { Metadata } from "next";
import { Cormorant_Garamond, Sora, JetBrains_Mono } from "next/font/google";
import { site } from "@/lib/content";
import { SiteChrome } from "@/components/site-chrome";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["200", "300", "400", "600"],
  display: "swap",
});

const jbMono = JetBrains_Mono({
  variable: "--font-jbmono",
  subsets: ["latin"],
  weight: ["300", "400"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `Where Imagination Becomes Architecture — ${site.name}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "DeShawn Jeter",
    "software engineer",
    "creative technologist",
    "frontend developer",
    "portfolio",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title: `Where Imagination Becomes Architecture — ${site.name}`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Where Imagination Becomes Architecture — ${site.name}`,
    description: site.description,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = {
  themeColor: "#04070e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${sora.variable} ${jbMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}

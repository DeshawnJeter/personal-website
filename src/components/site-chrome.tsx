"use client";

import type { ReactNode } from "react";
import dynamic from "next/dynamic";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/layout/site-header";
import { SideRail } from "@/components/layout/side-rail";
import { SiteFooter } from "@/components/layout/site-footer";

// Purely decorative / progressive-enhancement pieces — deferred out of the
// critical bundle so they never compete with hydration for main-thread time.
const SmoothScroll = dynamic(
  () => import("@/components/motion/smooth-scroll").then((m) => m.SmoothScroll),
  { ssr: false },
);
const CursorGlow = dynamic(
  () => import("@/components/layout/cursor-glow").then((m) => m.CursorGlow),
  { ssr: false },
);
const GrainOverlay = dynamic(
  () => import("@/components/layout/grain-overlay").then((m) => m.GrainOverlay),
  { ssr: false },
);

export function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      value={{ light: "light", dark: "dark" }}
    >
      <SmoothScroll>
        <div className="print:hidden">
          <GrainOverlay />
          <CursorGlow />
          <SiteHeader />
          <SideRail />
        </div>
        <main id="main" className="flex-1">
          {children}
        </main>
        <div className="print:hidden">
          <SiteFooter />
        </div>
      </SmoothScroll>
    </ThemeProvider>
  );
}

"use client";

import type { ReactNode } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
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
const CursorEngine = dynamic(
  () => import("@/components/motion/cursor-engine").then((m) => m.CursorEngine),
  { ssr: false },
);
const GrainOverlay = dynamic(
  () => import("@/components/layout/grain-overlay").then((m) => m.GrainOverlay),
  { ssr: false },
);
const Fog = dynamic(
  () => import("@/components/motion/fog").then((m) => m.Fog),
  { ssr: false },
);
const AmbientRaven = dynamic(
  () => import("@/components/motion/raven").then((m) => m.Raven),
  { ssr: false },
);
const JesterGuide = dynamic(
  () => import("@/components/motion/jester-guide").then((m) => m.JesterGuide),
  { ssr: false },
);
const KonamiEasterEgg = dynamic(
  () =>
    import("@/components/easter-eggs/konami-easter-egg").then(
      (m) => m.KonamiEasterEgg,
    ),
  { ssr: false },
);

export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  // The cathedral atmosphere (jester guide, fog, ambient raven, hidden
  // discoveries) belongs to the narrative homepage — not the print-oriented
  // resume page, which stays clean and unaffected on screen too.
  const isHomepage = pathname === "/";

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      value={{ light: "light", dark: "dark" }}
    >
      <SmoothScroll>
        <div className="print:hidden">
          {isHomepage && (
            <>
              <Fog />
              <AmbientRaven mode="ambient" />
              <JesterGuide />
              <KonamiEasterEgg />
            </>
          )}
          <GrainOverlay />
          <CursorEngine />
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

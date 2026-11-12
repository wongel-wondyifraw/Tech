import type { Metadata } from "next";
import { Geist_Mono, Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { ScrollProgressBar } from "@/components/ui/scroll-progress-bar";
import { MagneticAura } from "@/components/ui/magnetic-aura";
import { ScrollChapterRail } from "@/components/ui/scroll-chapter-rail";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AetherCore Systems — Enterprise Software & Intelligent ERP Solutions",
  description:
    "Unified cloud ERP, real-time financial consolidation, autonomous supply chain intelligence, and bespoke enterprise software engineered for global scale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${jakarta.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScrollProvider>
            <ScrollProgressBar />
            <MagneticAura />
            <ScrollChapterRail />
            <div id="app-shell" className="app-shell flex min-h-screen flex-col">
              {children}
            </div>
            <Toaster position="bottom-right" richColors />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

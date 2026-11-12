"use client";

import * as React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Cpu, Menu, Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ConnectDialog } from "@/components/sections/connect-dialog";

export function SiteHeader() {
  const { resolvedTheme, setTheme } = useTheme();

  function toggleTheme() {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }

  return (
    <motion.header
      id="site-header"
      className="site-header sticky top-0 z-40 w-full border-b-2 border-[var(--nb-ink)] bg-background/95 backdrop-blur-sm"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="header-inner mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="#hero"
          className="brand-identity flex items-center gap-3 transition-opacity hover:opacity-85"
        >
          <span
            className="brand-emblem flex h-9 w-9 items-center justify-center rounded-xl border-2 border-[var(--nb-ink)] bg-[var(--nb-accent-soft)] text-primary shadow-[2.5px_2.5px_0px_var(--nb-shadow)]"
            aria-hidden="true"
          >
            <Cpu className="h-4 w-4" />
          </span>
          <div className="brand-text flex flex-col">
            <span className="font-serif text-lg font-bold leading-none tracking-tight text-foreground">
              AetherCore
            </span>
            <span className="mt-1 text-[10px] font-mono font-medium uppercase tracking-[0.22em] text-muted-foreground">
              Software &amp; ERP Systems
            </span>
          </div>
        </Link>

        <nav
          id="desktop-navigation"
          className="desktop-navigation hidden items-center gap-7 md:flex"
          aria-label="Primary Navigation"
        >
          <a
            href="#engineering-showcase"
            className="nav-link text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Our Services
          </a>
          <a
            href="#pinned-journey"
            className="nav-link text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Process Showcase
          </a>
          <a
            href="#solutions"
            className="nav-link text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Solutions Matrix
          </a>
        </nav>

        <div className="header-actions flex items-center gap-2.5">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="theme-toggle-button rounded-full"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle color theme</span>
          </Button>

          <div className="hidden sm:block">
            <ConnectDialog triggerLabel="Book Live Demo" variant="default" size="sm" />
          </div>

          <div className="mobile-menu-wrapper md:hidden">
            <Sheet>
              <SheetTrigger
                render={
                  <Button
                    variant="outline"
                    size="icon"
                    aria-label="Open menu"
                    className="rounded-full"
                  />
                }
              >
                <Menu className="h-4 w-4" />
              </SheetTrigger>
              <SheetContent side="right" className="mobile-sheet-content w-72 p-6">
                <SheetHeader className="text-left">
                  <SheetTitle className="font-serif text-xl font-bold">
                    AetherCore Systems
                  </SheetTitle>
                </SheetHeader>
                <div className="mobile-nav-links mt-6 flex flex-col gap-4">
                  <a
                    href="#engineering-showcase"
                    className="mobile-nav-link text-base font-medium text-foreground/85 hover:text-primary"
                  >
                    Our Services
                  </a>
                  <a
                    href="#pinned-journey"
                    className="mobile-nav-link text-base font-medium text-foreground/85 hover:text-primary"
                  >
                    Process Showcase
                  </a>
                  <a
                    href="#solutions"
                    className="mobile-nav-link text-base font-medium text-foreground/85 hover:text-primary"
                  >
                    Solutions Matrix
                  </a>
                  <div className="mobile-nav-cta pt-4">
                    <ConnectDialog triggerLabel="Book Live Demo" variant="default" size="default" />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

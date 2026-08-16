"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { Theme } from "../lib/theme";
import { CloseIcon, MenuIcon } from "../lib/icons";

type NavItem = { label: string; anchor?: string; href?: string };

const navConfig: NavItem[] = [
  { label: "Home", anchor: "home" },
  { label: "About", anchor: "about" },
  { label: "Research areas", anchor: "services" },
  { label: "Teaching", href: "/teaching" },
  { label: "Publications", href: "/publications" },
  { label: "Contact", anchor: "contact" },
];

type HeaderProps = {
  theme: Theme;
  onToggleTheme: () => void;
};

export function Header({ theme, onToggleTheme }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isDark = theme === "dark";

  const hrefFor = (item: NavItem) => item.href ?? (isHome ? `#${item.anchor}` : `/#${item.anchor}`);
  const isActive = (item: NavItem) => item.href !== undefined && item.href === pathname;

  const headerClass = isDark ? "border-white/10 bg-[#0d1116]/75" : "border-[#171411]/10 bg-[#f8f5f1]/80";
  const navTextClass = isDark ? "text-white/60 hover:text-white" : "text-[#171411]/65 hover:text-[#171411]";
  const headingText = isDark ? "text-white" : "text-[#171411]";
  const iconButtonClass = isDark ? "border-white/15 bg-white/5 text-white hover:bg-white/10" : "border-[#171411]/10 bg-white/70 text-[#171411] hover:bg-white";
  const contactButtonClass = isDark ? "bg-[#dfeaf0] text-[#101820] hover:bg-white" : "bg-[#171411] text-[#f6f1ea] hover:bg-[#2a2420]";

  return (
    <header className={`sticky top-0 z-50 border-b backdrop-blur-xl ${headerClass}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className={`flex h-10 w-10 items-center justify-center rounded-full text-[10px] font-semibold tracking-[0.22em] ${isDark ? "bg-[#ecf1f6] text-[#11161d]" : "bg-[#171411] text-[#f6f1ea]"}`}>
            SL
          </div>
          <div className={`text-base font-medium tracking-[-0.04em] ${headingText}`}>Dr. Sri</div>
        </Link>

        <nav className={`hidden items-center gap-8 text-[10px] font-medium uppercase tracking-[0.22em] md:flex ${navTextClass}`}>
          {navConfig.map((item) => (
            <Link
              key={item.label}
              href={hrefFor(item)}
              className={`-mx-3 -my-2 inline-block rounded-full px-3 py-2 transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_14px_28px_rgba(0,0,0,0.12)] ${isDark ? "hover:bg-white/10" : "hover:bg-[#171411]/5"} ${isActive(item) ? headingText + " font-semibold" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={onToggleTheme}
            className={`inline-flex items-center justify-center rounded-full border px-3 py-2 text-[9px] font-medium uppercase tracking-[0.2em] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_24px_rgba(0,0,0,0.1)] ${iconButtonClass}`}
          >
            {isDark ? "Light" : "Dark"}
          </button>
          <Link
            href={isHome ? "#contact" : "/#contact"}
            className={`inline-flex items-center justify-center rounded-full px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.22em] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_24px_rgba(0,0,0,0.14)] ${contactButtonClass}`}
          >
            Contact
          </Link>
          <a
            href="/CV.pdf"
            download
            className={`inline-flex items-center justify-center rounded-full border px-4 py-2 text-[9px] font-medium uppercase tracking-[0.2em] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_24px_rgba(0,0,0,0.1)] ${iconButtonClass}`}
          >
            Download CV
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          className={`inline-flex h-10 w-10 items-center justify-center rounded-full border md:hidden ${iconButtonClass}`}
        >
          {mobileOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className={`border-t md:hidden ${isDark ? "border-white/10 bg-[#0d1116]" : "border-[#171411]/10 bg-[#f8f5f1]"}`}>
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
            {navConfig.map((item) => (
              <Link
                key={item.label}
                href={hrefFor(item)}
                onClick={() => setMobileOpen(false)}
                className={`rounded-lg px-3 py-3 text-xs font-medium uppercase tracking-[0.18em] transition ${isActive(item) ? (isDark ? "bg-white/10 text-white" : "bg-[#171411]/10 text-[#171411]") : navTextClass}`}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-wrap items-center gap-3 px-3">
              <button
                type="button"
                onClick={onToggleTheme}
                className={`inline-flex items-center justify-center rounded-full border px-4 py-2 text-[9px] font-medium uppercase tracking-[0.2em] transition ${iconButtonClass}`}
              >
                {isDark ? "Light" : "Dark"}
              </button>
              <a
                href="/CV.pdf"
                download
                className={`inline-flex items-center justify-center rounded-full border px-4 py-2 text-[9px] font-medium uppercase tracking-[0.2em] transition ${iconButtonClass}`}
              >
                Download CV
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

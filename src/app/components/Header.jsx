// components/Header.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Applications & Solutions", href: "/applications-solutions" },
  { label: "Bespoke", href: "/bespoke" },
  // { label: "Portfolio", href: "/portfolio" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [open, setOpen] = useState(false);

  // hide on scroll down, show on scroll up
  const [hidden, setHidden] = useState(false);
  // whether we've scrolled past threshold (so header gets a background)
  const [scrolled, setScrolled] = useState(false);

  const ref = useRef(null);

  // publish header height to CSS variable so hero can read it
  useEffect(() => {
    function setHeaderHeight() {
      if (!ref.current) return;
      const h = ref.current.getBoundingClientRect().height;
      document.documentElement.style.setProperty(
        "--site-header-height",
        `${Math.ceil(h)}px`
      );
    }
    setHeaderHeight();
    window.addEventListener("resize", setHeaderHeight);
    return () => window.removeEventListener("resize", setHeaderHeight);
  }, []);

  useEffect(() => {
    let lastY = typeof window !== "undefined" ? window.scrollY : 0;
    let ticking = false;
    const THRESHOLD = 60; // px after which we treat header as scrolled

    function onScroll() {
      const y = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(y > THRESHOLD);

          if (y <= 10) {
            setHidden(false);
          } else {
            if (y > lastY + 8) {
              setHidden(true);
            } else if (y < lastY - 8) {
              setHidden(false);
            }
          }

          lastY = y;
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname?.startsWith(href + "/");

  const pillCls = (href) => {
    const baseColor = isHome ? "text-white/90" : "text-black/90";

    return [
      "inline-flex items-center px-2 font-secondary py-1 text-lg font-medium transition-all",
      isActive(href)
        ? "text-primary underline underline-offset-4"
        : `${baseColor} hover:text-primary hover:underline underline-offset-4`,
    ].join(" ");
  };

  return (
    <header
      ref={ref}
      className={`fixed inset-x-0 top-0 z-50  transform transition-transform duration-300 ease-out
        ${hidden ? "-translate-y-[110%]" : "translate-y-0"}
        ${
          isHome
            ? scrolled
              ? "backdrop-blur-md bg-black/40 border-b border-black/10"
              : "bg-transparent border-b border-transparent"
            : scrolled
            ? "bg-white/80 border-b border-black/10"
            : "bg-white/80 border-b border-black/10"
        }

      `}
      role="banner"
      style={{
        WebkitBackdropFilter: isHome && scrolled ? "blur(6px)" : "none",
        backdropFilter: isHome && scrolled ? "blur(6px)" : "none",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 h-30 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-56 h-30">
            <Image
              src="/head-logo-1.png"
              alt="Sensorisch"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className={pillCls(n.href)}>
              {n.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            className="p-2 rounded-md hover:bg-white/10"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            style={{ color: isHome && !scrolled ? "white" : "black" }}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden transition-max-h duration-300 ease-out overflow-hidden ${
          open ? "max-h-[500px]" : "max-h-0"
        } border-t border-black/10 ${isHome ? "bg-black/80" : "bg-white"}`}
      >
        <div className="mx-auto max-w-7xl px-6 flex flex-col gap-4">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className={[
                "px-1 py-1 text-lg transition-all font-secondary",
                isActive(n.href)
                  ? "text-primary underline underline-offset-4"
                  : `${
                      isHome ? "text-white/90" : "text-black/90"
                    } hover:text-primary hover:underline underline-offset-4`,
              ].join(" ")}
            >
              {n.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

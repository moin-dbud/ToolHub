"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sun, Moon, Menu, X } from "lucide-react";

export default function Navbar() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Apply default dark theme on load
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
    const activeTheme = storedTheme ?? "dark";

    setTheme(activeTheme);
    document.documentElement.classList.toggle("dark", activeTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-10 pb-4">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="absolute inset-0 -z-10 rounded-full bg-background/30 backdrop-blur-md" />

        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <h1 className="__className_a0cab8 cursor-pointer whitespace-nowrap text-3xl font-normal text-foreground transition-opacity hover:opacity-80">
              ToolVerse
            </h1>
          </Link>

          {/* Center Nav - Desktop */}
          <div className="hidden md:flex">
            <ul className="relative flex items-center gap-1 rounded-full border border-white/40 bg-background/50 px-1.5 py-1 overflow-visible">
              {/* Active Item */}
              <li className="relative overflow-visible">
                <Link
                  href="/"
                  className={`inline-block rounded-full px-4 py-1.5 text-sm font-medium transition ${
                    pathname === "/" 
                      ? "text-foreground border-b-2 border-primary" 
                      : "text-foreground/50 hover:text-foreground"
                  }`}
                >
                  Home
                </Link>
              </li>

              {[
                ["Features", "/features"],
                ["Pricing", "/pricing"],
                ["Blogs", "/blogs"],
                ["About", "/about"],
              ].map(([label, href]) => (
                <li key={href} className="relative overflow-visible">
                  <Link
                    href={href}
                    className={`inline-block rounded-full px-4 py-1.5 text-sm font-medium transition ${
                      pathname === href 
                        ? "text-foreground border-b-2 border-primary" 
                        : "text-foreground/70 hover:text-foreground"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}

              {/* CTA */}
              <li>
                <Link href="/login">
                  <button style={{ backgroundColor: "hsl(217, 91%, 60%)" }} className="relative rounded-full px-4 py-1.5 text-sm font-medium text-primary-foreground transition hover:opacity-80">
                    Get Started
                    <div className="absolute bottom-0 h-1/3 w-full -translate-x-4 rounded-full bg-white/30 blur-sm" />
                  </button>
                </Link>
              </li>

              {/* Theme Toggle */}
              <li className="ml-1">
                <button
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                  className="rounded-full bg-foreground/10 p-2 transition hover:bg-foreground/20"
                >
                  {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                </button>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="flex md:hidden items-center gap-2">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="rounded-full bg-foreground/10 p-2 transition hover:bg-foreground/20"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Hamburger Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="rounded-full bg-foreground/10 p-2 transition hover:bg-foreground/20"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 rounded-2xl border border-white/40 bg-background/50 p-4">
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="/"
                  className={`block rounded-full px-4 py-2 text-sm font-medium transition ${
                    pathname === "/" 
                      ? "text-foreground border-b-2 border-primary" 
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </li>

              {[
                ["Features", "/features"],
                ["Pricing", "/pricing"],
                ["Blogs", "/blogs"],
                ["About", "/about"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`block rounded-full px-4 py-2 text-sm font-medium transition ${
                      pathname === href 
                        ? "text-foreground border-b-2 border-primary" 
                        : "text-foreground/70 hover:text-foreground"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}

              <li>
                <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                  <button style={{ backgroundColor: "hsl(217, 91%, 60%)" }} className="w-full rounded-full px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-80">
                    Get Started
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

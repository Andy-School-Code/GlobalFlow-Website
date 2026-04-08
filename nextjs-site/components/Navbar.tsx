"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "#" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "#" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "#") return false;
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="flex justify-center px-3 pt-3 sm:px-0 sm:pt-4">
        <div
          className={`${
            scrolled ? "w-[94%] sm:w-[76%]" : "w-full sm:w-[96%]"
          } transition-all duration-500 ease-in-out`}
        >
          {/* MAIN NAVBAR PILL */}
          <div className="rounded-full border border-white/10 bg-[#060912]/95 px-3 py-1 shadow-[0_12px_35px_rgba(0,0,0,0.24)] backdrop-blur-xl sm:px-5 sm:py-0.5">
            <div className="relative flex items-center justify-between gap-2">
              {/* Left brand */}
              <Link
                href="/"
                className="z-10 flex min-w-0 items-center gap-2 sm:gap-3"
                onClick={closeMenu}
              >
                <Image
                  src="/logo.png"
                  alt="GlobalFlow Logo"
                  width={40}
                  height={40}
                  className="h-6 w-6 flex-shrink-0 object-contain sm:h-7 sm:w-7"
                />
                <span className="truncate text-[0.78rem] font-semibold text-white sm:text-[1.1rem]">
                  GlobalFlow Trading Inc.
                </span>
              </Link>

              {/* Desktop nav */}
              <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 md:flex">
                {navItems.map((item) => {
                  const active = isActive(item.href);

                  const content = (
                    <span
                      className={`text-[15px] transition ${
                        active
                          ? "font-semibold text-white"
                          : "text-white/70 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </span>
                  );

                  if (item.href === "#") {
                    return (
                      <span key={item.label} className="cursor-default">
                        {content}
                      </span>
                    );
                  }

                  return (
                    <Link key={item.label} href={item.href}>
                      {content}
                    </Link>
                  );
                })}
              </nav>

              {/* Desktop button */}
              <div className="ml-auto hidden md:flex">
                <Link
                  href="/contact"
                  className="rounded-full bg-white px-6 py-2.5 text-[14px] font-semibold text-[#060912] transition hover:bg-gray-200"
                >
                  Book a Call
                </Link>
              </div>

              {/* Mobile button */}
              <button
                type="button"
                onClick={() => setMenuOpen((prev) => !prev)}
                className="ml-auto rounded-full border border-white/15 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-white/5 md:hidden"
              >
                {menuOpen ? "Close" : "Menu"}
              </button>
            </div>
          </div>

          {/* MOBILE DROPDOWN - OUTSIDE THE PILL */}
          {menuOpen && (
            <div className="mt-3 rounded-3xl border border-white/10 bg-[#060912]/95 p-4 shadow-[0_12px_35px_rgba(0,0,0,0.24)] backdrop-blur-xl md:hidden">
              <div className="flex flex-col gap-2 text-sm text-white">
                <Link
                  href="/"
                  onClick={closeMenu}
                  className={`rounded-xl px-3 py-2 transition ${
                    isActive("/")
                      ? "bg-white/10 font-semibold text-white"
                      : "text-white/75 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  Home
                </Link>

                <span className="rounded-xl px-3 py-2 text-white/75">
                  About Us
                </span>

                <Link
                  href="/services"
                  onClick={closeMenu}
                  className={`rounded-xl px-3 py-2 transition ${
                    isActive("/services")
                      ? "bg-white/10 font-semibold text-white"
                      : "text-white/75 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  Services
                </Link>

                <span className="rounded-xl px-3 py-2 text-white/75">
                  Products
                </span>

                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className={`rounded-xl px-3 py-2 transition ${
                    isActive("/contact")
                      ? "bg-white/10 font-semibold text-white"
                      : "text-white/75 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  Contact
                </Link>

                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="mt-3 rounded-full bg-white px-5 py-2.5 text-center font-semibold text-[#060912]"
                >
                  Book a Call
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
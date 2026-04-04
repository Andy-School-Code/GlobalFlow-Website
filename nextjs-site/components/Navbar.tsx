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

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="flex justify-center pt-4">
        <div
          className={`rounded-full border border-white/10 bg-[#060912]/95 backdrop-blur-xl shadow-[0_12px_35px_rgba(0,0,0,0.24)] transition-all duration-500 ease-in-out ${
            scrolled
              ? "w-[76%] px-4 py-0.5"
              : "w-[96%] px-5 py-0.5"
          }`}
        >
          <div className="relative flex items-center">
            {/* Left brand */}
            <Link href="/" className="z-10 flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="GlobalFlow Logo"
                width={40}
                height={40}
                className="h-7 w-7 object-contain"
              />
              <span className="text-[1.1rem] font-semibold text-white">
                GlobalFlow Trading Inc.
              </span>
            </Link>

            {/* Center nav */}
            <nav className="absolute left-1/2 hidden -translate-x-1/2 md:flex items-center gap-10">
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

            {/* Right button */}
            <div className="ml-auto hidden md:flex">
              <Link
                href="/contact"
                className="rounded-full bg-white px-6 py-2.5 text-[14px] font-semibold text-[#060912] transition hover:bg-gray-200"
              >
                Book a Call
              </Link>
            </div>

            {/* Mobile */}
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="ml-auto rounded-full border border-white/15 px-4 py-2 text-sm text-white md:hidden"
            >
              Menu
            </button>
          </div>

          {menuOpen && (
            <div className="mt-4 border-t border-white/10 pt-4 md:hidden">
              <div className="flex flex-col gap-3 text-sm text-white">
                <Link href="/" onClick={() => setMenuOpen(false)}>
                  Home
                </Link>
                <span>About Us</span>
                <Link href="/services" onClick={() => setMenuOpen(false)}>
                  Services
                </Link>
                <span>Products</span>
                <Link href="/contact" onClick={() => setMenuOpen(false)}>
                  Contact
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="mt-2 rounded-full bg-white px-5 py-3 text-center font-semibold text-[#060912]"
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
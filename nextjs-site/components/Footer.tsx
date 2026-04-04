"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#f3f3f3] text-[#123b78]">
      <div className="mx-auto w-[88%] px-6 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="GlobalFlow Logo"
                width={34}
                height={34}
                className="h-8 w-8 object-contain"
              />

              <span className="text-[1.05rem] font-semibold text-[#123b78]">
                GlobalFlow Trading
              </span>
            </div>

            <p className="mt-5 max-w-[240px] text-[15px] leading-8 text-[#123b78]/70">
              Leading the way in global trade coordination and product sourcing
              from Toronto to the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-[#0b1f45]">
              Quick Links
            </h4>

            <ul className="mt-5 space-y-4 text-[15px] text-[#123b78]/70">
              <li>Home</li>
              <li>About Us</li>
              <li>Our Services</li>
              <li>Product Catalogue</li>
            </ul>
          </div>

          {/* Compliance */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-[#0b1f45]">
              Compliance
            </h4>

            <ul className="mt-5 space-y-4 text-[15px] text-[#123b78]/70">
              <li>Trade Regulations</li>
              <li>Quality Standards</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-[#0b1f45]">
              Contact Us
            </h4>

            <div className="mt-5 space-y-4 text-[15px] text-[#123b78]/70">
              <div className="flex items-center gap-3">
                <span>✉</span>
                <span>info@globalflowtrading.com</span>
              </div>

              <div className="flex items-center gap-3">
                <span>☎</span>
                <span>+1 (416) 254-0593</span>
              </div>

              <div className="flex items-center gap-3">
                <span>📍</span>
                <span>Toronto, Ontario, Canada</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-[#123b78]/10 pt-6 text-center text-[14px] text-[#123b78]/60">
          © 2026 GlobalFlow Trading Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0f2347] text-white">
      <div className="mx-auto w-[88%] px-6 py-12 md:py-14">
        {/* Mobile Layout */}
        <div className="md:hidden">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="GlobalFlow Logo"
              width={34}
              height={34}
              className="h-8 w-8 object-contain"
            />

            <span className="text-[1.3rem] font-semibold text-white">
              GlobalFlow Trading Inc.
            </span>
          </div>

          <p className="mt-8 max-w-[320px] text-[15px] leading-8 text-white/70">
            Leading the future of international commerce through innovation and
            reliability.
          </p>

          <div className="mt-8 space-y-3 text-[15px] text-white/75">
            <div>
              <span className="font-semibold text-white">Email:</span>{" "}
              sales@globalflowtrading.com
            </div>

            <div>
              <span className="font-semibold text-white">Phone:</span> +1 (416)
              254-0593
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-10">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
                Company
              </h4>

              <ul className="mt-5 space-y-4 text-[15px] text-white/75">
                <li>
                  <Link href="#" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Newsroom
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
                Support
              </h4>

              <ul className="mt-5 space-y-4 text-[15px] text-white/75">
                <li>
                  <Link href="#" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    API Docs
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* <div className="mt-10 border-t border-white/10 pt-6 text-center text-[14px] text-white/55">
            © 2026 GlobalFlow Trading Inc. All rights reserved.
          </div> */}
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-4 md:gap-8">
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

              <span className="text-[1.05rem] font-semibold text-white">
                GlobalFlow Trading
              </span>
            </div>

            <p className="mt-5 max-w-[240px] text-[15px] leading-8 text-white/70">
              Leading the way in global trade coordination and product sourcing
              from Toronto to the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
              Quick Links
            </h4>

            <ul className="mt-5 space-y-4 text-[15px] text-white/70">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Product Catalogue
                </Link>
              </li>
            </ul>
          </div>

          {/* Compliance */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
              Compliance
            </h4>

            <ul className="mt-5 space-y-4 text-[15px] text-white/70">
              <li>Trade Regulations</li>
              <li>Quality Standards</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
              Contact Us
            </h4>

            <div className="mt-5 space-y-4 text-[15px] text-white/70">
              <div className="flex items-center gap-3">
                <span>📧</span>
                <span>sales@globalflowtrading.com</span>
              </div>

              <div className="flex items-center gap-3">
                <span>📞</span>
                <span>+1 (416) 254-0593</span>
              </div>

              <div className="flex items-center gap-3">
                <span>📍</span>
                <span>Toronto, Ontario, Canada</span>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Divider */}
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-[14px] text-white/55">
          © 2026 GlobalFlow Trading Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
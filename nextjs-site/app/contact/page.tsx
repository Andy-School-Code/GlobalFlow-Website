"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type FormMode = "message" | "call";

export default function ContactPage() {
  const [formMode, setFormMode] = useState<FormMode>("message");

  useEffect(() => {
    if (window.location.hash === "#book-call") {
      setFormMode("call");
    }
  }, []);

  return (
    <main className="bg-[#f3f4f6] pt-20 text-[#13213d]">
      {/* DESKTOP / TABLET */}
      <div className="hidden md:block">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#0d4c8f]">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,31,63,0.86),rgba(5,31,63,0.58))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_26%,rgba(255,255,255,0.08),transparent_34%)]" />

          <div className="relative mx-auto w-[88%] py-16 lg:py-20">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold leading-tight text-white lg:text-6xl">
                Connect With Our Specialists
              </h1>

              <p className="mt-6 text-[16px] leading-8 text-white/85">
                If you are interested in working with GlobalFlow Trading Inc. or
                would like more information about our services and products,
                please contact us using the form below.
              </p>
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="mx-auto w-[88%] py-14 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[1.8fr_0.95fr]">
            {/* Left form area */}
            <div className="rounded-2xl border border-[#e5e8ee] bg-white p-8 shadow-[0_8px_18px_rgba(0,0,0,0.04)]">
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setFormMode("message")}
                  className={`rounded-full px-5 py-2.5 text-[13px] font-semibold transition ${
                    formMode === "message"
                      ? "bg-[#0d4c8f] text-white"
                      : "border border-[#d8dee8] bg-white text-[#46546d]"
                  }`}
                >
                  Send a Message
                </button>

                <button
                  type="button"
                  onClick={() => setFormMode("call")}
                  className={`rounded-full px-5 py-2.5 text-[13px] font-semibold transition ${
                    formMode === "call"
                      ? "bg-[#0d4c8f] text-white"
                      : "border border-[#d8dee8] bg-white text-[#46546d]"
                  }`}
                >
                  Book a Call
                </button>
              </div>

              <div className="mt-8">
                <h2 className="text-[1.65rem] font-semibold text-[#16233e]">
                  {formMode === "message"
                    ? "Direct Inquiry"
                    : "Schedule a Consultation"}
                </h2>

                <p className="mt-2 text-[14px] leading-7 text-[#6b7890]">
                  {formMode === "message"
                    ? "Share your inquiry with our team and we will get back to you as soon as possible."
                    : "Choose a suitable date and time to discuss your requirements with our experts."}
                </p>
              </div>

              <form className="mt-8 space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-[13px] font-medium text-[#23324d]">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder={
                        formMode === "message" ? "Your full name" : "John Doe"
                      }
                      className="w-full rounded-lg border border-[#dbe1ea] bg-white px-4 py-3 text-[14px] outline-none transition focus:border-[#0d4c8f]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[13px] font-medium text-[#23324d]">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="email@company.com"
                      className="w-full rounded-lg border border-[#dbe1ea] bg-white px-4 py-3 text-[14px] outline-none transition focus:border-[#0d4c8f]"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-[13px] font-medium text-[#23324d]">
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Organization"
                    className="w-full rounded-lg border border-[#dbe1ea] bg-white px-4 py-3 text-[14px] outline-none transition focus:border-[#0d4c8f]"
                  />
                </div>

                {formMode === "message" ? (
                  <div>
                    <label className="mb-2 block text-[13px] font-medium text-[#23324d]">
                      Message
                    </label>
                    <textarea
                      rows={6}
                      placeholder="How can we help you?"
                      className="w-full rounded-lg border border-[#dbe1ea] bg-white px-4 py-3 text-[14px] outline-none transition focus:border-[#0d4c8f]"
                    />
                  </div>
                ) : (
                  <>
                    <div>
                      <label className="mb-2 block text-[13px] font-medium text-[#23324d]">
                        Reason for Booking
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Tell us the purpose of the meeting"
                        className="w-full rounded-lg border border-[#dbe1ea] bg-white px-4 py-3 text-[14px] outline-none transition focus:border-[#0d4c8f]"
                      />
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-[13px] font-medium text-[#23324d]">
                          Preferred Date
                        </label>
                        <input
                          type="date"
                          className="w-full rounded-lg border border-[#dbe1ea] bg-white px-4 py-3 text-[14px] outline-none transition focus:border-[#0d4c8f]"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-[13px] font-medium text-[#23324d]">
                          Preferred Time
                        </label>
                        <select className="w-full rounded-lg border border-[#dbe1ea] bg-white px-4 py-3 text-[14px] outline-none transition focus:border-[#0d4c8f]">
                          <option>9:00 AM</option>
                          <option>11:00 AM</option>
                          <option>1:00 PM</option>
                          <option>3:00 PM</option>
                          <option>5:00 PM</option>
                        </select>
                      </div>
                    </div>
                  </>
                )}

                <div className="pt-1">
                  <button
                    type="submit"
                    className="rounded-md bg-[#0d4c8f] px-6 py-3 text-[13px] font-semibold text-white shadow-sm transition hover:opacity-90"
                  >
                    {formMode === "message" ? "Send Inquiry" : "Schedule Call"}
                  </button>

                  <p className="mt-3 text-[12px] text-[#7a879a]">
                    {formMode === "message"
                      ? "Our team will review your inquiry and respond as soon as possible."
                      : "Our team will review your request and confirm your preferred meeting slot."}
                  </p>
                </div>
              </form>
            </div>

            {/* Right side info */}
            <aside className="space-y-6">
              <div className="rounded-2xl border border-[#e5e8ee] bg-[#eef4fb] p-6 shadow-[0_8px_18px_rgba(0,0,0,0.03)]">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0d4c8f] text-white">
                    ◔
                  </div>

                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#4d6384]">
                      Efficiency
                    </p>
                    <h3 className="mt-1 text-[1.2rem] font-semibold text-[#16233e]">
                      Response Time
                    </h3>
                    <p className="mt-3 text-[14px] leading-7 text-[#61718c]">
                      Our global desk operates 24/5. Most inquiries are reviewed
                      and assigned to a specialized agent within 2 business
                      hours.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-[#e5e8ee] bg-white p-6 shadow-[0_8px_18px_rgba(0,0,0,0.03)]">
                <h3 className="border-l-[3px] border-[#0d4c8f] pl-3 text-[1.1rem] font-semibold text-[#16233e]">
                  Contact Information
                </h3>

                <div className="mt-6 space-y-5">
                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#62718a]">
                      Email Us
                    </p>
                    <p className="mt-1 text-[14px] text-[#23324d]">
                      info@globalflowtrading.com
                    </p>
                  </div>

                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#62718a]">
                      Phone
                    </p>
                    <p className="mt-1 text-[14px] text-[#23324d]">
                      +1 (416) 254-0593
                    </p>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-[#e5e8ee] bg-white shadow-[0_8px_18px_rgba(0,0,0,0.03)]">
                <div className="flex h-[210px] items-end bg-[linear-gradient(135deg,#dae4ef,#c7d4e3)] p-5">
                  <div className="w-full rounded-xl bg-white/90 px-4 py-3 shadow-sm backdrop-blur">
                    <p className="text-[12px] font-semibold text-[#23324d]">
                      GlobalFlow Trading Inc.
                    </p>
                    <p className="mt-1 text-[12px] text-[#728199]">
                      Toronto, Ontario, Canada
                    </p>
                  </div>
                </div>

                <div className="p-5">
                  <Link
                    href="#"
                    className="text-[13px] font-semibold text-[#0d4c8f]"
                  >
                    View Map
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Trusted strip */}
        <section className="border-y border-[#e1e6ee] bg-white py-10">
          <div className="mx-auto w-[88%] text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#7b879a]">
              Trusted by market leaders globally
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-[1.55rem] font-semibold tracking-tight text-[#a2acba]">
              <span>FORTUNE</span>
              <span>CAPITAL_ONE</span>
              <span>VENTURE_X</span>
              <span>FINTECH_SYS</span>
              <span>GLOBEX</span>
            </div>
          </div>
        </section>

        {/* Footer-like block */}
        <section className="bg-[#0a3a72] py-12 text-white">
          <div className="mx-auto grid w-[88%] gap-10 md:grid-cols-[1.3fr_0.7fr_0.8fr]">
            <div>
              <h3 className="text-[1.1rem] font-semibold">
                GlobalFlow Trading Inc.
              </h3>
              <p className="mt-4 max-w-sm text-[14px] leading-7 text-white/75">
                Connecting quality providers with institutional seekers across
                global markets.
              </p>
            </div>

            <div>
              <h4 className="text-[14px] font-semibold">Quick Links</h4>
              <div className="mt-4 space-y-2 text-[13px] text-white/75">
                <p>Home</p>
                <p>About</p>
                <p>Services</p>
                <p>Products</p>
              </div>
            </div>

            <div>
              <h4 className="text-[14px] font-semibold">Contact Info</h4>
              <div className="mt-4 space-y-2 text-[13px] text-white/75">
                <p>info@globalflowtrading.com</p>
                <p>+1 (416) 254-0593</p>
                <p>Privacy Policy</p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-10 w-[88%] border-t border-white/10 pt-5 text-[11px] text-white/45">
            © 2024 GlobalFlow Trading Inc. All rights reserved.
          </div>
        </section>
      </div>

      {/* MOBILE */}
      <div className="md:hidden">
        <section className="mx-auto w-[88%] py-6">
          {/* Hero */}
          <div className="relative overflow-hidden rounded-2xl bg-[#0d4c8f]">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,27,53,0.10),rgba(7,27,53,0.65))]" />
            <div className="relative px-5 py-8">
              <p className="inline-block rounded-md bg-white/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-white">
                Support
              </p>

              <h1 className="mt-4 text-[2rem] font-bold leading-tight text-white">
                Get In Touch
              </h1>

              <p className="mt-3 text-[14px] leading-6 text-white/85">
                Interested in working with GlobalFlow Trading Inc.? Contact us
                below.
              </p>
            </div>
          </div>

          {/* Form card */}
          <section className="mt-6 rounded-2xl border border-[#e5e8ee] bg-white p-5 shadow-[0_6px_14px_rgba(0,0,0,0.03)]">
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setFormMode("message")}
                className={`rounded-full px-4 py-2 text-[12px] font-semibold ${
                  formMode === "message"
                    ? "bg-[#0d4c8f] text-white"
                    : "border border-[#d8dee8] bg-white text-[#46546d]"
                }`}
              >
                Message
              </button>

              <button
                type="button"
                onClick={() => setFormMode("call")}
                className={`rounded-full px-4 py-2 text-[12px] font-semibold ${
                  formMode === "call"
                    ? "bg-[#0d4c8f] text-white"
                    : "border border-[#d8dee8] bg-white text-[#46546d]"
                }`}
              >
                Book a Call
              </button>
            </div>

            <form className="mt-6 space-y-4">
              <div>
                <label className="mb-2 block text-[13px] font-medium text-[#23324d]">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full rounded-lg border border-[#dbe1ea] bg-white px-4 py-3 text-[14px] outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-[13px] font-medium text-[#23324d]">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@globalflow.com"
                  className="w-full rounded-lg border border-[#dbe1ea] bg-white px-4 py-3 text-[14px] outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-[13px] font-medium text-[#23324d]">
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="Your Company"
                  className="w-full rounded-lg border border-[#dbe1ea] bg-white px-4 py-3 text-[14px] outline-none"
                />
              </div>

              {formMode === "message" ? (
                <div>
                  <label className="mb-2 block text-[13px] font-medium text-[#23324d]">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="How can we help you today?"
                    className="w-full rounded-lg border border-[#dbe1ea] bg-white px-4 py-3 text-[14px] outline-none"
                  />
                </div>
              ) : (
                <>
                  <div>
                    <label className="mb-2 block text-[13px] font-medium text-[#23324d]">
                      Reason for Booking
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Reason for booking"
                      className="w-full rounded-lg border border-[#dbe1ea] bg-white px-4 py-3 text-[14px] outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[13px] font-medium text-[#23324d]">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      className="w-full rounded-lg border border-[#dbe1ea] bg-white px-4 py-3 text-[14px] outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[13px] font-medium text-[#23324d]">
                      Preferred Time
                    </label>
                    <select className="w-full rounded-lg border border-[#dbe1ea] bg-white px-4 py-3 text-[14px] outline-none">
                      <option>9:00 AM</option>
                      <option>11:00 AM</option>
                      <option>1:00 PM</option>
                      <option>3:00 PM</option>
                      <option>5:00 PM</option>
                    </select>
                  </div>
                </>
              )}

              <button
                type="submit"
                className="w-full rounded-lg bg-[#0d4c8f] px-5 py-3 text-[13px] font-semibold text-white"
              >
                {formMode === "message" ? "Send Message" : "Schedule Call"}
              </button>

              <p className="text-center text-[11px] text-[#7a879a]">
                {formMode === "message"
                  ? "Our team will respond as soon as possible."
                  : "We will confirm your preferred call schedule shortly."}
              </p>
            </form>
          </section>

          {/* Contact info */}
          <section className="mt-6 space-y-4">
            <div className="overflow-hidden rounded-2xl border border-[#e5e8ee] bg-white shadow-[0_6px_14px_rgba(0,0,0,0.03)]">
              <div className="flex h-[120px] items-end bg-[linear-gradient(135deg,#dfe6ee,#cfd8e3)] p-4">
                <div className="w-full rounded-xl bg-white/92 px-4 py-3 shadow-sm">
                  <p className="text-[12px] font-semibold text-[#23324d]">
                    Toronto Office
                  </p>
                  <p className="mt-1 text-[12px] text-[#728199]">
                    Ontario, Canada
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[#e5e8ee] bg-white p-4 shadow-[0_6px_14px_rgba(0,0,0,0.03)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#62718a]">
                Email Us
              </p>
              <p className="mt-1 text-[14px] text-[#23324d]">
                info@globalflowtrading.com
              </p>
            </div>

            <div className="rounded-2xl border border-[#e5e8ee] bg-white p-4 shadow-[0_6px_14px_rgba(0,0,0,0.03)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#62718a]">
                Call Us
              </p>
              <p className="mt-1 text-[14px] text-[#23324d]">
                +1 (416) 254-0593
              </p>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}
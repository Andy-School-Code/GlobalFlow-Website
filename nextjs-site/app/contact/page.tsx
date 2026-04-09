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
        <section className="relative overflow-hidden bg-[#0d4c8f]">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,31,63,0.82),rgba(5,31,63,0.58))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(255,255,255,0.06),transparent_35%)]" />

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

        <section className="mx-auto w-[88%] py-14 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[1.8fr_0.95fr]">
            {/* Left form area */}
            <div className="rounded-2xl border border-[#e5e8ee] bg-white p-8 shadow-[0_8px_18px_rgba(0,0,0,0.04)]">
              {/* Toggle buttons */}
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
                      placeholder="Your full name"
                      className="w-full rounded-lg border border-[#dbe1ea] px-4 py-3 text-[14px] outline-none focus:border-[#0d4c8f]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[13px] font-medium text-[#23324d]">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="email@company.com"
                      className="w-full rounded-lg border border-[#dbe1ea] px-4 py-3 text-[14px] outline-none focus:border-[#0d4c8f]"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-[13px] font-medium text-[#23324d]">
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your organization"
                    className="w-full rounded-lg border border-[#dbe1ea] px-4 py-3 text-[14px] outline-none focus:border-[#0d4c8f]"
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
                      className="w-full rounded-lg border border-[#dbe1ea] px-4 py-3 text-[14px] outline-none focus:border-[#0d4c8f]"
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
                        className="w-full rounded-lg border border-[#dbe1ea] px-4 py-3 text-[14px] outline-none focus:border-[#0d4c8f]"
                      />
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-[13px] font-medium text-[#23324d]">
                          Preferred Date
                        </label>
                        <input
                          type="date"
                          className="w-full rounded-lg border border-[#dbe1ea] px-4 py-3 text-[14px] outline-none focus:border-[#0d4c8f]"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-[13px] font-medium text-[#23324d]">
                          Preferred Time
                        </label>
                        <select className="w-full rounded-lg border border-[#dbe1ea] px-4 py-3 text-[14px] outline-none focus:border-[#0d4c8f]">
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

                <button
                  type="submit"
                  className="rounded-md bg-[#0d4c8f] px-6 py-3 text-[13px] font-semibold text-white"
                >
                  {formMode === "message"
                    ? "Send Inquiry"
                    : "Schedule Call"}
                </button>
              </form>
            </div>

            {/* Right side info stays same */}
            <aside className="space-y-6">
              <div className="rounded-2xl border border-[#e5e8ee] bg-[#eef4fb] p-6">
                <h3 className="text-[1.2rem] font-semibold text-[#16233e]">
                  Response Time
                </h3>
                <p className="mt-3 text-[14px] leading-7 text-[#61718c]">
                  Most inquiries are reviewed within 2 business hours.
                </p>
              </div>

              <div className="rounded-2xl border border-[#e5e8ee] bg-white p-6">
                <h3 className="text-[1.1rem] font-semibold text-[#16233e]">
                  Contact Information
                </h3>

                <div className="mt-6 space-y-5">
                  <div>
                    <p className="text-[12px] font-semibold uppercase text-[#62718a]">
                      Email Us
                    </p>
                    <p className="mt-1 text-[14px]">
                      sales@globalflowtrading.com
                    </p>
                  </div>

                  <div>
                    <p className="text-[12px] font-semibold uppercase text-[#62718a]">
                      Phone
                    </p>
                    <p className="mt-1 text-[14px]">
                      +1 (416) 254-0593
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </div>

      {/* MOBILE */}
      <div className="md:hidden">
        <section className="mx-auto w-[88%] py-6">
          <div className="rounded-2xl bg-[#0d4c8f] px-5 py-8 text-white">
            <h1 className="text-[2rem] font-bold">Get In Touch</h1>
            <p className="mt-3 text-[14px] leading-6 text-white/85">
              Interested in working with GlobalFlow Trading Inc.?
            </p>
          </div>

          <section className="mt-6 rounded-2xl border border-[#e5e8ee] bg-white p-5">
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setFormMode("message")}
                className={`rounded-full px-4 py-2 text-[12px] font-semibold ${
                  formMode === "message"
                    ? "bg-[#0d4c8f] text-white"
                    : "border border-[#d8dee8]"
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
                    : "border border-[#d8dee8]"
                }`}
              >
                Book a Call
              </button>
            </div>

            <form className="mt-6 space-y-4">
              <input
                type="text"
                placeholder="John Doe"
                className="w-full rounded-lg border border-[#dbe1ea] px-4 py-3"
              />

              <input
                type="email"
                placeholder="john@xyz.com"
                className="w-full rounded-lg border border-[#dbe1ea] px-4 py-3"
              />

              {formMode === "message" ? (
                <textarea
                  rows={5}
                  placeholder="How can we help you today?"
                  className="w-full rounded-lg border border-[#dbe1ea] px-4 py-3"
                />
              ) : (
                <>
                  <textarea
                    rows={4}
                    placeholder="Reason for booking"
                    className="w-full rounded-lg border border-[#dbe1ea] px-4 py-3"
                  />

                  <input
                    type="date"
                    className="w-full rounded-lg border border-[#dbe1ea] px-4 py-3"
                  />

                  <select className="w-full rounded-lg border border-[#dbe1ea] px-4 py-3">
                    <option>9:00 AM</option>
                    <option>11:00 AM</option>
                    <option>1:00 PM</option>
                    <option>3:00 PM</option>
                  </select>
                </>
              )}

              <button
                type="submit"
                className="w-full rounded-lg bg-[#0d4c8f] px-5 py-3 text-[13px] font-semibold text-white"
              >
                {formMode === "message"
                  ? "Send Message"
                  : "Schedule Call"}
              </button>
            </form>
          </section>
        </section>
      </div>
    </main>
  );
}
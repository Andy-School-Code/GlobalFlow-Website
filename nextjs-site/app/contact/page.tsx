"use client";

import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="bg-[#f3f4f6] pt-20 text-[#13213d]">
      {/* DESKTOP / TABLET */}
      <div className="hidden md:block">
        {/* Hero */}
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

        {/* Contact content */}
        <section className="mx-auto w-[88%] py-14 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[1.8fr_0.95fr]">
            {/* Left form area */}
            <div className="rounded-2xl border border-[#e5e8ee] bg-white p-8 shadow-[0_8px_18px_rgba(0,0,0,0.04)]">
              {/* Toggle buttons - visible only for structure right now */}
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  className="rounded-full bg-[#0d4c8f] px-5 py-2.5 text-[13px] font-semibold text-white"
                >
                  Send a Message
                </button>
                <button
                  type="button"
                  className="rounded-full border border-[#d8dee8] bg-white px-5 py-2.5 text-[13px] font-semibold text-[#46546d]"
                >
                  Book a Call
                </button>
              </div>

              <div className="mt-8">
                <h2 className="text-[1.65rem] font-semibold text-[#16233e]">
                  Direct Inquiry
                </h2>
                <p className="mt-2 text-[14px] leading-7 text-[#6b7890]">
                  Share your inquiry with our team and we will get back to you
                  as soon as possible.
                </p>
              </div>

              <form className="mt-8 space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-[13px] font-medium text-[#23324d]"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Your full name"
                      className="w-full rounded-lg border border-[#dbe1ea] bg-white px-4 py-3 text-[14px] text-[#1b2943] outline-none transition focus:border-[#0d4c8f]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-[13px] font-medium text-[#23324d]"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="email@company.com"
                      className="w-full rounded-lg border border-[#dbe1ea] bg-white px-4 py-3 text-[14px] text-[#1b2943] outline-none transition focus:border-[#0d4c8f]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="mb-2 block text-[13px] font-medium text-[#23324d]"
                  >
                    Company Name
                  </label>
                  <input
                    id="company"
                    type="text"
                    placeholder="Your organization"
                    className="w-full rounded-lg border border-[#dbe1ea] bg-white px-4 py-3 text-[14px] text-[#1b2943] outline-none transition focus:border-[#0d4c8f]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-[13px] font-medium text-[#23324d]"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    placeholder="How can we help you?"
                    className="w-full rounded-lg border border-[#dbe1ea] bg-white px-4 py-3 text-[14px] text-[#1b2943] outline-none transition focus:border-[#0d4c8f]"
                  />
                </div>

                <div className="pt-1">
                  <button
                    type="submit"
                    className="rounded-md bg-[#0d4c8f] px-6 py-3 text-[13px] font-semibold text-white shadow-sm transition hover:opacity-90"
                  >
                    Send Inquiry
                  </button>

                  <p className="mt-3 text-[12px] text-[#7a879a]">
                    Our team will review your inquiry and respond as soon as
                    possible.
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

                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#62718a]">
                      Office
                    </p>
                    <p className="mt-1 text-[14px] leading-7 text-[#23324d]">
                      Toronto, Ontario
                      <br />
                      Canada
                    </p>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-[#e5e8ee] bg-white shadow-[0_8px_18px_rgba(0,0,0,0.03)]">
                <div className="flex h-[210px] items-center justify-center bg-[linear-gradient(135deg,#dfe6ee,#cfd8e3)] text-center">
                  <div>
                    <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-[#5c6d86]">
                      Office Location
                    </p>
                    <p className="mt-3 text-[1rem] font-medium text-[#22304a]">
                      Toronto, Ontario
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
                className="rounded-full bg-[#0d4c8f] px-4 py-2 text-[12px] font-semibold text-white"
              >
                Message
              </button>
              <button
                type="button"
                className="rounded-full border border-[#d8dee8] bg-white px-4 py-2 text-[12px] font-semibold text-[#46546d]"
              >
                Book a Call
              </button>
            </div>

            <form className="mt-6 space-y-4">
              <div>
                <label
                  htmlFor="mobile-name"
                  className="mb-2 block text-[13px] font-medium text-[#23324d]"
                >
                  Name
                </label>
                <input
                  id="mobile-name"
                  type="text"
                  placeholder="John Doe"
                  className="w-full rounded-lg border border-[#dbe1ea] bg-white px-4 py-3 text-[14px] text-[#1b2943] outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="mobile-email"
                  className="mb-2 block text-[13px] font-medium text-[#23324d]"
                >
                  Email Address
                </label>
                <input
                  id="mobile-email"
                  type="email"
                  placeholder="john@globalflow.com"
                  className="w-full rounded-lg border border-[#dbe1ea] bg-white px-4 py-3 text-[14px] text-[#1b2943] outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="mobile-company"
                  className="mb-2 block text-[13px] font-medium text-[#23324d]"
                >
                  Company Name
                </label>
                <input
                  id="mobile-company"
                  type="text"
                  placeholder="Your Company"
                  className="w-full rounded-lg border border-[#dbe1ea] bg-white px-4 py-3 text-[14px] text-[#1b2943] outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="mobile-message"
                  className="mb-2 block text-[13px] font-medium text-[#23324d]"
                >
                  Message
                </label>
                <textarea
                  id="mobile-message"
                  rows={5}
                  placeholder="How can we help you today?"
                  className="w-full rounded-lg border border-[#dbe1ea] bg-white px-4 py-3 text-[14px] text-[#1b2943] outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-[#0d4c8f] px-5 py-3 text-center text-[13px] font-semibold text-white"
              >
                Send Message
              </button>

              <p className="text-center text-[11px] text-[#7a879a]">
                Our team will respond as soon as possible.
              </p>
            </form>
          </section>

          {/* Contact info */}
          <section className="mt-6 space-y-4">
            <div className="overflow-hidden rounded-2xl border border-[#e5e8ee] bg-white shadow-[0_6px_14px_rgba(0,0,0,0.03)]">
              <div className="flex h-[120px] items-center justify-center bg-[linear-gradient(135deg,#dfe6ee,#cfd8e3)]">
                <div className="text-center">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#5c6d86]">
                    Our Global HQ
                  </p>
                  <p className="mt-2 text-[14px] font-medium text-[#22304a]">
                    Toronto, Ontario
                  </p>
                </div>
              </div>

              <div className="p-4">
                <p className="text-[13px] font-semibold text-[#23324d]">
                  Toronto Office
                </p>
                <p className="mt-1 text-[12px] text-[#728199]">
                  Ontario, Canada
                </p>
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
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import AnimatedContent from "@/components/reactbits/AnimatedContent";
import ShinyText from "@/components/reactbits/ShinyText";

type FormMode = "message" | "call";

type SubmitState = {
  loading: boolean;
  success: string;
  error: string;
};

const initialSubmitState: SubmitState = {
  loading: false,
  success: "",
  error: "",
};

const OFFICE_MAP_LINK =
  "https://www.google.com/maps/search/?api=1&query=1385+Midland+Ave,+Toronto,+ON,+Canada";

export default function ContactPage() {
  const [formMode, setFormMode] = useState<FormMode>("message");
  const [submitState, setSubmitState] = useState<SubmitState>(initialSubmitState);

  const [messageForm, setMessageForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [callForm, setCallForm] = useState({
    name: "",
    email: "",
    company: "",
    reason: "",
    preferredDate: "",
    preferredTime: "9:00 AM",
  });

  useEffect(() => {
    if (window.location.hash === "#book-call") {
      setFormMode("call");
    }
  }, []);

  const resetFeedback = () => {
    setSubmitState((prev) => ({
      ...prev,
      success: "",
      error: "",
    }));
  };

  const handleMessageSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    resetFeedback();
    setSubmitState({ loading: true, success: "", error: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mode: "message",
          ...messageForm,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Unable to send your inquiry.");
      }

      setSubmitState({
        loading: false,
        success: "Your message has been sent successfully.",
        error: "",
      });

      setMessageForm({
        name: "",
        email: "",
        company: "",
        message: "",
      });
    } catch (error) {
      setSubmitState({
        loading: false,
        success: "",
        error:
          error instanceof Error
            ? error.message
            : "Something went wrong while sending your inquiry.",
      });
    }
  };

  const handleCallSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    resetFeedback();
    setSubmitState({ loading: true, success: "", error: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mode: "call",
          ...callForm,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Unable to submit your booking request.");
      }

      setSubmitState({
        loading: false,
        success: "Your booking request has been submitted successfully.",
        error: "",
      });

      setCallForm({
        name: "",
        email: "",
        company: "",
        reason: "",
        preferredDate: "",
        preferredTime: "9:00 AM",
      });
    } catch (error) {
      setSubmitState({
        loading: false,
        success: "",
        error:
          error instanceof Error
            ? error.message
            : "Something went wrong while sending your booking request.",
      });
    }
  };

  return (
    <main className="bg-[#f3f4f6] pt-20 text-[#13213d]">
      <div className="hidden md:block">
        <section className="relative overflow-hidden bg-[#0d4c8f]">
          <div className="absolute inset-0">
            <Image
              src="/images/contact/contact-hero.jpg"
              alt="Contact GlobalFlow Trading"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,31,63,0.86),rgba(5,31,63,0.58))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_26%,rgba(255,255,255,0.08),transparent_34%)]" />
          <div className="pointer-events-none absolute right-10 top-10 h-24 w-24 rounded-full bg-white/10 blur-2xl" />

          <div className="relative mx-auto w-[88%] py-16 lg:py-20">
            <AnimatedContent
              distance={24}
              direction="vertical"
              reverse={false}
              duration={0.7}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.2}
            >
              <div className="max-w-2xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/75">
                  Contact GlobalFlow
                </p>

                <h1 className="mt-4 text-5xl font-bold leading-tight text-white lg:text-6xl">
                  Connect With Our Specialists
                </h1>

                <p className="mt-6 text-[16px] leading-8 text-white/85">
                  If you are interested in working with GlobalFlow Trading Inc.
                  or would like more information about our services and
                  products, please contact us using the form below.
                </p>
              </div>
            </AnimatedContent>
          </div>
        </section>

        <section className="mx-auto w-[88%] py-14 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[1.8fr_0.95fr]">
            <AnimatedContent
              distance={18}
              direction="vertical"
              reverse={false}
              duration={0.65}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.15}
            >
              <div className="rounded-2xl border border-[#e5e8ee] bg-white p-8 shadow-[0_8px_18px_rgba(0,0,0,0.04)]">
                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setFormMode("message");
                      resetFeedback();
                    }}
                    className={`rounded-full px-5 py-2.5 text-[13px] font-semibold transition ${
                      formMode === "message"
                        ? "bg-[#0d4c8f] text-white"
                        : "border border-[#d8dee8] bg-white text-[#46546d]"
                    }`}
                  >
                    <ShinyText
                      text="Send a Message"
                      disabled={false}
                      speed={3}
                      className={
                        formMode === "message"
                          ? "text-[13px] font-semibold text-white"
                          : "text-[13px] font-semibold text-[#46546d]"
                      }
                    />
                  </button>

                  <button
                    id="book-call"
                    type="button"
                    onClick={() => {
                      setFormMode("call");
                      resetFeedback();
                      if (typeof window !== "undefined") {
                        window.history.replaceState(null, "", "/contact#book-call");
                      }
                    }}
                    className={`rounded-full px-5 py-2.5 text-[13px] font-semibold transition ${
                      formMode === "call"
                        ? "bg-[#0d4c8f] text-white"
                        : "border border-[#d8dee8] bg-white text-[#46546d]"
                    }`}
                  >
                    <ShinyText
                      text="Book a Call"
                      disabled={false}
                      speed={3}
                      className={
                        formMode === "call"
                          ? "text-[13px] font-semibold text-white"
                          : "text-[13px] font-semibold text-[#46546d]"
                      }
                    />
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

                {submitState.success ? (
                  <div className="mt-6 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-[14px] text-green-700">
                    {submitState.success}
                  </div>
                ) : null}

                {submitState.error ? (
                  <div className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-[14px] text-red-700">
                    {submitState.error}
                  </div>
                ) : null}

                {formMode === "message" ? (
                  <form className="mt-8 space-y-5" onSubmit={handleMessageSubmit}>
                    <div className="grid gap-5 md:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-[13px] font-medium text-[#23324d]">
                          Name
                        </label>
                        <input
                          type="text"
                          required
                          value={messageForm.name}
                          onChange={(e) =>
                            setMessageForm((prev) => ({
                              ...prev,
                              name: e.target.value,
                            }))
                          }
                          placeholder="Your full name"
                          className="w-full rounded-lg border border-[#dbe1ea] bg-white px-4 py-3 text-[14px] outline-none transition focus:border-[#0d4c8f]"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-[13px] font-medium text-[#23324d]">
                          Email
                        </label>
                        <input
                          type="email"
                          required
                          value={messageForm.email}
                          onChange={(e) =>
                            setMessageForm((prev) => ({
                              ...prev,
                              email: e.target.value,
                            }))
                          }
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
                        value={messageForm.company}
                        onChange={(e) =>
                          setMessageForm((prev) => ({
                            ...prev,
                            company: e.target.value,
                          }))
                        }
                        placeholder="Your Organization"
                        className="w-full rounded-lg border border-[#dbe1ea] bg-white px-4 py-3 text-[14px] outline-none transition focus:border-[#0d4c8f]"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-[13px] font-medium text-[#23324d]">
                        Message
                      </label>
                      <textarea
                        rows={6}
                        required
                        value={messageForm.message}
                        onChange={(e) =>
                          setMessageForm((prev) => ({
                            ...prev,
                            message: e.target.value,
                          }))
                        }
                        placeholder="How can we help you?"
                        className="w-full rounded-lg border border-[#dbe1ea] bg-white px-4 py-3 text-[14px] outline-none transition focus:border-[#0d4c8f]"
                      />
                    </div>

                    <div className="pt-1">
                      <button
                        type="submit"
                        disabled={submitState.loading}
                        className="rounded-md bg-[#0d4c8f] px-6 py-3 text-[13px] font-semibold text-white shadow-sm transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        <ShinyText
                          text={submitState.loading ? "Sending..." : "Send Inquiry"}
                          disabled={false}
                          speed={3}
                          className="text-[13px] font-semibold text-white"
                        />
                      </button>
                    </div>
                  </form>
                ) : (
                  <form className="mt-8 space-y-5" onSubmit={handleCallSubmit}>
                    <div className="grid gap-5 md:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-[13px] font-medium text-[#23324d]">
                          Name
                        </label>
                        <input
                          type="text"
                          required
                          value={callForm.name}
                          onChange={(e) =>
                            setCallForm((prev) => ({
                              ...prev,
                              name: e.target.value,
                            }))
                          }
                          placeholder="John Doe"
                          className="w-full rounded-lg border border-[#dbe1ea] bg-white px-4 py-3 text-[14px] outline-none transition focus:border-[#0d4c8f]"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-[13px] font-medium text-[#23324d]">
                          Email
                        </label>
                        <input
                          type="email"
                          required
                          value={callForm.email}
                          onChange={(e) =>
                            setCallForm((prev) => ({
                              ...prev,
                              email: e.target.value,
                            }))
                          }
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
                        value={callForm.company}
                        onChange={(e) =>
                          setCallForm((prev) => ({
                            ...prev,
                            company: e.target.value,
                          }))
                        }
                        placeholder="Your Organization"
                        className="w-full rounded-lg border border-[#dbe1ea] bg-white px-4 py-3 text-[14px] outline-none transition focus:border-[#0d4c8f]"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-[13px] font-medium text-[#23324d]">
                        Reason for Booking
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={callForm.reason}
                        onChange={(e) =>
                          setCallForm((prev) => ({
                            ...prev,
                            reason: e.target.value,
                          }))
                        }
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
                          required
                          value={callForm.preferredDate}
                          onChange={(e) =>
                            setCallForm((prev) => ({
                              ...prev,
                              preferredDate: e.target.value,
                            }))
                          }
                          className="h-[54px] w-full rounded-lg border border-[#dbe1ea] bg-white px-4 text-[14px] text-[#1b2943] outline-none transition focus:border-[#0d4c8f] appearance-none [&::-webkit-datetime-edit]:text-[#1b2943]"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-[13px] font-medium text-[#23324d]">
                          Preferred Time
                        </label>
                        <select
                          value={callForm.preferredTime}
                          onChange={(e) =>
                            setCallForm((prev) => ({
                              ...prev,
                              preferredTime: e.target.value,
                            }))
                          }
                          className="h-[54px] w-full rounded-lg border border-[#dbe1ea] bg-white px-4 text-[14px] text-[#1b2943] outline-none transition focus:border-[#0d4c8f]"
                        >
                          <option>9:00 AM</option>
                          <option>11:00 AM</option>
                          <option>1:00 PM</option>
                          <option>3:00 PM</option>
                          <option>5:00 PM</option>
                        </select>
                      </div>
                    </div>

                    <div className="pt-1">
                      <button
                        type="submit"
                        disabled={submitState.loading}
                        className="rounded-md bg-[#0d4c8f] px-6 py-3 text-[13px] font-semibold text-white shadow-sm transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        <ShinyText
                          text={submitState.loading ? "Submitting..." : "Schedule Call"}
                          disabled={false}
                          speed={3}
                          className="text-[13px] font-semibold text-white"
                        />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </AnimatedContent>

            <div className="space-y-6">
              <AnimatedContent
                distance={16}
                direction="vertical"
                reverse={false}
                duration={0.6}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.2}
              >
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
                        Our global desk operates 24/5. Most inquiries are
                        reviewed and assigned quickly.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedContent>

              <AnimatedContent
                distance={16}
                direction="vertical"
                reverse={false}
                duration={0.6}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.2}
              >
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
              </AnimatedContent>

              <AnimatedContent
                distance={16}
                direction="vertical"
                reverse={false}
                duration={0.6}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.2}
              >
                <a
                  href={OFFICE_MAP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="block overflow-hidden rounded-2xl border border-[#e5e8ee] bg-white shadow-[0_8px_18px_rgba(0,0,0,0.03)] transition hover:-translate-y-1"
                >
                  <div className="relative h-[240px]">
                    <Image
                      src="/images/contact/contact-office.jpg"
                      alt="GlobalFlow Trading office location"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,27,53,0.08),rgba(7,27,53,0.35))]" />
                    <div className="absolute left-4 top-4 rounded-lg bg-white/90 px-3 py-2 text-[12px] font-medium text-[#23324d] shadow-sm backdrop-blur">
                      1385 Midland Ave, Toronto
                    </div>
                  </div>

                  <div className="flex items-center justify-between px-5 py-4">
                    <div>
                      <p className="text-[13px] font-semibold text-[#23324d]">
                        GlobalFlow Trading Inc.
                      </p>
                      <p className="mt-1 text-[12px] text-[#728199]">
                        Toronto, Ontario, Canada
                      </p>
                    </div>

                    <ShinyText
                      text="Open Map"
                      disabled={false}
                      speed={3}
                      className="text-[12px] font-semibold text-[#0d4c8f]"
                    />
                  </div>
                </a>
              </AnimatedContent>
            </div>
          </div>
        </section>
      </div>

      <div className="md:hidden">
        <section className="mx-auto w-[88%] py-6">
          <div className="relative overflow-hidden rounded-2xl bg-[#0d4c8f]">
            <div className="absolute inset-0">
              <Image
                src="/images/contact/contact-mobile-hero.jpg"
                alt="GlobalFlow contact mobile hero"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,27,53,0.18),rgba(7,27,53,0.72))]" />

            <AnimatedContent
              distance={20}
              direction="vertical"
              reverse={false}
              duration={0.7}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.2}
            >
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
            </AnimatedContent>
          </div>

          <section className="mt-6 rounded-2xl border border-[#e5e8ee] bg-white p-5 shadow-[0_6px_14px_rgba(0,0,0,0.03)]">
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => {
                  setFormMode("message");
                  resetFeedback();
                }}
                className={`rounded-full px-4 py-2 text-[12px] font-semibold ${
                  formMode === "message"
                    ? "bg-[#0d4c8f] text-white"
                    : "border border-[#d8dee8] bg-white text-[#46546d]"
                }`}
              >
                <ShinyText
                  text="Message"
                  disabled={false}
                  speed={3}
                  className={
                    formMode === "message"
                      ? "text-[12px] font-semibold text-white"
                      : "text-[12px] font-semibold text-[#46546d]"
                  }
                />
              </button>

              <button
                type="button"
                onClick={() => {
                  setFormMode("call");
                  resetFeedback();
                  if (typeof window !== "undefined") {
                    window.history.replaceState(null, "", "/contact#book-call");
                  }
                }}
                className={`rounded-full px-4 py-2 text-[12px] font-semibold ${
                  formMode === "call"
                    ? "bg-[#0d4c8f] text-white"
                    : "border border-[#d8dee8] bg-white text-[#46546d]"
                }`}
              >
                <ShinyText
                  text="Book a Call"
                  disabled={false}
                  speed={3}
                  className={
                    formMode === "call"
                      ? "text-[12px] font-semibold text-white"
                      : "text-[12px] font-semibold text-[#46546d]"
                  }
                />
              </button>
            </div>

            {submitState.success ? (
              <div className="mt-4 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-[14px] text-green-700">
                {submitState.success}
              </div>
            ) : null}

            {submitState.error ? (
              <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-[14px] text-red-700">
                {submitState.error}
              </div>
            ) : null}

            {formMode === "message" ? (
              <form className="mt-6 space-y-4" onSubmit={handleMessageSubmit}>
                <div>
                  <label className="mb-2 block text-[13px] font-medium text-[#23324d]">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={messageForm.name}
                    onChange={(e) =>
                      setMessageForm((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
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
                    required
                    value={messageForm.email}
                    onChange={(e) =>
                      setMessageForm((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
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
                    value={messageForm.company}
                    onChange={(e) =>
                      setMessageForm((prev) => ({
                        ...prev,
                        company: e.target.value,
                      }))
                    }
                    placeholder="Your Company"
                    className="w-full rounded-lg border border-[#dbe1ea] bg-white px-4 py-3 text-[14px] outline-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[13px] font-medium text-[#23324d]">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={messageForm.message}
                    onChange={(e) =>
                      setMessageForm((prev) => ({
                        ...prev,
                        message: e.target.value,
                      }))
                    }
                    placeholder="How can we help you today?"
                    className="w-full rounded-lg border border-[#dbe1ea] bg-white px-4 py-3 text-[14px] outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitState.loading}
                  className="w-full rounded-lg bg-[#0d4c8f] px-5 py-3 text-[13px] font-semibold text-white disabled:opacity-60"
                >
                  <ShinyText
                    text={submitState.loading ? "Sending..." : "Send Message"}
                    disabled={false}
                    speed={3}
                    className="text-[13px] font-semibold text-white"
                  />
                </button>
              </form>
            ) : (
              <form className="mt-6 space-y-4" onSubmit={handleCallSubmit}>
                <div>
                  <label className="mb-2 block text-[13px] font-medium text-[#23324d]">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={callForm.name}
                    onChange={(e) =>
                      setCallForm((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
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
                    required
                    value={callForm.email}
                    onChange={(e) =>
                      setCallForm((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
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
                    value={callForm.company}
                    onChange={(e) =>
                      setCallForm((prev) => ({
                        ...prev,
                        company: e.target.value,
                      }))
                    }
                    placeholder="Your Company"
                    className="w-full rounded-lg border border-[#dbe1ea] bg-white px-4 py-3 text-[14px] outline-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[13px] font-medium text-[#23324d]">
                    Reason for Booking
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={callForm.reason}
                    onChange={(e) =>
                      setCallForm((prev) => ({
                        ...prev,
                        reason: e.target.value,
                      }))
                    }
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
                    required
                    value={callForm.preferredDate}
                    onChange={(e) =>
                      setCallForm((prev) => ({
                        ...prev,
                        preferredDate: e.target.value,
                      }))
                    }
                    className="h-[52px] w-full rounded-lg border border-[#dbe1ea] bg-white px-4 text-[14px] text-[#1b2943] outline-none appearance-none [&::-webkit-datetime-edit]:text-[#1b2943]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[13px] font-medium text-[#23324d]">
                    Preferred Time
                  </label>
                  <select
                    value={callForm.preferredTime}
                    onChange={(e) =>
                      setCallForm((prev) => ({
                        ...prev,
                        preferredTime: e.target.value,
                      }))
                    }
                    className="h-[52px] w-full rounded-lg border border-[#dbe1ea] bg-white px-4 text-[14px] text-[#1b2943] outline-none"
                  >
                    <option>9:00 AM</option>
                    <option>11:00 AM</option>
                    <option>1:00 PM</option>
                    <option>3:00 PM</option>
                    <option>5:00 PM</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={submitState.loading}
                  className="w-full rounded-lg bg-[#0d4c8f] px-5 py-3 text-[13px] font-semibold text-white disabled:opacity-60"
                >
                  <ShinyText
                    text={submitState.loading ? "Submitting..." : "Schedule Call"}
                    disabled={false}
                    speed={3}
                    className="text-[13px] font-semibold text-white"
                  />
                </button>
              </form>
            )}
          </section>

          <section className="mt-6 space-y-4">
            <AnimatedContent
              distance={16}
              direction="vertical"
              reverse={false}
              duration={0.6}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.2}
            >
              <a
                href={OFFICE_MAP_LINK}
                target="_blank"
                rel="noreferrer"
                className="block overflow-hidden rounded-2xl border border-[#e5e8ee] bg-white shadow-[0_6px_14px_rgba(0,0,0,0.03)]"
              >
                <div className="relative h-[170px]">
                  <Image
                    src="/images/contact/contact-office.jpg"
                    alt="GlobalFlow office location"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,27,53,0.08),rgba(7,27,53,0.35))]" />
                  <div className="absolute inset-x-4 bottom-4 rounded-xl bg-white/92 px-4 py-3 shadow-sm backdrop-blur">
                    <p className="text-[13px] font-semibold text-[#23324d]">
                      Toronto Office
                    </p>
                    <p className="mt-1 text-[12px] text-[#728199]">
                      1385 Midland Ave, Toronto
                    </p>
                  </div>
                </div>
              </a>
            </AnimatedContent>

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
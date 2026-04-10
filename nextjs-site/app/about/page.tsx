"use client";

import Image from "next/image";

import AnimatedContent from "@/components/reactbits/AnimatedContent";
import BlurText from "@/components/reactbits/BlurText";
import CountUp from "@/components/reactbits/CountUp";
import FadeContent from "@/components/reactbits/FadeContent";

const companyStats = [
  { value: 25, suffix: "+", label: "Trusted supplier relationships" },
  { value: 80, suffix: "+", label: "Trade projects supported" },
  { value: 2.4, suffix: "K", label: "Documents coordinated" },
];

const pillars = [
  {
    title: "Our Vision",
    description:
      "To become the trusted bridge between businesses and dependable trade opportunities across global markets.",
  },
  {
    title: "Our Mission",
    description:
      "To simplify sourcing, logistics, and trade coordination with clear guidance and reliable execution.",
  },
];

const capabilities = [
  {
    icon: "01",
    title: "Product Sourcing",
    description:
      "We help businesses identify reliable suppliers and evaluate options with greater confidence.",
  },
  {
    icon: "02",
    title: "Trade Documentation",
    description:
      "Our coordination keeps shipping paperwork, customs files, and trade records organized and moving.",
  },
  {
    icon: "03",
    title: "Shipment Coordination",
    description:
      "We support communication across suppliers, freight partners, and receiving teams to reduce delays.",
  },
  {
    icon: "04",
    title: "Market Guidance",
    description:
      "We provide practical trade support for businesses expanding into new regions and supply networks.",
  },
];

const markets = ["North America", "South America", "Europe", "Middle East"];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f3f4f6] pt-20 text-[#13213d]">
      <section className="bg-[#f3f4f6] pt-2">
        <div className="mx-auto w-[92%] max-w-7xl xl:w-[88%]">
          <div className="relative overflow-hidden rounded-[34px] bg-[#0b3f78]">
            <div className="absolute inset-0">
              <Image
                src="/images/aboutus/About-Us-Hero-Desktop.jpg"
                alt="GlobalFlow global trade network"
                fill
                priority
                className="object-cover object-center"
              />
            </div>

            <div className="absolute inset-0 bg-[linear-gradient(96deg,rgba(5,28,57,0.9),rgba(9,54,104,0.62))]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_26%,rgba(255,255,255,0.12),transparent_32%)]" />

            <div className="relative px-6 py-14 sm:px-8 lg:px-10 lg:py-18 xl:px-12 xl:py-20">
              <AnimatedContent
                distance={60}
                direction="vertical"
                reverse={false}
                duration={0.8}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.15}
              >
                <div className="max-w-3xl">
                  <FadeContent blur duration={700} easing="ease-out" initialOpacity={0}>
                    <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/75 backdrop-blur-sm">
                      About GlobalFlow
                    </p>
                  </FadeContent>

                  <div className="mt-5">
                    <BlurText
                      text="Pioneering Global Trade Excellence"
                      delay={120}
                      animateBy="words"
                      direction="top"
                      className="max-w-3xl text-4xl font-bold leading-[1.02] text-white sm:text-5xl xl:text-6xl"
                    />
                  </div>

                  <FadeContent blur duration={900} easing="ease-out" initialOpacity={0}>
                    <p className="mt-6 max-w-2xl text-[15px] leading-8 text-white/84 sm:text-[16px]">
                      Connecting businesses to sourcing, logistics, and global trade
                      opportunities with practical coordination and dependable
                      support.
                    </p>
                  </FadeContent>
                </div>
              </AnimatedContent>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-[92%] max-w-7xl py-10 sm:py-12 xl:w-[88%]">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <AnimatedContent
            distance={40}
            direction="vertical"
            reverse={false}
            duration={0.75}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={0.98}
            threshold={0.15}
          >
            <div className="rounded-[30px] border border-[#e4e8ef] bg-white p-7 shadow-[0_10px_30px_rgba(0,0,0,0.04)] sm:p-8">
              <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#6f8099]">
                Company Overview
              </p>

              <h2 className="mt-4 text-[1.9rem] font-bold leading-tight text-[#16233e] sm:text-[2.2rem]">
                Trade support built on trust, clarity, and follow-through.
              </h2>

              <p className="mt-5 max-w-2xl text-[15px] leading-8 text-[#627089]">
                GlobalFlow Trading Inc. helps businesses manage sourcing,
                documentation, shipment coordination, and global trade workflows
                with a practical approach that keeps every stage easier to handle.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-3">
                {companyStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[22px] border border-[#e8edf4] bg-[#f8fbff] px-4 py-5"
                  >
                    <div className="text-3xl font-bold text-[#0d4c8f]">
                      <CountUp to={stat.value} duration={1.8} />
                      <span>{stat.suffix}</span>
                    </div>

                    <p className="mt-2 text-[13px] leading-6 text-[#6b7890]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedContent>

          <AnimatedContent
            distance={44}
            direction="vertical"
            reverse={false}
            duration={0.8}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={0.98}
            threshold={0.15}
          >
            <div className="relative min-h-[320px] overflow-hidden rounded-[30px] border border-[#e4e8ef] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
              <Image
                src="/images/aboutus/Handshake.jpg"
                alt="Handshake between business partners"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,31,59,0.08),rgba(9,31,59,0.38))]" />

              <div className="absolute bottom-5 left-5 right-5 rounded-[24px] border border-white/15 bg-white/12 p-5 backdrop-blur-md">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/75">
                  Relationship-first approach
                </p>
                <p className="mt-3 text-[15px] leading-7 text-white/88">
                  We focus on dependable communication and steady coordination with
                  every client, supplier, and logistics partner.
                </p>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </section>

      <section className="bg-[#123b78] py-10 sm:py-12">
        <div className="mx-auto grid w-[92%] max-w-7xl gap-6 md:grid-cols-2 xl:w-[88%]">
          {pillars.map((pillar, index) => (
            <AnimatedContent
              key={pillar.title}
              distance={42}
              direction="vertical"
              reverse={false}
              duration={0.8}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={0.98}
              threshold={0.15}
              delay={index * 0.08}
            >
              <div className="h-full rounded-[28px] border border-white/10 bg-white/6 p-7 text-white backdrop-blur-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-[16px] bg-white/12 text-[13px] font-semibold uppercase tracking-[0.18em] text-white/80">
                  {index === 0 ? "V" : "M"}
                </div>

                <h3 className="mt-5 text-[1.6rem] font-semibold">{pillar.title}</h3>

                <p className="mt-4 max-w-md text-[15px] leading-8 text-white/78">
                  {pillar.description}
                </p>
              </div>
            </AnimatedContent>
          ))}
        </div>
      </section>

      <section className="mx-auto w-[92%] max-w-7xl py-12 sm:py-14 xl:w-[88%]">
        <AnimatedContent
          distance={40}
          direction="vertical"
          reverse={false}
          duration={0.75}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={0.98}
          threshold={0.15}
        >
          <div className="text-center">
            <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#6f8099]">
              What We Do
            </p>

            <h2 className="mt-4 text-[1.95rem] font-bold text-[#16233e] sm:text-[2.35rem]">
              Coordinated support for every stage of trade.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-8 text-[#627089]">
              We bring sourcing, documentation, and shipment execution into one
              clear workflow so businesses can move faster with fewer surprises.
            </p>
          </div>
        </AnimatedContent>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {capabilities.map((capability, index) => (
            <AnimatedContent
              key={capability.title}
              distance={42}
              direction="vertical"
              reverse={false}
              duration={0.8}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={0.97}
              threshold={0.15}
              delay={index * 0.06}
            >
              <div className="h-full rounded-[28px] border border-[#e5e8ee] bg-white p-6 shadow-[0_12px_28px_rgba(0,0,0,0.04)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-[#edf5ff] text-[13px] font-semibold text-[#0d4c8f]">
                  {capability.icon}
                </div>

                <h3 className="mt-5 text-[1.15rem] font-semibold text-[#1a2740]">
                  {capability.title}
                </h3>

                <p className="mt-4 text-[14px] leading-7 text-[#6b7890]">
                  {capability.description}
                </p>
              </div>
            </AnimatedContent>
          ))}
        </div>
      </section>

      <section className="mx-auto w-[92%] max-w-7xl pb-12 xl:w-[88%]">
        <AnimatedContent
          distance={40}
          direction="vertical"
          reverse={false}
          duration={0.8}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={0.98}
          threshold={0.15}
        >
          <div className="relative overflow-hidden rounded-[32px] border border-[#dfe6ef] bg-[#0e3157] shadow-[0_10px_28px_rgba(0,0,0,0.05)]">
            <div className="absolute inset-0">
              <Image
                src="/images/aboutus/globe-image.jpg"
                alt="Global trade map visualization"
                fill
                className="object-cover object-center"
              />
            </div>

            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,24,46,0.42),rgba(8,24,46,0.24))]" />

            <div className="relative flex min-h-[260px] items-center justify-center px-6 py-10 sm:min-h-[300px] sm:px-8">
              <div className="max-w-md rounded-[24px] border border-white/30 bg-white/82 p-5 text-center shadow-[0_16px_30px_rgba(17,57,102,0.12)] backdrop-blur-sm">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#67809a]">
                  Global trade network
                </p>

                <h3 className="mt-3 text-[1.25rem] font-semibold text-[#173053]">
                  Connecting suppliers, logistics partners, and growth-focused
                  businesses worldwide.
                </h3>
              </div>
            </div>
          </div>
        </AnimatedContent>
      </section>

      <section className="mx-auto w-[92%] max-w-7xl py-4 pb-12 xl:w-[88%]">
        <AnimatedContent
          distance={40}
          direction="vertical"
          reverse={false}
          duration={0.75}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={0.98}
          threshold={0.15}
        >
          <div className="text-center">
            <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#6f8099]">
              Markets We Serve
            </p>

            <h2 className="mt-4 text-[1.9rem] font-bold text-[#16233e] sm:text-[2.2rem]">
              Built for cross-market coordination.
            </h2>
          </div>
        </AnimatedContent>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {markets.map((market, index) => (
            <AnimatedContent
              key={market}
              distance={35}
              direction="vertical"
              reverse={false}
              duration={0.7}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={0.98}
              threshold={0.15}
              delay={index * 0.05}
            >
              <div className="rounded-[22px] border border-[#dfe5ee] bg-white px-5 py-4 text-center text-[14px] font-semibold text-[#223450] shadow-[0_8px_18px_rgba(0,0,0,0.03)]">
                {market}
              </div>
            </AnimatedContent>
          ))}
        </div>
      </section>
    </main>
  );
}

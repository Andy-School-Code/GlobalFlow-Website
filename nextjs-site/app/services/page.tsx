"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const desktopCards = [
  {
    id: "global-sourcing",
    icon: "⬢",
    title: "Global Sourcing",
    description:
      "Our sourcing services help businesses identify trusted suppliers for a wide range of products. We work with verified partners to ensure product quality and competitive pricing.",
    imageSrc: "/images/services/global-sourcing-desktop.jpg",
    details: [
      "We help businesses connect with trusted suppliers across different markets.",
      "Our sourcing support focuses on quality, suitability, and supplier coordination.",
      "We work to simplify the sourcing process for growing businesses.",
    ],
  },
  {
    id: "import-export",
    icon: "↔",
    title: "Import / Export Coordination",
    description:
      "We manage international trade processes including documentation, supplier communication, and shipment coordination. This ensures smooth cross-border transactions.",
    imageSrc: "/images/services/import-export-desktop.jpg",
    details: [
      "We support documentation flow and communication between key parties.",
      "Our team helps manage coordination for international trade activities.",
      "This helps reduce delays and improves operational efficiency.",
    ],
  },
  {
    id: "logistics-freight",
    icon: "🚚",
    title: "Logistics & Freight Support",
    description:
      "GlobalFlow Trading provides support for shipping coordination, freight planning, and logistics management to ensure efficient delivery of products.",
    imageSrc: "/images/services/logistics-desktop.jpg",
    details: [
      "We assist with freight planning and shipping coordination.",
      "Our logistics support helps businesses improve shipment visibility.",
      "We focus on smooth delivery management and transport planning.",
    ],
  },
  {
    id: "compliance-documentation",
    icon: "📄",
    title: "Compliance & Documentation",
    description:
      "We assist businesses with trade documentation and compliance requirements related to international shipping and customs procedures.",
    imageSrc: "/images/services/compliance-desktop.jpg",
    details: [
      "We help businesses prepare and manage trade-related documents.",
      "Our support covers documentation and compliance coordination.",
      "This makes customs and international shipping processes easier to handle.",
    ],
  },
];

const mobileCards = [
  {
    id: "global-sourcing",
    icon: "🗂",
    title: "Global Sourcing",
    description:
      "Our sourcing services help businesses identify trusted suppliers.",
    imageSrc: "/images/services/global-sourcing-icon.png",
  },
  {
    id: "import-export",
    icon: "↕",
    title: "Import / Export Coordination",
    description:
      "We manage international trade processes including documentation and shipment coordination.",
    imageSrc: "/images/services/import-export-icon.png",
  },
  {
    id: "logistics-freight",
    icon: "🚚",
    title: "Logistics & Freight Support",
    description:
      "Support for shipping coordination and logistics management.",
  },
  {
    id: "compliance-documentation",
    icon: "📄",
    title: "Compliance & Documentation",
    description:
      "We assist businesses with trade documentation and compliance.",
  },
];

export default function ServicesPage() {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const activeCard = useMemo(
    () => desktopCards.find((card) => card.id === activeCardId) ?? null,
    [activeCardId]
  );

  const openModal = (cardId: string) => {
    setActiveCardId(cardId);
  };

  const closeModal = () => {
    setActiveCardId(null);
  };

  return (
    <main className="bg-[#f3f4f6] pt-20 text-[#13213d]">
      {/* DESKTOP / TABLET */}
      <div className="hidden md:block">
        <section className="relative overflow-hidden bg-[#0d4c8f]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(255,255,255,0.08),transparent_35%)]" />
          <div className="mx-auto w-[88%] py-16 lg:py-20">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/80">
              Our Expertise
            </p>

            <h1 className="mt-5 max-w-3xl text-5xl font-bold leading-[1.02] text-white lg:text-6xl">
              Comprehensive Global
              <br />
              Trading Solutions
            </h1>

            <p className="mt-6 max-w-2xl text-[16px] leading-8 text-white/80">
              Empowering your business with seamless international trade,
              logistics, and compliance expertise across 150+ countries.
            </p>
          </div>
        </section>

        <section className="mx-auto w-[88%] py-14 lg:py-16">
          <div className="flex items-start justify-between gap-6">
            <div>
              <h2 className="text-[2.3rem] font-bold text-[#16233e]">
                Specialized Trading Services
              </h2>
              <div className="mt-4 h-[4px] w-14 rounded-full bg-[#0d4c8f]" />
              <p className="mt-6 max-w-xl text-[15px] leading-8 text-[#5e6d89]">
                We provide end-to-end support for businesses looking to scale
                their international presence through strategic trade management.
              </p>
            </div>

            <div className="flex gap-3 pt-4">
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#d9dee6] bg-white text-[#76849a]"
              >
                ‹
              </button>
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#d9dee6] bg-white text-[#76849a]"
              >
                ›
              </button>
            </div>
          </div>

          <div className="mt-10 grid gap-6 xl:grid-cols-3">
            {desktopCards.map((card, index) => (
              <div
                key={card.id}
                className={`overflow-hidden rounded-xl border border-[#e6e9ef] bg-white shadow-[0_8px_18px_rgba(0,0,0,0.04)] transition hover:-translate-y-1 ${
                  index === 3 ? "xl:col-span-1" : ""
                }`}
              >
                <div className="relative h-[210px] overflow-hidden">
                  <Image
                    src={card.imageSrc}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,27,53,0.08),rgba(7,27,53,0.35))]" />

                  <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-md bg-[#0d4c8f] text-sm text-white shadow">
                    {card.icon}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-[1.55rem] font-semibold leading-tight text-[#1a2740]">
                    {card.title}
                  </h3>

                  <p className="mt-4 text-[14px] leading-7 text-[#6b7890]">
                    {card.description}
                  </p>

                  <button
                    type="button"
                    onClick={() => openModal(card.id)}
                    className="mt-6 inline-block text-[13px] font-semibold text-[#0d4c8f]"
                  >
                    Learn More →
                  </button>
                </div>
              </div>
            ))}

            <div className="rounded-xl bg-[#0d4c8f] p-8 text-white shadow-[0_8px_18px_rgba(0,0,0,0.05)]">
              <div className="flex min-h-[398px] flex-col justify-center">
                <h3 className="text-[2rem] font-bold leading-tight">
                  Need a Custom Solution?
                </h3>

                <p className="mt-5 max-w-xs text-[15px] leading-8 text-white/80">
                  Our team can design a bespoke strategy tailored to your
                  specific industry and market requirements.
                </p>

                <Link
                  href="/contact#book-call"
                  className="mt-8 block w-full rounded-md bg-white px-6 py-3 text-center text-[13px] font-semibold text-[#0d4c8f]"
                >
                  Speak with an Expert
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#eef2f6] py-20">
          <div className="mx-auto w-[88%] text-center">
            <h2 className="text-[3rem] font-bold text-[#16233e]">
              Ready to Expand Your Global Reach?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-[16px] leading-8 text-[#6a7890]">
              Contact our experts today for a customized trading and logistics
              strategy that puts your business at the forefront of international
              commerce.
            </p>

            <div className="mt-10 flex items-center justify-center gap-4">
              <Link
                href="/contact#book-call"
                className="rounded-md bg-[#0d4c8f] px-7 py-3 text-[13px] font-semibold text-white shadow-sm"
              >
                Schedule a Consultation
              </Link>

              <Link
                href="#"
                className="rounded-md border border-[#d7dce5] bg-white px-7 py-3 text-[13px] font-semibold text-[#394762]"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* MOBILE */}
      <div className="md:hidden">
        <section className="mx-auto w-[88%] py-6">
          <div className="relative overflow-hidden rounded-2xl">
            <div className="relative h-[185px] w-full">
              <Image
                src="/images/services/services-hero.png"
                alt="GlobalFlow Trading mobile services hero"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,27,53,0.15),rgba(7,27,53,0.75))]" />
            <div className="absolute bottom-4 left-5 right-5">
              <h1 className="text-[2rem] font-bold leading-tight text-white">
                GlobalFlow Trading
              </h1>
              <p className="mt-2 text-[14px] leading-6 text-white/90">
                Empowering global trade through strategic commodities and
                shipping solutions.
              </p>
            </div>
          </div>

          <section className="mt-8">
            <h2 className="text-[2rem] font-bold text-[#16233e]">
              Our Core Services
            </h2>
            <p className="mt-1 text-[14px] text-[#66758d]">
              Comprehensive trade solutions for global businesses.
            </p>

            <div className="mt-5 space-y-4">
              {mobileCards.map((card) => (
                <button
                  key={card.id}
                  type="button"
                  onClick={() => openModal(card.id)}
                  className="flex w-full items-center gap-4 rounded-2xl border border-[#e5e8ee] bg-white px-4 py-5 text-left shadow-[0_6px_14px_rgba(0,0,0,0.03)]"
                >
                  <div className="relative flex h-14 w-14 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[#eef2f5]">
                    {card.imageSrc ? (
                      <Image
                        src={card.imageSrc}
                        alt={card.title}
                        fill
                        className="object-contain p-2"
                      />
                    ) : (
                      <span className="text-[1.3rem] text-[#0d4c8f]">
                        {card.icon}
                      </span>
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-[1.05rem] font-semibold leading-snug text-[#182540]">
                      {card.title}
                    </h3>
                    <p className="mt-1 text-[14px] leading-6 text-[#7b889e]">
                      {card.description}
                    </p>
                  </div>

                  <div className="text-[1.5rem] text-[#8b97ab]">›</div>
                </button>
              ))}
            </div>

            <div className="mt-6 rounded-3xl bg-[#0d4c8f] px-6 py-8 text-white shadow-sm">
              <h3 className="text-[2rem] font-bold leading-tight">
                Need a Custom
                <br />
                Solution?
              </h3>

              <p className="mt-6 text-[15px] leading-8 text-white/80">
                Our team can design a bespoke strategy tailored to your specific
                industry and market requirements.
              </p>

              <Link
                href="/contact#book-call"
                className="mt-8 block rounded-2xl bg-white px-5 py-4 text-center text-[15px] font-semibold text-[#0d4c8f]"
              >
                Speak with an Expert
              </Link>
            </div>
          </section>
        </section>
      </div>

      {/* MODAL */}
      {activeCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0d1b34]/60 px-4 py-6">
          <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white shadow-[0_20px_60px_rgba(0,0,0,0.20)]">
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[1.4rem] text-[#22304a]"
            >
              ×
            </button>

            <div className="relative h-[240px] overflow-hidden rounded-t-3xl">
              <Image
                src={activeCard.imageSrc}
                alt={activeCard.title}
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,27,53,0.10),rgba(7,27,53,0.45))]" />

              <div className="absolute left-6 bottom-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0d4c8f] text-white shadow">
                  {activeCard.icon}
                </div>

                <h3 className="mt-4 text-[1.9rem] font-bold text-white">
                  {activeCard.title}
                </h3>
              </div>
            </div>

            <div className="px-6 py-6 md:px-8 md:py-8">
              <p className="text-[15px] leading-7 text-[#5f6f86]">
                {activeCard.description}
              </p>

              <div className="mt-5 space-y-3">
                {activeCard.details.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-[#f6f8fb] px-4 py-3 text-[14px] leading-7 text-[#64748b]"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href="/contact#book-call"
                  onClick={closeModal}
                  className="inline-block rounded-xl bg-[#0d4c8f] px-5 py-3 text-[14px] font-semibold text-white"
                >
                  Speak with an Expert
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
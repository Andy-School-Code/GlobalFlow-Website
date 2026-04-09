"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const desktopCards = [
  {
    id: "global-sourcing",
    icon: "⬢",
    title: "Global Sourcing",
    description:
      "Our sourcing services help businesses identify trusted suppliers for a wide range of products. We work with verified partners to ensure product quality and competitive pricing.",
    imageLabelTop: "B2B",
    imageLabelBottom: "TRADING",
    bg: "bg-[linear-gradient(135deg,#48bfd1,#2f8fa6)]",
  },
  {
    id: "import-export",
    icon: "↔",
    title: "Import / Export Coordination",
    description:
      "We manage international trade processes including documentation, supplier communication, and shipment coordination. This ensures smooth cross-border transactions.",
    imageLabelTop: "EXPORT",
    imageLabelBottom: "IMPORT",
    bg: "bg-[linear-gradient(135deg,#f2f2f2,#d9d9d9)]",
    darkText: true,
  },
  {
    id: "logistics-freight",
    icon: "🚚",
    title: "Logistics & Freight Support",
    description:
      "GlobalFlow Trading provides support for shipping coordination, freight planning, and logistics management to ensure efficient delivery of products.",
    imageLabelTop: "",
    imageLabelBottom: "",
    bg: "bg-[linear-gradient(135deg,#5fa691,#356e61)]",
  },
  {
    id: "compliance-documentation",
    icon: "📄",
    title: "Compliance & Documentation",
    description:
      "We assist businesses with trade documentation and compliance requirements related to international shipping and customs procedures.",
    imageLabelTop: "COMPLIANCE",
    imageLabelBottom: "",
    bg: "bg-[linear-gradient(135deg,#63a99a,#417f74)]",
  },
];

const mobileCards = [
  {
    icon: "🗂",
    title: "Global Sourcing",
    description:
      "Our sourcing services help businesses identify trusted suppliers.",
  },
  {
    icon: "↕",
    title: "Import / Export Coordination",
    description:
      "We manage international trade processes including documentation and shipment coordination.",
  },
  {
    icon: "🚚",
    title: "Logistics & Freight Support",
    description:
      "Support for shipping coordination and logistics management.",
  },
  {
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
        {/* Hero */}
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

        {/* Services intro */}
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

          {/* Grid */}
          <div className="mt-10 grid gap-6 xl:grid-cols-3">
            {desktopCards.map((card, index) => (
              <div
                key={card.title}
                className={`overflow-hidden rounded-xl border border-[#e6e9ef] bg-white shadow-[0_8px_18px_rgba(0,0,0,0.04)] ${
                  index === 3 ? "xl:col-span-1" : ""
                }`}
              >
                <div
                  className={`relative flex h-[210px] items-center justify-center ${card.bg}`}
                >
                  <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-md bg-[#0d4c8f] text-sm text-white shadow">
                    {card.icon}
                  </div>

                  <div
                    className={`text-center ${
                      card.darkText ? "text-[#6c7b90]" : "text-white/85"
                    }`}
                  >
                    {card.imageLabelTop && (
                      <div className="text-[3.1rem] font-bold leading-none tracking-wide opacity-80">
                        {card.imageLabelTop}
                      </div>
                    )}
                    {card.imageLabelBottom && (
                      <div className="mt-3 text-[2rem] font-medium tracking-[0.16em] opacity-80">
                        {card.imageLabelBottom}
                      </div>
                    )}
                    {!card.imageLabelTop && !card.imageLabelBottom && (
                      <div className="text-6xl opacity-80">{card.icon}</div>
                    )}
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

            {/* CTA card */}
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

        {/* Bottom CTA */}
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
          {/* Hero card */}
          <div className="relative overflow-hidden rounded-2xl">
            <div className="h-[155px] bg-[linear-gradient(135deg,#6cb4f4,#1f5d94)]" />
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

          {/* Core services */}
          <section className="mt-8">
            <h2 className="text-[2rem] font-bold text-[#16233e]">
              Our Core Services
            </h2>
            <p className="mt-1 text-[14px] text-[#66758d]">
              Comprehensive trade solutions for global businesses.
            </p>

            <div className="mt-5 space-y-4">
              {mobileCards.map((card) => (
                <div
                  key={card.title}
                  className="flex items-center gap-4 rounded-2xl border border-[#e5e8ee] bg-white px-4 py-5 shadow-[0_6px_14px_rgba(0,0,0,0.03)]"
                >
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-[#eef2f5] text-[1.3rem] text-[#0d4c8f]">
                    {card.icon}
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
                </div>
              ))}
            </div>

            {/* Mobile CTA Card */}
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

      {/* DESKTOP MODAL ONLY FOR NOW */}
      {activeCard && (
        <div className="fixed inset-0 z-50 hidden items-center justify-center bg-[#0d1b34]/60 px-4 md:flex">
          <div className="relative w-full max-w-xl rounded-3xl bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.20)]">
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#f2f5f9] text-[1.4rem] text-[#22304a]"
            >
              ×
            </button>

            <h3 className="pr-12 text-[1.9rem] font-bold text-[#16233e]">
              {activeCard.title}
            </h3>

            <p className="mt-4 text-[15px] leading-8 text-[#5e6d89]">
              {activeCard.description}
            </p>

            <Link
              href="/contact#book-call"
              onClick={closeModal}
              className="mt-8 inline-block rounded-xl bg-[#0d4c8f] px-5 py-3 text-[14px] font-semibold text-white"
            >
              Speak with an Expert
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}
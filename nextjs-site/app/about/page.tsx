"use client";

import Image from "next/image";

import AnimatedContent from "@/components/reactbits/AnimatedContent";
import BlurText from "@/components/reactbits/BlurText";
import FadeContent from "@/components/reactbits/FadeContent";

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
    </main>
  );
}

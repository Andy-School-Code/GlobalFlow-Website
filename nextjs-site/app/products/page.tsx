"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

const FILTERS = ["All", "Agriculture", "Metals", "Paper", "Custom"];

type ProductCategory = {
  id: string;
  title: string;
  category: "Agriculture" | "Metals" | "Paper" | "Custom";
  description: string;
  highlights: string[];
  specs: string[];
  badge: { label: string; tone: "accent" | "neutral" | "primary" };
  image: string;
  cta: { label: string; href: string };
  keywords: string;
};

const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: "agricultural",
    title: "Agricultural Products",
    category: "Agriculture",
    description:
      "GlobalFlow Trading sources premium grains, pulses, oil seeds, and specialty crops from audited growers with traceable supply chains.",
    highlights: ["Yellow peas", "Lentils", "Chickpeas", "Soybeans"],
    specs: ["Moisture targets <=14%", "Flexible bagging & bulk", "Non-GMO & organic sourcing"],
    badge: { label: "Organic & Pulses", tone: "accent" },
    image: "/images/products/agriculture.jpg",
    cta: { label: "View Specifications", href: "/contact?interest=agriculture" },
    keywords: "peas lentils chickpeas soybeans pulses grains agriculture",
  },
  {
    id: "metals",
    title: "Metal Scrap",
    category: "Metals",
    description:
      "Our metals unit supplies ferrous and non-ferrous scrap grades for foundries and mills, with documentation aligned to destination customs.",
    highlights: ["Aluminum scrap", "Copper scrap", "Steel bundles", "Custom blends"],
    specs: ["ISRI compliant grades", "Radiation & moisture testing", "Containerized & break bulk"],
    badge: { label: "Recycling", tone: "primary" },
    image: "/images/products/metal.jpg",
    cta: { label: "View Specifications", href: "/contact?interest=metal-scrap" },
    keywords: "metal scrap recycling aluminum copper steel ferrous non-ferrous",
  },
  {
    id: "paper",
    title: "Paper Products",
    category: "Paper",
    description:
      "GlobalFlow Trading supplies recovered fiber, OCC, and specialty paper grades for mills and converters with steady monthly volumes.",
    highlights: ["OCC", "Mixed paper", "Kraft rolls", "Sustainable sourcing"],
    specs: ["Moisture scanning on load", "Bale & roll programs", "Custom QA reporting"],
    badge: { label: "Recycled", tone: "neutral" },
    image: "/images/products/paper.jpg",
    cta: { label: "View Specifications", href: "/contact?interest=paper-products" },
    keywords: "paper occ recycled fiber kraft rolls recovered pulp sustainable",
  },
  {
    id: "custom",
    title: "Custom Sourcing",
    category: "Custom",
    description:
      "Tailored sourcing strategies for niche industrial inputs, packaging, or private label programs with rapid vendor onboarding.",
    highlights: ["Bespoke projects", "Vendor due diligence", "On-site inspection", "Compliance reporting"],
    specs: ["Flexible MOQs", "Coordinated lab testing", "Dedicated account team"],
    badge: { label: "Bespoke", tone: "primary" },
    image: "/images/products/custom.jpg",
    cta: { label: "Request a Quote", href: "/contact?interest=custom-sourcing" },
    keywords: "custom sourcing bespoke containers packaging private label projects",
  },
];

const LOGISTICS_FEATURES = [
  {
    title: "Standardized Packaging",
    description: "Stretch-wrapped pallets, lined containers, and tamper seals for export-ready loads.",
  },
  {
    title: "Quality Assurance",
    description: "Lot-based inspections, SGS coordination, and digital COA delivery for every shipment.",
  },
  {
    title: "Real-time Tracking",
    description: "Milestone visibility from stuffing to final port arrival with proactive exception alerts.",
  },
];

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [query, setQuery] = useState("");

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return PRODUCT_CATEGORIES.filter((product) => {
      const matchesFilter = activeFilter === "All" || product.category === activeFilter;
      const matchesSearch =
        normalizedQuery.length === 0
          ? true
          : `${product.title} ${product.description} ${product.keywords}`
              .toLowerCase()
              .includes(normalizedQuery);
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, query]);

  return (
    <main className="products-page">
      <section className="products-hero">
        <div className="products-hero__text">
          <p className="products-eyebrow">Global Offering</p>
          <h1>Our Product Categories</h1>
          <p>
            Expert global sourcing and agile supply chain solutions for critical commodities. We connect verified suppliers with global industrial demand through confident quality coordination.
          </p>
          <div className="hero-pills">
            <span>Agriculture</span>
            <span>Metals</span>
            <span>Paper</span>
            <span>Logistics</span>
          </div>
        </div>
        <div className="products-hero__card">
          <p className="products-note">
            Product inventory: Products are listed for informational purposes. Contact us before sourcing directly for product details, samples, and compliance documentation.
          </p>
        </div>
      </section>

      <section className="filters-panel">
        <div className="filters-panel__search">
          <label htmlFor="products-search" className="sr-only">
            Search products
          </label>
          <input
            id="products-search"
            type="search"
            placeholder="Search products..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>

        <div className="filters-panel__pills" role="tablist">
          {FILTERS.map((filter) => {
            const isActive = filter === activeFilter;
            return (
              <button
                key={filter}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={isActive ? "pill active" : "pill"}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </section>

      <section className="products-grid" aria-live="polite">
        {filteredProducts.map((product) => (
          <article key={product.id} className="product-card">
            <div className="product-card__media">
              <Image
                src={product.image}
                alt={product.title}
                width={640}
                height={360}
                priority={product.id === "agricultural"}
              />
              <span className={`product-badge product-badge--${product.badge.tone}`}>
                {product.badge.label}
              </span>
            </div>
            <div className="product-card__body">
              <div>
                <p className="product-card__category">{product.category}</p>
                <h2>{product.title}</h2>
                <p className="product-card__description">{product.description}</p>
              </div>

              <div className="product-card__details">
                <div>
                  <h3>Highlights</h3>
                  <ul>
                    {product.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3>Specifications</h3>
                  <ul>
                    {product.specs.map((spec) => (
                      <li key={spec}>{spec}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="product-card__actions">
                <Link href={product.cta.href} className="btn btn--primary">
                  {product.cta.label}
                </Link>
              </div>
            </div>
          </article>
        ))}

        {filteredProducts.length === 0 && (
          <div className="empty-state">
            <p>No products match your filters. Adjust your search or category.</p>
          </div>
        )}
      </section>

      <section className="logistics-panel">
        <div className="logistics-panel__intro">
          <p className="products-eyebrow">Global Logistics & Packaging</p>
          <h2>Value-added services built around every shipment.</h2>
          <p>
            From inspection to real-time tracking, our logistics desk ensures your cargo is protected, documented, and visible until final delivery.
          </p>
        </div>
        <div className="logistics-panel__grid">
          {LOGISTICS_FEATURES.map((feature) => (
            <div key={feature.title} className="logistics-card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

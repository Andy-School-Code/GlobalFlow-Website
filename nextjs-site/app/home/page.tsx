import Image from "next/image";
import Link from "next/link";

const companyStats = [
  { label: "Years Experience", value: "15+" },
  { label: "Clients Served", value: "500+" },
];

const services = [
  {
    title: "Global Sourcing",
    copy:
      "Sourcing the best quality products from reliable suppliers across continents, ensuring cost-effectiveness and compliance.",
    icon: "/images/icon-crate.png",
  },
  {
    title: "Import / Export Coordination",
    copy:
      "Handling complex documentation, customs regulations, and trade compliance to ensure your goods move smoothly across borders.",
    icon: "/images/icon-arrows.png",
  },
  {
    title: "Logistics Support",
    copy:
      "End-to-end transportation solutions including freight forwarding, warehousing, and real-time shipment tracking.",
    icon: "/images/icon-truck.png",
  },
];

const productCategories = [
  {
    title: "Agricultural",
    copy:
      "High-quality grains, seeds, and fresh produce sourced from sustainable global farming partners.",
    image: "/images/product-agriculture.png",
  },
  {
    title: "Metal Scrap",
    copy:
      "Ferrous and non-ferrous metal recycling materials for heavy industry and manufacturing requirements.",
    image: "/images/product-metal.png",
  },
  {
    title: "Paper Products",
    copy:
      "Raw paper rolls, packaging materials, and recycled paper stock for commercial printing and distribution.",
    image: "/images/product-paper.png",
  },
];

const differentiators = [
  {
    title: "Quality",
    copy: "Stringent quality control protocols for every product batch we source.",
    icon: "/images/icon-shield.png",
  },
  {
    title: "Reliability",
    copy: "Timely deliveries and consistent communication throughout the trade process.",
    icon: "/images/icon-handshake.png",
  },
  {
    title: "Global Reach",
    copy: "Extensive network spanning major trading hubs in Asia, Europe, and the Americas.",
    icon: "/images/icon-globe.png",
  },
];

export default function HomePage() {
  return (
    <main className="home-page">
      <section className="hero section">
        <div className="hero__inner">
          <div className="hero__content">
            <p className="eyebrow">GlobalFlow Trading Inc.</p>
            <h1>Global Trade. Simplified.</h1>
            <p className="hero__copy">
              GlobalFlow Trading Inc. connects suppliers and buyers worldwide by
              offering reliable sourcing, international trade coordination, and
              logistics support. Experience seamless cross-border commerce with
              Toronto's premier trading experts.
            </p>
            <div className="hero__actions">
              <Link href="/contact" className="btn btn--primary">
                Contact Us
              </Link>
              <Link href="/services" className="btn btn--secondary">
                Our Services
              </Link>
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__image-frame">
              <Image
                src="/images/hero-ship.png"
                alt="Bulk cargo ship sailing across the ocean"
                width={640}
                height={480}
                priority
              />

              <div className="hero__floating-card">
                <span className="floating-card__label">Global Coverage</span>
                <strong>50+ Countries Connected</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section company-overview">
        <div className="company-overview__text">
          <h2>Company Overview</h2>
          <p>
            GlobalFlow Trading Inc. is an international trading company that focuses
            on sourcing products and connecting businesses across global markets. We
            leverage industry expertise to bridge the gap between production and
            demand, ensuring efficiency at every step of the supply chain.
          </p>
        </div>
        <div className="company-overview__stats">
          {companyStats.map((stat) => (
            <article key={stat.label} className="stat-card">
              <span>{stat.value}</span>
              <p>{stat.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section services">
        <div className="section-heading">
          <h2>Our Core Services</h2>
          <p>
            Comprehensive trade solutions tailored to meet the dynamic needs of
            global commerce.
          </p>
        </div>
        <div className="card-grid">
          {services.map((service) => (
            <article key={service.title} className="service-card">
              <div className="service-card__icon">
                <Image
                  src={service.icon}
                  alt=""
                  width={28}
                  height={28}
                  aria-hidden
                />
              </div>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section product-categories">
        <div className="section-heading">
          <h2>Product Categories</h2>
          <p>Diverse product portfolios for various industry sectors.</p>
        </div>
        <div className="card-grid product-grid">
          {productCategories.map((product) => (
            <article key={product.title} className="product-card">
              <div className="product-card__image">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={420}
                  height={260}
                />
              </div>
              <div className="product-card__body">
                <h3>{product.title}</h3>
                <p>{product.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section why-choose">
        <div className="why-choose__inner">
          <div className="section-heading">
            <h2>Why Choose GlobalFlow?</h2>
            <p>
              We orchestrate every detail, pairing strategic insights with
              uncompromising execution so your business can scale internationally.
            </p>
          </div>
          <div className="why-choose__features">
            {differentiators.map((item) => (
              <article key={item.title} className="feature-card">
                <div className="feature-card__icon" aria-hidden>
                  <Image src={item.icon} alt="" width={24} height={24} />
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

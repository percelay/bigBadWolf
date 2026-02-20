"use client";

import { Zap, Lightbulb, Factory, ArrowRight, CheckCircle, Clock, Phone } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Modal from "./Modal";

const services = [
  {
    icon: Zap,
    title: "New Construction & Remodel",
    description:
      "Residential and commercial new construction, remodel, and service work. From panel upgrades to full electrical buildouts, we handle every phase with precision.",
    tags: ["Residential", "Commercial", "Service Work"],
    hasModal: true,
  },
  {
    icon: Lightbulb,
    title: "LED Commercial Upgrades",
    description:
      "LED upgrades for commercial and warehousing facilities. Slash energy costs and maintenance overhead with high-output, long-life LED systems.",
    tags: ["Warehousing", "Commercial", "Energy Savings"],
    hasModal: false,
  },
  {
    icon: Factory,
    title: "Parking Lot Lighting",
    description:
      "Parking lot lighting new installation and LED retrofitting. Safer lots, lower bills — precision-engineered for maximum coverage and longevity.",
    tags: ["New Install", "LED Retrofit", "Exterior"],
    hasModal: false,
  },
];

function ServiceModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <Modal open={open} onClose={onClose}>
      {/* Hero image */}
      <div style={{ position: "relative", width: "100%", height: "280px", overflow: "hidden" }}>
        <Image
          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=860&q=80"
          alt="Electrical construction work"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          unoptimized
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(30,30,30,1) 0%, rgba(30,30,30,0.3) 60%, transparent 100%)",
          }}
        />
        {/* Overlaid title */}
        <div style={{ position: "absolute", bottom: "1.5rem", left: "2rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
            <div style={{ width: "20px", height: "2px", backgroundColor: "#3B82F6" }} />
            <span style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", color: "#3B82F6", textTransform: "uppercase" }}>
              Our Services
            </span>
          </div>
          <h2 style={{ fontWeight: 900, fontSize: "1.75rem", color: "#FFFFFF", margin: 0, letterSpacing: "-0.02em" }}>
            New Construction &amp; Remodel
          </h2>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: "2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5rem" }} className="modal-grid">

          {/* Left: description */}
          <div>
            <p style={{ color: "#A3A3A3", fontSize: "0.95rem", lineHeight: 1.75, marginBottom: "1.5rem" }}>
              Whether you&apos;re breaking ground on a new commercial development or gutting and rewiring an existing home, Big B Wolf Electric brings full-phase electrical expertise to every build.
            </p>
            <p style={{ color: "#A3A3A3", fontSize: "0.95rem", lineHeight: 1.75, marginBottom: "2rem" }}>
              We coordinate directly with general contractors, project managers, and inspectors to keep your job moving. From service entrance to final trim, every installation is done to code — the first time.
            </p>

            {/* Scope list */}
            <h4 style={{ fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.15em", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "1rem" }}>
              What&apos;s Included
            </h4>
            {[
              "Rough-in wiring & conduit",
              "Panel & sub-panel installation",
              "Service entrance & meter base",
              "Low-voltage & data rough-in",
              "Fixture & device trim-out",
              "Load calculations & code compliance",
            ].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.6rem" }}>
                <CheckCircle size={14} color="#3B82F6" strokeWidth={2} style={{ flexShrink: 0 }} />
                <span style={{ color: "#FFFFFF", fontSize: "0.875rem" }}>{item}</span>
              </div>
            ))}
          </div>

          {/* Right: details + CTA */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {/* Stats */}
            {[
              { label: "Typical Timeline", value: "Per Phase", sub: "Coordinated with GC schedule" },
              { label: "Project Types", value: "All Scales", sub: "Single family to multi-unit commercial" },
              { label: "Service Area", value: "Phoenix Metro", sub: "Including Scottsdale, Tempe, Mesa, Gilbert" },
            ].map(({ label, value, sub }) => (
              <div
                key={label}
                style={{
                  backgroundColor: "#2F2F2F",
                  border: "1px solid rgba(255,255,255,0.08)",
                  padding: "1.1rem 1.25rem",
                }}
              >
                <div style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.15em", color: "#A3A3A3", textTransform: "uppercase", marginBottom: "0.3rem" }}>
                  {label}
                </div>
                <div style={{ fontWeight: 900, fontSize: "1.1rem", color: "#FFFFFF", marginBottom: "0.2rem" }}>
                  {value}
                </div>
                <div style={{ fontSize: "0.78rem", color: "#A3A3A3" }}>{sub}</div>
              </div>
            ))}

            {/* Timeline note */}
            <div style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start", padding: "1rem", backgroundColor: "rgba(59,130,246,0.07)", border: "1px solid rgba(59,130,246,0.2)" }}>
              <Clock size={15} color="#3B82F6" strokeWidth={2} style={{ flexShrink: 0, marginTop: "1px" }} />
              <p style={{ color: "#A3A3A3", fontSize: "0.82rem", lineHeight: 1.6, margin: 0 }}>
                We work around your schedule and coordinate with other trades to minimize downtime and keep the project on track.
              </p>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              onClick={onClose}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                backgroundColor: "#3B82F6",
                color: "#FFFFFF",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "0.85rem",
                letterSpacing: "0.1em",
                padding: "0.9rem",
                transition: "background-color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#2563EB")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#3B82F6")}
            >
              <Phone size={14} strokeWidth={2.5} />
              REQUEST A QUOTE
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .modal-grid {
          grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 600px) {
          .modal-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </Modal>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  description,
  tags,
  index,
  hasModal,
  onLearnMore,
}: (typeof services)[0] & { index: number; onLearnMore: () => void }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: "#2F2F2F",
        border: hovered
          ? "1px solid rgba(59,130,246,0.5)"
          : "1px solid rgba(255,255,255,0.08)",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem",
        cursor: hasModal ? "pointer" : "default",
        transition: "border-color 0.25s ease, background-color 0.25s ease",
        position: "relative",
        overflow: "hidden",
      }}
      onClick={hasModal ? onLearnMore : undefined}
    >
      {/* Index number watermark */}
      <div
        style={{
          position: "absolute",
          top: "1rem",
          right: "1.25rem",
          fontSize: "4rem",
          fontWeight: 900,
          color: "rgba(255,255,255,0.04)",
          lineHeight: 1,
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Icon */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: "48px",
          height: "48px",
          backgroundColor: hovered ? "rgba(59,130,246,0.15)" : "rgba(255,255,255,0.06)",
          border: hovered ? "1px solid rgba(59,130,246,0.4)" : "1px solid rgba(255,255,255,0.1)",
          transition: "background-color 0.25s ease, border-color 0.25s ease",
        }}
      >
        <Icon
          size={22}
          strokeWidth={1.75}
          color={hovered ? "#3B82F6" : "#FFFFFF"}
          style={{ transition: "color 0.25s ease" }}
        />
      </div>

      {/* Title */}
      <h3 style={{ fontWeight: 900, fontSize: "1.15rem", color: "#FFFFFF", margin: 0, letterSpacing: "-0.01em", lineHeight: 1.2 }}>
        {title}
      </h3>

      {/* Description */}
      <p style={{ color: "#A3A3A3", fontSize: "0.9rem", lineHeight: 1.65, margin: 0, flexGrow: 1 }}>
        {description}
      </p>

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
        {tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontSize: "0.65rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              color: "#A3A3A3",
              backgroundColor: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              padding: "0.25rem 0.6rem",
              textTransform: "uppercase",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Learn more */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.35rem",
          color: hovered ? "#3B82F6" : "#A3A3A3",
          fontSize: "0.78rem",
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          transition: "color 0.25s ease",
        }}
      >
        Learn More
        <ArrowRight
          size={13}
          strokeWidth={2.5}
          style={{
            transform: hovered ? "translateX(3px)" : "translateX(0)",
            transition: "transform 0.25s ease",
          }}
        />
      </div>
    </div>
  );
}

export default function Services() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section
      id="services"
      style={{ backgroundColor: "#1A1A1A", padding: "6rem 1.5rem", position: "relative" }}
    >
      <ServiceModal open={modalOpen} onClose={() => setModalOpen(false)} />

      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "2rem",
            marginBottom: "3.5rem",
          }}
        >
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
              <div style={{ width: "24px", height: "2px", backgroundColor: "#3B82F6" }} />
              <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", color: "#3B82F6", textTransform: "uppercase" }}>
                What We Do
              </span>
            </div>
            <h2 style={{ fontWeight: 900, fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#FFFFFF", margin: 0, lineHeight: 1, letterSpacing: "-0.02em" }}>
              SERVICES
            </h2>
          </div>
          <p style={{ color: "#A3A3A3", fontSize: "0.95rem", maxWidth: "380px", lineHeight: 1.7, margin: 0 }}>
            Commercial and residential electrical work done right. No shortcuts,
            no compromises — just clean installs and lasting results.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1px",
            backgroundColor: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {services.map((service, i) => (
            <ServiceCard
              key={service.title}
              {...service}
              index={i}
              onLearnMore={() => setModalOpen(true)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

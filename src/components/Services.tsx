"use client";

import { Zap, Lightbulb, Factory, ArrowRight } from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: Zap,
    title: "New Construction & Remodel",
    description:
      "Residential and commercial new construction, remodel, and service work. From panel upgrades to full electrical buildouts, we handle every phase with precision.",
    tags: ["Residential", "Commercial", "Service Work"],
  },
  {
    icon: Lightbulb,
    title: "LED Commercial Upgrades",
    description:
      "LED upgrades for commercial and warehousing facilities. Slash energy costs and maintenance overhead with high-output, long-life LED systems.",
    tags: ["Warehousing", "Commercial", "Energy Savings"],
  },
  {
    icon: Factory,
    title: "Parking Lot Lighting",
    description:
      "Parking lot lighting new installation and LED retrofitting. Safer lots, lower bills — precision-engineered for maximum coverage and longevity.",
    tags: ["New Install", "LED Retrofit", "Exterior"],
  },
];

function ServiceCard({
  icon: Icon,
  title,
  description,
  tags,
  index,
}: (typeof services)[0] & { index: number }) {
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
        cursor: "default",
        transition: "border-color 0.25s ease, background-color 0.25s ease",
        position: "relative",
        overflow: "hidden",
      }}
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
          backgroundColor: hovered
            ? "rgba(59,130,246,0.15)"
            : "rgba(255,255,255,0.06)",
          border: hovered
            ? "1px solid rgba(59,130,246,0.4)"
            : "1px solid rgba(255,255,255,0.1)",
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
      <h3
        style={{
          fontWeight: 900,
          fontSize: "1.15rem",
          color: "#FFFFFF",
          margin: 0,
          letterSpacing: "-0.01em",
          lineHeight: 1.2,
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        style={{
          color: "#A3A3A3",
          fontSize: "0.9rem",
          lineHeight: 1.65,
          margin: 0,
          flexGrow: 1,
        }}
      >
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

      {/* Learn more arrow */}
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
  return (
    <section
      id="services"
      style={{
        backgroundColor: "#1A1A1A",
        padding: "6rem 1.5rem",
        position: "relative",
      }}
    >
      {/* Section header */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
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
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "1rem",
              }}
            >
              <div
                style={{
                  width: "24px",
                  height: "2px",
                  backgroundColor: "#3B82F6",
                }}
              />
              <span
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  color: "#3B82F6",
                  textTransform: "uppercase",
                }}
              >
                What We Do
              </span>
            </div>
            <h2
              style={{
                fontWeight: 900,
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: "#FFFFFF",
                margin: 0,
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}
            >
              SERVICES
            </h2>
          </div>
          <p
            style={{
              color: "#A3A3A3",
              fontSize: "0.95rem",
              maxWidth: "380px",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            Commercial and residential electrical work done right. No shortcuts,
            no compromises — just clean installs and lasting results.
          </p>
        </div>

        {/* 3-column grid */}
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
            <ServiceCard key={service.title} {...service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { Zap, Building2, Home, ShieldCheck, CheckCircle } from "lucide-react";

const commercial = [
  "New Construction",
  "Remodel and Service Work",
  "Panel Upgrades to Full Electrical Buildouts",
  "LED Commercial Upgrades for Warehouses",
  "Parking Lot Lighting",
  "Restaurant-Related Service Work",
];

const residential = [
  "Remodel and Service Work",
];

const specialized = [
  "Certified Generac Generator Installer",
];

export default function Services() {
  return (
    <section
      id="services"
      style={{ backgroundColor: "#1A1A1A", padding: "6rem 1.5rem", position: "relative" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Section header */}
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
            Commercial and residential electrical work done right — no shortcuts, no compromises.
          </p>
        </div>

        {/* 2-col layout: commercial big left, residential + specialized stacked right */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.35fr 1fr",
            gridTemplateRows: "auto auto",
            gap: "1px",
            backgroundColor: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
          className="services-grid"
        >
          {/* ── Commercial — spans both rows ── */}
          <div
            style={{
              gridRow: "span 2",
              backgroundColor: "#2F2F2F",
              padding: "2.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Watermark number */}
            <div style={{ position: "absolute", top: "1rem", right: "1.5rem", fontSize: "6rem", fontWeight: 900, color: "rgba(255,255,255,0.03)", lineHeight: 1, pointerEvents: "none", userSelect: "none" }}>
              01
            </div>

            {/* Icon */}
            <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "52px", height: "52px", backgroundColor: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.3)" }}>
              <Building2 size={24} strokeWidth={1.75} color="#3B82F6" />
            </div>

            {/* Label */}
            <div>
              <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", color: "#3B82F6", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                Commercial
              </div>
              <h3 style={{ fontWeight: 900, fontSize: "1.5rem", color: "#FFFFFF", margin: 0, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
                Electrical Services
              </h3>
            </div>

            <div style={{ width: "40px", height: "2px", backgroundColor: "rgba(59,130,246,0.4)" }} />

            {/* Service list */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", flexGrow: 1 }}>
              {commercial.map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <CheckCircle size={15} color="#3B82F6" strokeWidth={2} style={{ flexShrink: 0, marginTop: "1px" }} />
                  <span style={{ color: "#FFFFFF", fontSize: "0.95rem", fontWeight: 500, lineHeight: 1.4 }}>{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                marginTop: "auto",
                color: "#3B82F6",
                textDecoration: "none",
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                transition: "gap 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.gap = "0.7rem")}
              onMouseLeave={(e) => (e.currentTarget.style.gap = "0.4rem")}
            >
              Request a Quote <Zap size={13} strokeWidth={2.5} />
            </a>
          </div>

          {/* ── Residential ── */}
          <div
            style={{
              backgroundColor: "#252525",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{ position: "absolute", top: "1rem", right: "1.25rem", fontSize: "4rem", fontWeight: 900, color: "rgba(255,255,255,0.03)", lineHeight: 1, pointerEvents: "none", userSelect: "none" }}>
              02
            </div>

            <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <Home size={20} strokeWidth={1.75} color="#FFFFFF" />
            </div>

            <div>
              <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", color: "#A3A3A3", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                Residential
              </div>
              <h3 style={{ fontWeight: 900, fontSize: "1.2rem", color: "#FFFFFF", margin: 0, letterSpacing: "-0.01em", lineHeight: 1.1 }}>
                Electrical Services
              </h3>
            </div>

            <div style={{ width: "32px", height: "2px", backgroundColor: "rgba(255,255,255,0.15)" }} />

            <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
              {residential.map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem" }}>
                  <CheckCircle size={14} color="#A3A3A3" strokeWidth={2} style={{ flexShrink: 0, marginTop: "1px" }} />
                  <span style={{ color: "#FFFFFF", fontSize: "0.9rem", fontWeight: 500, lineHeight: 1.4 }}>{item}</span>
                </div>
              ))}
            </div>

            <p style={{ color: "#A3A3A3", fontSize: "0.78rem", lineHeight: 1.6, margin: 0, borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "1rem" }}>
              We specialize in residential remodels and service work. New residential construction is not offered.
            </p>
          </div>

          {/* ── Specialized ── */}
          <div
            style={{
              backgroundColor: "#1e2535",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
              position: "relative",
              overflow: "hidden",
              borderTop: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div style={{ position: "absolute", top: "1rem", right: "1.25rem", fontSize: "4rem", fontWeight: 900, color: "rgba(59,130,246,0.06)", lineHeight: 1, pointerEvents: "none", userSelect: "none" }}>
              03
            </div>

            <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", backgroundColor: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.3)" }}>
              <ShieldCheck size={20} strokeWidth={1.75} color="#3B82F6" />
            </div>

            <div>
              <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", color: "#3B82F6", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                Specialized
              </div>
              <h3 style={{ fontWeight: 900, fontSize: "1.2rem", color: "#FFFFFF", margin: 0, letterSpacing: "-0.01em", lineHeight: 1.1 }}>
                Certified Services
              </h3>
            </div>

            <div style={{ width: "32px", height: "2px", backgroundColor: "rgba(59,130,246,0.4)" }} />

            <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
              {specialized.map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem" }}>
                  <CheckCircle size={14} color="#3B82F6" strokeWidth={2} style={{ flexShrink: 0, marginTop: "1px" }} />
                  <span style={{ color: "#FFFFFF", fontSize: "0.9rem", fontWeight: 500, lineHeight: 1.4 }}>{item}</span>
                </div>
              ))}
            </div>

            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", backgroundColor: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.2)", padding: "0.4rem 0.8rem", marginTop: "auto" }}>
              <ShieldCheck size={11} color="#3B82F6" strokeWidth={2.5} />
              <span style={{ fontSize: "0.65rem", fontWeight: 700, color: "#3B82F6", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Factory Certified
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
          .services-grid > *:first-child {
            grid-row: span 1 !important;
          }
        }
      `}</style>
    </section>
  );
}

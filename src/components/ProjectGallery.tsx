"use client";

import { useState } from "react";
import { Zap, Lightbulb, Factory, ExternalLink, CheckCircle, TrendingDown, Clock, Phone } from "lucide-react";
import Image from "next/image";
import Modal from "./Modal";

const projects = [
  {
    id: 1,
    title: "Industrial Warehouse LED Retrofit",
    category: "LED Upgrade",
    location: "Phoenix, AZ",
    icon: Lightbulb,
    span: "col-2 row-2",
    accent: "#3B82F6",
    stat: "60% Energy Reduction",
    description: "Full LED conversion across 80,000 sq ft warehouse facility.",
    bg: "linear-gradient(135deg, #1e3a5f 0%, #2F2F2F 60%)",
    hasModal: true,
  },
  {
    id: 2,
    title: "Commercial New Construction",
    category: "New Construction",
    location: "Scottsdale, AZ",
    icon: Zap,
    span: "col-1 row-1",
    accent: "#3B82F6",
    stat: "12-Unit Complex",
    description: "Full rough and trim for 12-unit commercial office build.",
    bg: "linear-gradient(135deg, #1a2a1a 0%, #2F2F2F 60%)",
    hasModal: false,
  },
  {
    id: 3,
    title: "Parking Lot LED Install",
    category: "Parking Lot",
    location: "Mesa, AZ",
    icon: Factory,
    span: "col-1 row-1",
    accent: "#3B82F6",
    stat: "48 Poles Installed",
    description: "New pole installation and LED fixture spec for retail center.",
    bg: "linear-gradient(135deg, #2a1a2a 0%, #2F2F2F 60%)",
    hasModal: false,
  },
  {
    id: 4,
    title: "Residential Panel Upgrade",
    category: "Service Work",
    location: "Tempe, AZ",
    icon: Zap,
    span: "col-1 row-1",
    accent: "#3B82F6",
    stat: "200A Upgrade",
    description: "Panel upgrade and whole-home rewire for residential remodel.",
    bg: "linear-gradient(135deg, #1a1a2a 0%, #2F2F2F 60%)",
    hasModal: false,
  },
  {
    id: 5,
    title: "Distribution Center Lighting",
    category: "LED Upgrade",
    location: "Gilbert, AZ",
    icon: Lightbulb,
    span: "col-1 row-1",
    accent: "#3B82F6",
    stat: "200,000 sq ft",
    description: "High-bay LED system design and install for logistics hub.",
    bg: "linear-gradient(135deg, #1a2a2a 0%, #2F2F2F 60%)",
    hasModal: false,
  },
];

function ProjectModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <Modal open={open} onClose={onClose}>
      {/* Hero image */}
      <div style={{ position: "relative", width: "100%", height: "300px", overflow: "hidden" }}>
        <Image
          src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=860&q=80"
          alt="Warehouse LED lighting"
          fill
          style={{ objectFit: "cover", objectPosition: "center 60%" }}
          unoptimized
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(30,30,30,1) 0%, rgba(30,30,30,0.2) 55%, transparent 100%)",
          }}
        />
        <div style={{
          position: "absolute", top: "1.25rem", left: "1.5rem",
          display: "flex", alignItems: "center", gap: "0.4rem",
          backgroundColor: "rgba(59,130,246,0.18)", border: "1px solid rgba(59,130,246,0.4)",
          padding: "0.3rem 0.7rem", backdropFilter: "blur(6px)",
        }}>
          <Lightbulb size={11} color="#60a5fa" strokeWidth={2.5} />
          <span style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.15em", color: "#93c5fd", textTransform: "uppercase" }}>
            LED Upgrade · Phoenix, AZ
          </span>
        </div>
        <div style={{ position: "absolute", bottom: "1.5rem", left: "2rem" }}>
          <h2 style={{ fontWeight: 900, fontSize: "1.75rem", color: "#FFFFFF", margin: 0, letterSpacing: "-0.02em" }}>
            Industrial Warehouse LED Retrofit
          </h2>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: "2rem" }}>
        {/* Key metrics */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", backgroundColor: "rgba(255,255,255,0.06)", marginBottom: "2rem" }} className="metric-grid">
          {[
            { label: "Facility Size", value: "80,000 sq ft" },
            { label: "Energy Savings", value: "60%" },
            { label: "Payback Period", value: "~2.5 Years" },
          ].map(({ label, value }) => (
            <div key={label} style={{ backgroundColor: "#2F2F2F", padding: "1.25rem", textAlign: "center" }}>
              <div style={{ fontWeight: 900, fontSize: "1.4rem", color: "#3B82F6", letterSpacing: "-0.02em", marginBottom: "0.3rem" }}>{value}</div>
              <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em", color: "#A3A3A3", textTransform: "uppercase" }}>{label}</div>
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5rem" }} className="modal-cols">
          {/* Left */}
          <div>
            <h4 style={{ fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.15em", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "0.75rem" }}>
              Project Overview
            </h4>
            <p style={{ color: "#A3A3A3", fontSize: "0.9rem", lineHeight: 1.75, marginBottom: "1.25rem" }}>
              This Phoenix-area distribution warehouse was running 400W metal halide high-bays across its entire 80,000 sq ft floor. Aging fixtures produced poor light quality and excessive heat — driving up energy and HVAC costs.
            </p>
            <p style={{ color: "#A3A3A3", fontSize: "0.9rem", lineHeight: 1.75, marginBottom: "1.5rem" }}>
              Big B Wolf Electric designed and installed a complete LED high-bay system, achieving a 60% reduction in lighting energy consumption and dramatically improving foot-candle levels at the work surface.
            </p>
            <h4 style={{ fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.15em", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "0.75rem" }}>
              Scope of Work
            </h4>
            {[
              "De-lamp & remove 312 metal halide fixtures",
              "Install 290 LED high-bay fixtures (200W)",
              "New 0-10V dimming wiring throughout",
              "Occupancy sensor integration",
              "Emergency lighting & exit signs",
              "Final inspection & utility rebate paperwork",
            ].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", marginBottom: "0.55rem" }}>
                <CheckCircle size={13} color="#3B82F6" strokeWidth={2} style={{ flexShrink: 0, marginTop: "2px" }} />
                <span style={{ color: "#FFFFFF", fontSize: "0.84rem", lineHeight: 1.5 }}>{item}</span>
              </div>
            ))}
          </div>

          {/* Right */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ position: "relative", width: "100%", height: "180px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)" }}>
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=75"
                alt="LED high-bay fixtures"
                fill
                style={{ objectFit: "cover" }}
                unoptimized
              />
            </div>

            <div style={{ backgroundColor: "rgba(59,130,246,0.07)", border: "1px solid rgba(59,130,246,0.2)", padding: "1.1rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                <TrendingDown size={15} color="#3B82F6" strokeWidth={2} />
                <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", color: "#3B82F6", textTransform: "uppercase" }}>Result</span>
              </div>
              <p style={{ color: "#A3A3A3", fontSize: "0.82rem", lineHeight: 1.65, margin: 0 }}>
                Annual energy savings of approximately $42,000. Utility rebate of $18,500 applied. Project completed in 11 days with zero production downtime.
              </p>
            </div>

            <div style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start", padding: "0.9rem", backgroundColor: "#2F2F2F", border: "1px solid rgba(255,255,255,0.08)" }}>
              <Clock size={14} color="#A3A3A3" strokeWidth={1.75} style={{ flexShrink: 0, marginTop: "1px" }} />
              <div>
                <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em", color: "#A3A3A3", textTransform: "uppercase", marginBottom: "0.2rem" }}>Timeline</div>
                <div style={{ fontSize: "0.875rem", color: "#FFFFFF", fontWeight: 600 }}>11 Days · Nights &amp; Weekends</div>
              </div>
            </div>

            <a
              href="#contact"
              onClick={onClose}
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
                backgroundColor: "#3B82F6", color: "#FFFFFF", textDecoration: "none",
                fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.1em", padding: "0.9rem",
                transition: "background-color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#2563EB")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#3B82F6")}
            >
              <Phone size={14} strokeWidth={2.5} />
              GET A QUOTE FOR YOUR FACILITY
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .modal-cols { grid-template-columns: 1fr 1fr; }
        .metric-grid { grid-template-columns: repeat(3, 1fr); }
        @media (max-width: 600px) {
          .modal-cols { grid-template-columns: 1fr !important; }
          .metric-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </Modal>
  );
}

function ProjectCard({ project, onOpen }: { project: (typeof projects)[0]; onOpen: () => void }) {
  const [hovered, setHovered] = useState(false);
  const Icon = project.icon;
  const isLarge = project.span === "col-2 row-2";

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={project.hasModal ? onOpen : undefined}
      style={{
        gridColumn: isLarge ? "span 2" : "span 1",
        gridRow: isLarge ? "span 2" : "span 1",
        background: project.bg,
        border: hovered ? "1px solid rgba(59,130,246,0.5)" : "1px solid rgba(255,255,255,0.08)",
        padding: isLarge ? "2.5rem" : "1.75rem",
        display: "flex", flexDirection: "column", justifyContent: "space-between",
        minHeight: isLarge ? "340px" : "160px",
        position: "relative", overflow: "hidden",
        cursor: project.hasModal ? "pointer" : "default",
        transition: "border-color 0.25s ease",
      }}
    >
      <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px)`, backgroundSize: "30px 30px", pointerEvents: "none" }} />

      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", position: "relative", zIndex: 1 }}>
        <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: isLarge ? "48px" : "36px", height: isLarge ? "48px" : "36px", backgroundColor: "rgba(59,130,246,0.12)", border: "1px solid rgba(59,130,246,0.3)" }}>
          <Icon size={isLarge ? 22 : 16} strokeWidth={1.75} color="#3B82F6" />
        </div>
        <ExternalLink size={14} color={hovered ? "#3B82F6" : "#A3A3A3"} strokeWidth={1.5} style={{ opacity: hovered ? 1 : 0, transition: "opacity 0.2s ease" }} />
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
          <span style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.15em", color: "#3B82F6", textTransform: "uppercase" }}>{project.category}</span>
          <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.6rem" }}>·</span>
          <span style={{ fontSize: "0.62rem", color: "#A3A3A3", letterSpacing: "0.05em" }}>{project.location}</span>
        </div>
        <h3 style={{ fontWeight: 900, fontSize: isLarge ? "1.5rem" : "1rem", color: "#FFFFFF", margin: 0, marginBottom: isLarge ? "0.75rem" : "0.5rem", letterSpacing: "-0.01em", lineHeight: 1.15 }}>
          {project.title}
        </h3>
        {isLarge && <p style={{ color: "#A3A3A3", fontSize: "0.875rem", lineHeight: 1.6, margin: 0, marginBottom: "1.25rem" }}>{project.description}</p>}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem", backgroundColor: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.25)", padding: "0.3rem 0.65rem" }}>
            <Zap size={10} color="#3B82F6" strokeWidth={2.5} />
            <span style={{ fontSize: "0.65rem", fontWeight: 700, color: "#3B82F6", letterSpacing: "0.06em" }}>{project.stat}</span>
          </div>
          {isLarge && (
            <span style={{ fontSize: "0.7rem", fontWeight: 700, color: hovered ? "#3B82F6" : "#A3A3A3", letterSpacing: "0.08em", textTransform: "uppercase", transition: "color 0.2s ease" }}>
              View Project →
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProjectGallery() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="projects" style={{ backgroundColor: "#1A1A1A", padding: "6rem 1.5rem", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <ProjectModal open={modalOpen} onClose={() => setModalOpen(false)} />

      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "2rem", marginBottom: "3.5rem" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
              <div style={{ width: "24px", height: "2px", backgroundColor: "#3B82F6" }} />
              <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", color: "#3B82F6", textTransform: "uppercase" }}>Our Work</span>
            </div>
            <h2 style={{ fontWeight: 900, fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#FFFFFF", margin: 0, lineHeight: 1, letterSpacing: "-0.02em" }}>PROJECTS</h2>
          </div>
          <p style={{ color: "#A3A3A3", fontSize: "0.95rem", maxWidth: "360px", lineHeight: 1.7, margin: 0 }}>
            A cross-section of commercial and residential work — from ground-up builds to precision LED retrofits.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", backgroundColor: "rgba(255,255,255,0.05)" }} className="bento-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={() => setModalOpen(true)} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .bento-grid { grid-template-columns: 1fr !important; }
          .bento-grid > * { grid-column: span 1 !important; grid-row: span 1 !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .bento-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}

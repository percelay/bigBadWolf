"use client";

import { useState } from "react";
import { Zap, Lightbulb, Factory, ExternalLink } from "lucide-react";

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
  },
];

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const [hovered, setHovered] = useState(false);
  const Icon = project.icon;

  const isLarge = project.span === "col-2 row-2";

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        gridColumn: isLarge ? "span 2" : "span 1",
        gridRow: isLarge ? "span 2" : "span 1",
        background: project.bg,
        border: hovered
          ? "1px solid rgba(59,130,246,0.5)"
          : "1px solid rgba(255,255,255,0.08)",
        padding: isLarge ? "2.5rem" : "1.75rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: isLarge ? "340px" : "160px",
        position: "relative",
        overflow: "hidden",
        cursor: "default",
        transition: "border-color 0.25s ease",
      }}
    >
      {/* Grid line decoration */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px",
          pointerEvents: "none",
        }}
      />

      {/* Top row */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: isLarge ? "48px" : "36px",
            height: isLarge ? "48px" : "36px",
            backgroundColor: "rgba(59,130,246,0.12)",
            border: "1px solid rgba(59,130,246,0.3)",
          }}
        >
          <Icon
            size={isLarge ? 22 : 16}
            strokeWidth={1.75}
            color="#3B82F6"
          />
        </div>

        <ExternalLink
          size={14}
          color="#A3A3A3"
          strokeWidth={1.5}
          style={{
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.2s ease",
          }}
        />
      </div>

      {/* Bottom content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Category + Location */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            marginBottom: "0.5rem",
          }}
        >
          <span
            style={{
              fontSize: "0.62rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              color: "#3B82F6",
              textTransform: "uppercase",
            }}
          >
            {project.category}
          </span>
          <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.6rem" }}>
            ·
          </span>
          <span
            style={{
              fontSize: "0.62rem",
              color: "#A3A3A3",
              letterSpacing: "0.05em",
            }}
          >
            {project.location}
          </span>
        </div>

        <h3
          style={{
            fontWeight: 900,
            fontSize: isLarge ? "1.5rem" : "1rem",
            color: "#FFFFFF",
            margin: 0,
            marginBottom: isLarge ? "0.75rem" : "0.5rem",
            letterSpacing: "-0.01em",
            lineHeight: 1.15,
          }}
        >
          {project.title}
        </h3>

        {isLarge && (
          <p
            style={{
              color: "#A3A3A3",
              fontSize: "0.875rem",
              lineHeight: 1.6,
              margin: 0,
              marginBottom: "1.25rem",
            }}
          >
            {project.description}
          </p>
        )}

        {/* Stat badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.35rem",
            backgroundColor: "rgba(59,130,246,0.1)",
            border: "1px solid rgba(59,130,246,0.25)",
            padding: "0.3rem 0.65rem",
          }}
        >
          <Zap size={10} color="#3B82F6" strokeWidth={2.5} />
          <span
            style={{
              fontSize: "0.65rem",
              fontWeight: 700,
              color: "#3B82F6",
              letterSpacing: "0.06em",
            }}
          >
            {project.stat}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function ProjectGallery() {
  return (
    <section
      id="projects"
      style={{
        backgroundColor: "#1A1A1A",
        padding: "6rem 1.5rem",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
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
                Our Work
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
              PROJECTS
            </h2>
          </div>
          <p
            style={{
              color: "#A3A3A3",
              fontSize: "0.95rem",
              maxWidth: "360px",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            A cross-section of commercial and residential work — from ground-up
            builds to precision LED retrofits.
          </p>
        </div>

        {/* Bento grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            backgroundColor: "rgba(255,255,255,0.05)",
          }}
          className="bento-grid"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .bento-grid {
            grid-template-columns: 1fr !important;
          }
          .bento-grid > * {
            grid-column: span 1 !important;
            grid-row: span 1 !important;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .bento-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}

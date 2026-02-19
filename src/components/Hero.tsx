"use client";

import { ArrowDown, Zap, Shield, Award } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        position: "relative",
        height: "100vh",
        minHeight: "640px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        backgroundColor: "#1A1A1A",
      }}
    >
      {/* Background: SVG electrical grid pattern + wolf silhouette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Wolf silhouette background watermark */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          paddingRight: "4rem",
          pointerEvents: "none",
        }}
      >
        <svg
          viewBox="0 0 400 420"
          width="520"
          height="540"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ opacity: 0.055 }}
        >
          {/* Large wolf silhouette */}
          <path
            d="M60 380 L60 180 L100 60 L150 120 L200 90 L250 120 L300 60 L340 180 L340 380 L290 380 L275 290 L200 315 L125 290 L110 380 Z"
            fill="white"
          />
          <path d="M100 60 L70 10 L130 90 Z" fill="white" />
          <path d="M300 60 L330 10 L270 90 Z" fill="white" />
          <ellipse cx="148" cy="200" rx="28" ry="30" fill="#1A1A1A" />
          <ellipse cx="252" cy="200" rx="28" ry="30" fill="#1A1A1A" />
          {/* Glowing blue eye */}
          <ellipse cx="252" cy="200" rx="18" ry="20" fill="#3B82F6" opacity="0.9" />
          <circle cx="258" cy="194" r="5" fill="white" opacity="0.6" />
          <ellipse cx="252" cy="200" rx="28" ry="30" fill="#3B82F6" opacity="0.3" />
        </svg>
      </div>

      {/* Radial glow top-right */}
      <div
        style={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      {/* Bottom dark gradient to ensure text readability */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "75%",
          background:
            "linear-gradient(to top, rgba(26,26,26,0.98) 0%, rgba(26,26,26,0.7) 55%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Content anchored bottom-left */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1280px",
          margin: "0 auto",
          width: "100%",
          padding: "0 1.5rem 5rem",
        }}
      >
        {/* Top badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            border: "1px solid rgba(59,130,246,0.4)",
            padding: "0.375rem 0.875rem",
            marginBottom: "1.75rem",
            backgroundColor: "rgba(59,130,246,0.08)",
          }}
        >
          <Zap size={13} color="#3B82F6" strokeWidth={2.5} />
          <span
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.18em",
              color: "#3B82F6",
              textTransform: "uppercase",
            }}
          >
            Licensed & Insured · Lic# 67363
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontWeight: 900,
            fontSize: "clamp(3rem, 8vw, 7rem)",
            lineHeight: 0.95,
            color: "#FFFFFF",
            letterSpacing: "-0.02em",
            margin: 0,
            marginBottom: "1.5rem",
            maxWidth: "800px",
          }}
        >
          BIG BAD
          <br />
          <span style={{ color: "#3B82F6" }}>WOLF</span>
          <br />
          ELECTRIC
        </h1>

        {/* Subheadline */}
        <p
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.35rem)",
            color: "#A3A3A3",
            fontWeight: 400,
            marginBottom: "2.5rem",
            maxWidth: "520px",
            lineHeight: 1.55,
          }}
        >
          Powering Commercial &amp; Residential Excellence.
        </p>

        {/* Trust badges row */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.75rem",
            marginBottom: "2.75rem",
          }}
        >
          {[
            { icon: <Shield size={14} strokeWidth={2.5} />, text: "Fully Licensed & Insured" },
            { icon: <Award size={14} strokeWidth={2.5} />, text: "A+ BBB Certified" },
            { icon: <Zap size={14} strokeWidth={2.5} />, text: "Lic# 67363" },
          ].map(({ icon, text }) => (
            <div
              key={text}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                backgroundColor: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                padding: "0.4rem 0.85rem",
                color: "#FFFFFF",
                fontSize: "0.78rem",
                fontWeight: 600,
                letterSpacing: "0.04em",
              }}
            >
              <span style={{ color: "#3B82F6" }}>{icon}</span>
              {text}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              backgroundColor: "#3B82F6",
              color: "#FFFFFF",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "0.875rem",
              letterSpacing: "0.1em",
              padding: "0.9rem 2rem",
              transition: "background-color 0.2s ease, transform 0.15s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#2563EB";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#3B82F6";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            GET A FREE QUOTE
            <Zap size={15} strokeWidth={2.5} />
          </a>
          <a
            href="#services"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              backgroundColor: "transparent",
              color: "#FFFFFF",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "0.875rem",
              letterSpacing: "0.1em",
              padding: "0.9rem 2rem",
              border: "1px solid rgba(255,255,255,0.2)",
              transition: "border-color 0.2s ease, color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#3B82F6";
              e.currentTarget.style.color = "#3B82F6";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
              e.currentTarget.style.color = "#FFFFFF";
            }}
          >
            VIEW SERVICES
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          right: "2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.4rem",
          zIndex: 10,
        }}
      >
        <span
          style={{
            fontSize: "0.6rem",
            color: "#A3A3A3",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            writingMode: "vertical-rl",
          }}
        >
          Scroll
        </span>
        <ArrowDown size={14} color="#A3A3A3" strokeWidth={1.5} />
      </div>
    </section>
  );
}

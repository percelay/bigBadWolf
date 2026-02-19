"use client";

import Image from "next/image";
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
        backgroundColor: "#0a0a0a",
      }}
    >
      {/* Full-bleed background photo */}
      <Image
        src="/trucks.jpg"
        alt="Big Bad Wolf Electric fleet"
        fill
        priority
        style={{ objectFit: "cover", objectPosition: "center 40%" }}
        quality={90}
      />

      {/* Dark base overlay — kills most of the photo brightness */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(10,10,10,0.52)",
        }}
      />

      {/* Heavy bottom-to-top gradient — ensures text is always readable */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(10,10,10,1) 0%, rgba(10,10,10,0.85) 35%, rgba(10,10,10,0.4) 65%, rgba(10,10,10,0.15) 100%)",
        }}
      />

      {/* Left vignette — anchors text column */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(10,10,10,0.7) 0%, rgba(10,10,10,0.2) 50%, transparent 100%)",
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
            border: "1px solid rgba(59,130,246,0.6)",
            padding: "0.375rem 0.875rem",
            marginBottom: "1.75rem",
            backgroundColor: "rgba(59,130,246,0.15)",
            backdropFilter: "blur(4px)",
          }}
        >
          <Zap size={13} color="#60a5fa" strokeWidth={2.5} />
          <span
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.18em",
              color: "#93c5fd",
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
            textShadow: "0 2px 40px rgba(0,0,0,0.8), 0 1px 4px rgba(0,0,0,0.9)",
          }}
        >
          BIG BAD
          <br />
          <span
            style={{
              color: "#3B82F6",
              textShadow: "0 0 60px rgba(59,130,246,0.5), 0 2px 20px rgba(0,0,0,0.9)",
            }}
          >
            WOLF
          </span>
          <br />
          ELECTRIC
        </h1>

        {/* Subheadline */}
        <p
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.35rem)",
            color: "rgba(255,255,255,0.88)",
            fontWeight: 500,
            marginBottom: "2.5rem",
            maxWidth: "520px",
            lineHeight: 1.55,
            textShadow: "0 1px 12px rgba(0,0,0,0.8)",
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
                backgroundColor: "rgba(0,0,0,0.55)",
                border: "1px solid rgba(255,255,255,0.18)",
                padding: "0.4rem 0.85rem",
                color: "#FFFFFF",
                fontSize: "0.78rem",
                fontWeight: 600,
                letterSpacing: "0.04em",
                backdropFilter: "blur(6px)",
              }}
            >
              <span style={{ color: "#60a5fa" }}>{icon}</span>
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
              boxShadow: "0 4px 24px rgba(59,130,246,0.4)",
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
              backgroundColor: "rgba(0,0,0,0.45)",
              color: "#FFFFFF",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "0.875rem",
              letterSpacing: "0.1em",
              padding: "0.9rem 2rem",
              border: "1px solid rgba(255,255,255,0.3)",
              backdropFilter: "blur(6px)",
              transition: "border-color 0.2s ease, color 0.2s ease, background-color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#3B82F6";
              e.currentTarget.style.color = "#60a5fa";
              e.currentTarget.style.backgroundColor = "rgba(59,130,246,0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
              e.currentTarget.style.color = "#FFFFFF";
              e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.45)";
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
            color: "rgba(255,255,255,0.5)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            writingMode: "vertical-rl",
          }}
        >
          Scroll
        </span>
        <ArrowDown size={14} color="rgba(255,255,255,0.5)" strokeWidth={1.5} />
      </div>
    </section>
  );
}

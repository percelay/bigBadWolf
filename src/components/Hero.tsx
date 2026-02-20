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
      {/* Full-bleed background photo — no tint */}
      <Image
        src="/Gemini_Generated_Image_3e0vte3e0vte3e0v.png"
        alt="Big B Wolf Electric"
        fill
        priority
        style={{ objectFit: "cover", objectPosition: "center 40%" }}
        quality={95}
      />

      {/* Minimal bottom scrim — only enough to floor the text, not dim the photo */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "42%",
          background:
            "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)",
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
          padding: "0 1.5rem 4.5rem",
        }}
      >
        {/* Subheadline — now the primary text */}
        <h1
          style={{
            fontWeight: 900,
            fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
            color: "#FFFFFF",
            letterSpacing: "-0.01em",
            margin: 0,
            marginBottom: "1.25rem",
            lineHeight: 1.15,
            maxWidth: "640px",
            textShadow:
              "0 2px 8px rgba(0,0,0,0.9), 0 4px 32px rgba(0,0,0,0.7)",
          }}
        >
          Powering Commercial &amp; Residential Excellence.
        </h1>

        {/* Trust badges row */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.6rem",
            marginBottom: "2rem",
          }}
        >
          {[
            { icon: <Shield size={13} strokeWidth={2.5} />, text: "Fully Licensed & Insured" },
            { icon: <Award size={13} strokeWidth={2.5} />, text: "A+ BBB Certified" },
            { icon: <Zap size={13} strokeWidth={2.5} />, text: "Lic# 67363" },
          ].map(({ icon, text }) => (
            <div
              key={text}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                backgroundColor: "rgba(0,0,0,0.5)",
                border: "1px solid rgba(255,255,255,0.2)",
                padding: "0.45rem 0.9rem",
                color: "#FFFFFF",
                fontSize: "0.8rem",
                fontWeight: 600,
                letterSpacing: "0.04em",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
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
              fontSize: "0.9rem",
              letterSpacing: "0.1em",
              padding: "0.9rem 2rem",
              transition: "background-color 0.2s ease, transform 0.15s ease",
              boxShadow: "0 4px 24px rgba(59,130,246,0.45)",
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
              fontSize: "0.9rem",
              letterSpacing: "0.1em",
              padding: "0.9rem 2rem",
              border: "1px solid rgba(255,255,255,0.3)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              transition: "border-color 0.2s ease, color 0.2s ease, background-color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#3B82F6";
              e.currentTarget.style.color = "#60a5fa";
              e.currentTarget.style.backgroundColor = "rgba(59,130,246,0.12)";
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
            color: "rgba(255,255,255,0.55)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            writingMode: "vertical-rl",
            textShadow: "0 1px 4px rgba(0,0,0,0.8)",
          }}
        >
          Scroll
        </span>
        <ArrowDown size={14} color="rgba(255,255,255,0.55)" strokeWidth={1.5} />
      </div>
    </section>
  );
}

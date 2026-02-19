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

      {/* Wolf sigil graphic */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        <svg
          viewBox="0 0 860 860"
          preserveAspectRatio="xMidYMid slice"
          style={{
            position: "absolute",
            right: "-10%",
            top: "50%",
            transform: "translateY(-50%)",
            width: "62%",
            minWidth: "420px",
            height: "auto",
            opacity: 0.95,
          }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="sigilAura" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
              <stop offset="65%" stopColor="#3B82F6" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="sigilStroke" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#93C5FD" />
              <stop offset="45%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#1D4ED8" />
            </linearGradient>
            <linearGradient id="sigilFill" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#13253f" stopOpacity="0.32" />
              <stop offset="100%" stopColor="#070e1f" stopOpacity="0.5" />
            </linearGradient>
            <filter id="softGlow" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation="28" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="lineGlow" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <circle cx="430" cy="430" r="315" fill="url(#sigilAura)" filter="url(#softGlow)" />

          {/* Outer warding mark */}
          <path
            d="M430 92 L584 184 L677 339 L643 540 L430 742 L217 540 L183 339 L276 184 Z"
            fill="rgba(8,14,28,0.26)"
            stroke="url(#sigilStroke)"
            strokeWidth="8"
            strokeLinejoin="round"
            filter="url(#lineGlow)"
          />

          {/* Inner wolf crest */}
          <path
            d="M430 152 L530 263 L502 432 L430 624 L358 432 L330 263 Z"
            fill="url(#sigilFill)"
            stroke="url(#sigilStroke)"
            strokeWidth="6"
            strokeLinejoin="round"
            filter="url(#lineGlow)"
          />

          {/* Ear blades */}
          <path
            d="M430 152 L352 250 L390 252 L430 216 L470 252 L508 250 Z"
            fill="none"
            stroke="#93C5FD"
            strokeOpacity="0.85"
            strokeWidth="4"
            strokeLinejoin="round"
          />

          {/* Brow line and eyes */}
          <path d="M338 324 L430 286 L522 324" fill="none" stroke="#60A5FA" strokeWidth="4" strokeLinecap="round" />
          <path d="M354 352 L398 342" fill="none" stroke="#93C5FD" strokeWidth="5" strokeLinecap="round" />
          <path d="M506 352 L462 342" fill="none" stroke="#93C5FD" strokeWidth="5" strokeLinecap="round" />

          {/* Muzzle geometry */}
          <path d="M430 318 L430 470" fill="none" stroke="#3B82F6" strokeWidth="4" strokeLinecap="round" />
          <path
            d="M430 470 L390 520 L418 520 L394 585 L430 546 L466 585 L442 520 L470 520 Z"
            fill="rgba(59,130,246,0.18)"
            stroke="url(#sigilStroke)"
            strokeWidth="4"
            strokeLinejoin="round"
            filter="url(#lineGlow)"
          />

          {/* Jaw / fangs frame */}
          <path
            d="M318 440 L282 520 L338 536 L382 620 L430 670 L478 620 L522 536 L578 520 L542 440"
            fill="none"
            stroke="#3B82F6"
            strokeOpacity="0.9"
            strokeWidth="5"
            strokeLinejoin="round"
          />

          {/* Side runes */}
          <path d="M230 344 L282 344 L250 398 L284 452" fill="none" stroke="#60A5FA" strokeOpacity="0.7" strokeWidth="3" strokeLinecap="round" />
          <path d="M630 344 L578 344 L610 398 L576 452" fill="none" stroke="#60A5FA" strokeOpacity="0.7" strokeWidth="3" strokeLinecap="round" />

          {/* Subtle spark points */}
          <circle cx="430" cy="112" r="4" fill="#BFDBFE" />
          <circle cx="188" cy="339" r="3.5" fill="#93C5FD" fillOpacity="0.8" />
          <circle cx="672" cy="339" r="3.5" fill="#93C5FD" fillOpacity="0.8" />
          <circle cx="430" cy="740" r="4" fill="#BFDBFE" />
        </svg>
      </div>

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

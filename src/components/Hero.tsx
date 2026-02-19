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

      {/* Two massive wolf eyes */}
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
          viewBox="0 0 900 420"
          preserveAspectRatio="xMidYMid slice"
          style={{
            position: "absolute",
            right: "-5%",
            top: "50%",
            transform: "translateY(-50%)",
            width: "68%",
            minWidth: "520px",
            height: "auto",
          }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Iris gradient — left eye */}
            <radialGradient id="irisL" cx="50%" cy="45%" r="50%">
              <stop offset="0%" stopColor="#0f2a5c" />
              <stop offset="28%" stopColor="#1d4ed8" />
              <stop offset="55%" stopColor="#3B82F6" />
              <stop offset="75%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#0c1e42" />
            </radialGradient>
            {/* Iris gradient — right eye */}
            <radialGradient id="irisR" cx="50%" cy="45%" r="50%">
              <stop offset="0%" stopColor="#0f2a5c" />
              <stop offset="28%" stopColor="#1d4ed8" />
              <stop offset="55%" stopColor="#3B82F6" />
              <stop offset="75%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#0c1e42" />
            </radialGradient>
            {/* Limbal ring highlight */}
            <radialGradient id="limbalL" cx="50%" cy="50%" r="50%">
              <stop offset="82%" stopColor="transparent" />
              <stop offset="88%" stopColor="#60a5fa" stopOpacity="0.6" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
            <radialGradient id="limbalR" cx="50%" cy="50%" r="50%">
              <stop offset="82%" stopColor="transparent" />
              <stop offset="88%" stopColor="#60a5fa" stopOpacity="0.6" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
            {/* Outer ambient glow */}
            <radialGradient id="glowL" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.22" />
              <stop offset="60%" stopColor="#3B82F6" stopOpacity="0.07" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="glowR" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.22" />
              <stop offset="60%" stopColor="#3B82F6" stopOpacity="0.07" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
            </radialGradient>
            {/* Sclera gradient */}
            <radialGradient id="scleraL" cx="50%" cy="40%" r="55%">
              <stop offset="0%" stopColor="#0d1f3c" />
              <stop offset="100%" stopColor="#060e1c" />
            </radialGradient>
            <radialGradient id="scleraR" cx="50%" cy="40%" r="55%">
              <stop offset="0%" stopColor="#0d1f3c" />
              <stop offset="100%" stopColor="#060e1c" />
            </radialGradient>
            {/* Glow blur filter */}
            <filter id="blueGlow" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="14" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="softGlow" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="28" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="irisGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            {/* Pupil clip */}
            <clipPath id="clipL">
              <ellipse cx="225" cy="210" rx="118" ry="88" />
            </clipPath>
            <clipPath id="clipR">
              <ellipse cx="675" cy="210" rx="118" ry="88" />
            </clipPath>
          </defs>

          {/* ── LEFT EYE ── */}
          {/* Outermost ambient halo */}
          <ellipse cx="225" cy="210" rx="230" ry="185" fill="url(#glowL)" />
          {/* Sclera */}
          <ellipse cx="225" cy="210" rx="175" ry="128" fill="url(#scleraL)" />
          {/* Iris */}
          <ellipse cx="225" cy="210" rx="118" ry="88" fill="url(#irisL)" filter="url(#irisGlow)" />
          {/* Iris texture — radial spokes */}
          {Array.from({ length: 20 }).map((_, i) => {
            const angle = (i / 20) * Math.PI * 2;
            const x1 = 225 + Math.cos(angle) * 28;
            const y1 = 210 + Math.sin(angle) * 21;
            const x2 = 225 + Math.cos(angle) * 112;
            const y2 = 210 + Math.sin(angle) * 84;
            return (
              <line
                key={`spoke-l-${i}`}
                x1={x1} y1={y1} x2={x2} y2={y2}
                stroke="#60a5fa"
                strokeWidth="0.6"
                strokeOpacity="0.25"
              />
            );
          })}
          {/* Limbal ring */}
          <ellipse cx="225" cy="210" rx="118" ry="88" fill="url(#limbalL)" />
          {/* Pupil — vertical wolf slit */}
          <ellipse cx="225" cy="210" rx="17" ry="82" fill="#03080f" clipPath="url(#clipL)" />
          {/* Pupil inner depth */}
          <ellipse cx="225" cy="210" rx="10" ry="78" fill="#010306" />
          {/* Eye shine — primary */}
          <ellipse
            cx="198" cy="178"
            rx="18" ry="11"
            fill="white"
            opacity="0.18"
            transform="rotate(-18, 198, 178)"
          />
          {/* Eye shine — secondary */}
          <ellipse
            cx="252" cy="192"
            rx="7" ry="4"
            fill="white"
            opacity="0.1"
            transform="rotate(-12, 252, 192)"
          />
          {/* Iris inner glow ring */}
          <ellipse cx="225" cy="210" rx="30" ry="23" fill="none" stroke="#93c5fd" strokeWidth="1.5" strokeOpacity="0.2" />
          {/* Eyelid top */}
          <path
            d="M50 210 Q100 80 225 82 Q350 80 400 210"
            fill="#111820"
            stroke="none"
          />
          {/* Eyelid bottom */}
          <path
            d="M50 210 Q100 340 225 338 Q350 340 400 210"
            fill="#111820"
            stroke="none"
          />
          {/* Eyelid edge glow top */}
          <path
            d="M50 210 Q100 80 225 82 Q350 80 400 210"
            fill="none"
            stroke="#3B82F6"
            strokeWidth="1.5"
            strokeOpacity="0.35"
          />
          {/* Eyelid edge glow bottom */}
          <path
            d="M50 210 Q100 340 225 338 Q350 340 400 210"
            fill="none"
            stroke="#3B82F6"
            strokeWidth="1"
            strokeOpacity="0.2"
          />

          {/* ── RIGHT EYE ── */}
          {/* Outermost ambient halo */}
          <ellipse cx="675" cy="210" rx="230" ry="185" fill="url(#glowR)" />
          {/* Sclera */}
          <ellipse cx="675" cy="210" rx="175" ry="128" fill="url(#scleraR)" />
          {/* Iris */}
          <ellipse cx="675" cy="210" rx="118" ry="88" fill="url(#irisR)" filter="url(#irisGlow)" />
          {/* Iris texture */}
          {Array.from({ length: 20 }).map((_, i) => {
            const angle = (i / 20) * Math.PI * 2;
            const x1 = 675 + Math.cos(angle) * 28;
            const y1 = 210 + Math.sin(angle) * 21;
            const x2 = 675 + Math.cos(angle) * 112;
            const y2 = 210 + Math.sin(angle) * 84;
            return (
              <line
                key={`spoke-r-${i}`}
                x1={x1} y1={y1} x2={x2} y2={y2}
                stroke="#60a5fa"
                strokeWidth="0.6"
                strokeOpacity="0.25"
              />
            );
          })}
          {/* Limbal ring */}
          <ellipse cx="675" cy="210" rx="118" ry="88" fill="url(#limbalR)" />
          {/* Pupil */}
          <ellipse cx="675" cy="210" rx="17" ry="82" fill="#03080f" clipPath="url(#clipR)" />
          <ellipse cx="675" cy="210" rx="10" ry="78" fill="#010306" />
          {/* Eye shine */}
          <ellipse
            cx="648" cy="178"
            rx="18" ry="11"
            fill="white"
            opacity="0.18"
            transform="rotate(-18, 648, 178)"
          />
          <ellipse
            cx="702" cy="192"
            rx="7" ry="4"
            fill="white"
            opacity="0.1"
            transform="rotate(-12, 702, 192)"
          />
          {/* Iris inner glow ring */}
          <ellipse cx="675" cy="210" rx="30" ry="23" fill="none" stroke="#93c5fd" strokeWidth="1.5" strokeOpacity="0.2" />
          {/* Eyelid top */}
          <path
            d="M500 210 Q550 80 675 82 Q800 80 850 210"
            fill="#111820"
            stroke="none"
          />
          {/* Eyelid bottom */}
          <path
            d="M500 210 Q550 340 675 338 Q800 340 850 210"
            fill="#111820"
            stroke="none"
          />
          {/* Eyelid edge glow top */}
          <path
            d="M500 210 Q550 80 675 82 Q800 80 850 210"
            fill="none"
            stroke="#3B82F6"
            strokeWidth="1.5"
            strokeOpacity="0.35"
          />
          {/* Eyelid edge glow bottom */}
          <path
            d="M500 210 Q550 340 675 338 Q800 340 850 210"
            fill="none"
            stroke="#3B82F6"
            strokeWidth="1"
            strokeOpacity="0.2"
          />
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

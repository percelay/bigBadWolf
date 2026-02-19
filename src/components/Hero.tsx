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

      {/* Cartoon wolf head graphic */}
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
          viewBox="0 0 900 700"
          preserveAspectRatio="xMidYMid slice"
          style={{
            position: "absolute",
            right: "-9%",
            top: "50%",
            transform: "translateY(-50%)",
            width: "64%",
            minWidth: "440px",
            height: "auto",
            opacity: 0.95,
          }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="wolfAura" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.22" />
              <stop offset="65%" stopColor="#3B82F6" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="furMain" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#49566C" />
              <stop offset="52%" stopColor="#2F394B" />
              <stop offset="100%" stopColor="#1C2533" />
            </linearGradient>
            <linearGradient id="furShadow" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#2A3342" />
              <stop offset="100%" stopColor="#131B27" />
            </linearGradient>
            <linearGradient id="muzzleFur" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#C9D0DC" />
              <stop offset="100%" stopColor="#AAB4C4" />
            </linearGradient>
            <linearGradient id="earInner" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#8D96A8" />
              <stop offset="100%" stopColor="#5A6478" />
            </linearGradient>
            <radialGradient id="eyeBlue" cx="50%" cy="45%" r="55%">
              <stop offset="0%" stopColor="#CDE7FF" />
              <stop offset="35%" stopColor="#60A5FA" />
              <stop offset="70%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#1D4ED8" />
            </radialGradient>
            <linearGradient id="noseGrad" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#283142" />
              <stop offset="100%" stopColor="#101723" />
            </linearGradient>
            <filter id="softGlow" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation="24" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="eyeGlow" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <ellipse cx="520" cy="350" rx="300" ry="265" fill="url(#wolfAura)" filter="url(#softGlow)" />

          {/* Ears */}
          <path d="M358 138 L276 54 L272 252 L378 214 Z" fill="url(#furShadow)" stroke="#111827" strokeWidth="4" strokeLinejoin="round" />
          <path d="M620 138 L702 54 L706 252 L600 214 Z" fill="url(#furShadow)" stroke="#111827" strokeWidth="4" strokeLinejoin="round" />
          <path d="M338 145 L292 95 L294 225 L356 200 Z" fill="url(#earInner)" />
          <path d="M640 145 L686 95 L684 225 L622 200 Z" fill="url(#earInner)" />

          {/* Main head */}
          <path
            d="M490 130 C422 102 332 137 295 224 C258 309 276 421 336 507 C382 574 456 616 540 612 C624 608 701 562 747 488 C792 416 800 329 768 247 C736 165 656 118 582 125 C548 129 515 146 490 170 Z"
            fill="url(#furMain)"
            stroke="#111827"
            strokeWidth="5"
            strokeLinejoin="round"
          />

          {/* Cheek fur tufts */}
          <path d="M334 414 L272 448 L332 488 L295 530 L378 548" fill="url(#furShadow)" stroke="#111827" strokeWidth="4" strokeLinejoin="round" />
          <path d="M706 402 L768 440 L712 484 L744 522 L664 548" fill="url(#furShadow)" stroke="#111827" strokeWidth="4" strokeLinejoin="round" />

          {/* Forehead stripe */}
          <path
            d="M492 196 C460 214 436 246 432 286 C426 336 454 378 496 394 C538 410 590 390 613 354 C636 317 631 265 600 228 C572 194 528 178 492 196 Z"
            fill="#909BB0"
            fillOpacity="0.55"
          />

          {/* Eyes */}
          <ellipse cx="428" cy="328" rx="62" ry="42" fill="#EAF3FF" stroke="#1F2937" strokeWidth="4" />
          <ellipse cx="578" cy="328" rx="62" ry="42" fill="#EAF3FF" stroke="#1F2937" strokeWidth="4" />
          <circle cx="428" cy="332" r="25" fill="url(#eyeBlue)" filter="url(#eyeGlow)" />
          <circle cx="578" cy="332" r="25" fill="url(#eyeBlue)" filter="url(#eyeGlow)" />
          <circle cx="428" cy="334" r="10" fill="#05080F" />
          <circle cx="578" cy="334" r="10" fill="#05080F" />
          <circle cx="420" cy="322" r="4.5" fill="#FFFFFF" />
          <circle cx="570" cy="322" r="4.5" fill="#FFFFFF" />
          <path d="M362 302 Q428 264 494 302" fill="none" stroke="#1F2937" strokeWidth="7" strokeLinecap="round" />
          <path d="M512 302 Q578 264 644 302" fill="none" stroke="#1F2937" strokeWidth="7" strokeLinecap="round" />

          {/* Muzzle */}
          <path
            d="M512 352 C460 356 418 394 414 442 C410 500 456 545 515 550 C574 555 628 515 637 459 C646 402 607 356 548 350 C536 348 523 349 512 352 Z"
            fill="url(#muzzleFur)"
            stroke="#1F2937"
            strokeWidth="4"
          />
          <path d="M515 382 L548 420 L515 448 L482 420 Z" fill="url(#noseGrad)" stroke="#0B1220" strokeWidth="3" strokeLinejoin="round" />
          <path d="M515 448 L515 500" fill="none" stroke="#374151" strokeWidth="3" strokeLinecap="round" />
          <path d="M515 500 C494 526 466 540 438 540" fill="none" stroke="#0F172A" strokeWidth="4" strokeLinecap="round" />
          <path d="M515 500 C536 526 564 540 592 540" fill="none" stroke="#0F172A" strokeWidth="4" strokeLinecap="round" />
          <path d="M488 540 L476 556 M542 540 L554 556" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />

          {/* Fur detail lines */}
          <path d="M428 250 L460 226 L494 246" fill="none" stroke="#BFC9D8" strokeOpacity="0.65" strokeWidth="3" strokeLinecap="round" />
          <path d="M574 248 L606 226 L638 248" fill="none" stroke="#BFC9D8" strokeOpacity="0.65" strokeWidth="3" strokeLinecap="round" />
          <path d="M370 420 L420 392 M660 410 L610 388" stroke="#4B5563" strokeWidth="3" strokeLinecap="round" />
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

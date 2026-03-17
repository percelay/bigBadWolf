"use client";

import { useRef, useState, useCallback } from "react";
import { Zap, Shield, Award, ExternalLink, Star } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  { label: "Commercial New Construction", href: "#services" },
  { label: "Remodel & Service Work", href: "#services" },
  { label: "LED Commercial Upgrades", href: "#services" },
  { label: "Parking Lot Lighting", href: "#services" },
  { label: "Restaurant Electrical", href: "#services" },
  { label: "Generac Generator Install", href: "#services" },
  { label: "Get a Free Quote", href: "mailto:fleeta@bigbwolfelectric.com" },
];

const reviewPlatforms = [
  {
    name: "BBB",
    label: "Better Business Bureau",
    rating: "A+",
    detail: "Accredited Business",
    color: "#003087",
    href: "https://www.bbb.org/us/ok/yukon/profile/electrician/big-b-wolf-electric-llc-0995-90021962",
  },
  {
    name: "Angi",
    label: "Angi (Angie's List)",
    rating: "5.0",
    detail: "Verified Reviews",
    color: "#FF6B2B",
    href: "https://www.angi.com/companylist/us/ok/yukon/big-b-wolf-electric-llc-reviews-6474698.htm#reviews",
  },
  {
    name: "G",
    label: "Google Reviews",
    rating: "5.0",
    detail: "Google Business",
    color: "#4285F4",
    href: "https://www.google.com/search?sca_esv=ba586742f70b6987&rlz=1C5CHFA_enUS969US969&sxsrf=ANbL-n5Ct0cPmDUAs3oteCQDMqvSF6DYKg:1771604554103&si=AL3DRZFIhG6pAqfNLal55wUTwygCG0fClF3UxiOmgw9Hq7nbWc9K0lnCusOuuNJ5X_DoH7svAc21l4GWNiI5yPawBerw4W3ptwx4FE5PMatYlVxxD7trgBx69Np-8F188o5IxJ3RB5W13ktgJcSqc2n7g9X4X5Hxvw%3D%3D&q=Big+B+Wolf+Electric+Reviews&sa=X&ved=2ahUKEwjyyIShveiSAxWdDzQIHTviCRUQ0bkNegQIJBAH&biw=1440&bih=692&dpr=2",
  },
];

function PersailleBadge() {
  const badgeRef = useRef<HTMLAnchorElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTilt({ x: (y - 0.5) * -14, y: (x - 0.5) * 14 });
    setGlowPos({ x: x * 100, y: y * 100 });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  }, []);

  return (
    <div
      style={{
        borderTop: "1px solid rgba(255,255,255,0.03)",
        padding: "1.5rem 1.5rem 1.75rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        perspective: "800px",
      }}
    >
      <a
        ref={badgeRef}
        href="https://persaille.com"
        target="_blank"
        rel="noopener noreferrer"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.65rem",
          padding: "0.6rem 1.4rem 0.6rem 0.8rem",
          textDecoration: "none",
          position: "relative",
          overflow: "hidden",
          border: `1px solid ${isHovered ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.06)"}`,
          background: isHovered
            ? "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(59,130,246,0.06) 50%, rgba(168,85,247,0.04) 100%)"
            : "rgba(255,255,255,0.02)",
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${isHovered ? 1.03 : 1})`,
          transition: isHovered
            ? "border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease"
            : "transform 0.5s ease, border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease",
          boxShadow: isHovered
            ? "0 0 20px rgba(59,130,246,0.12), 0 0 40px rgba(168,85,247,0.06), inset 0 0 30px rgba(59,130,246,0.04)"
            : "none",
          cursor: "pointer",
        }}
      >
        {/* Dynamic glow that follows cursor */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: isHovered ? 1 : 0,
            transition: "opacity 0.3s ease",
            background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, rgba(59,130,246,0.15) 0%, transparent 60%)`,
            pointerEvents: "none",
          }}
        />

        {/* Shimmer sweep */}
        <div className="persaille-shimmer"
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.06) 45%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.06) 55%, transparent 60%)",
            pointerEvents: "none",
          }}
        />

        {/* Logo mark — a stylized "P" monogram */}
        <div
          style={{
            width: "28px",
            height: "28px",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            style={{
              filter: isHovered ? "drop-shadow(0 0 6px rgba(59,130,246,0.4))" : "none",
              transition: "filter 0.3s ease",
            }}
          >
            {/* Outer ring */}
            <circle
              cx="14"
              cy="14"
              r="12.5"
              stroke={isHovered ? "rgba(59,130,246,0.6)" : "rgba(255,255,255,0.15)"}
              strokeWidth="1"
              fill="none"
              style={{ transition: "stroke 0.3s ease" }}
            />
            {/* Inner accent arc */}
            <path
              d="M 14 2.5 A 11.5 11.5 0 0 1 25.5 14"
              stroke={isHovered ? "rgba(168,85,247,0.5)" : "rgba(255,255,255,0.08)"}
              strokeWidth="1"
              fill="none"
              strokeLinecap="round"
              style={{ transition: "stroke 0.3s ease" }}
            />
            {/* Stylized P */}
            <text
              x="14"
              y="14"
              textAnchor="middle"
              dominantBaseline="central"
              style={{
                fontSize: "12px",
                fontWeight: 300,
                letterSpacing: "0.05em",
                fill: isHovered ? "#FFFFFF" : "rgba(255,255,255,0.6)",
                transition: "fill 0.3s ease",
                fontFamily: "Inter, sans-serif",
              }}
            >
              P
            </text>
            {/* Bottom accent dot */}
            <circle
              cx="14"
              cy="24"
              r="1"
              fill={isHovered ? "#3B82F6" : "rgba(255,255,255,0.15)"}
              style={{ transition: "fill 0.3s ease" }}
            />
          </svg>
        </div>

        {/* Text */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              fontSize: "0.5rem",
              fontWeight: 500,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: isHovered ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.3)",
              transition: "color 0.3s ease",
              marginBottom: "0.1rem",
              lineHeight: 1,
            }}
          >
            site by
          </div>
          <div
            className="persaille-text"
            style={{
              fontSize: "0.85rem",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              lineHeight: 1,
              background: isHovered
                ? "linear-gradient(135deg, #FFFFFF 0%, #93C5FD 40%, #C4B5FD 70%, #FFFFFF 100%)"
                : "linear-gradient(135deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.35) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              backgroundSize: isHovered ? "200% 200%" : "100% 100%",
              transition: "background 0.3s ease",
            }}
          >
            Persaille
          </div>
        </div>

        {/* Subtle arrow */}
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          style={{
            marginLeft: "0.2rem",
            opacity: isHovered ? 0.7 : 0,
            transform: isHovered ? "translate(0, 0)" : "translate(-4px, 4px)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
            position: "relative",
            zIndex: 1,
          }}
        >
          <path d="M1 9L9 1M9 1H3M9 1V7" stroke="rgba(255,255,255,0.6)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </div>
  );
}

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#111111",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* Main footer columns */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "4rem 1.5rem",
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1.2fr",
          gap: "3rem",
        }}
        className="footer-grid"
      >
        {/* Column 1: Brand */}
        <div>
          <div style={{ marginBottom: "1.25rem" }}>
            <div style={{ fontWeight: 900, fontSize: "1.25rem", color: "#FFFFFF", letterSpacing: "0.02em", lineHeight: 1.1 }}>
              BIG B WOLF
            </div>
            <div style={{ fontWeight: 500, fontSize: "0.65rem", color: "#3B82F6", letterSpacing: "0.15em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: "0.25rem", marginTop: "0.2rem" }}>
              <Zap size={9} strokeWidth={2.5} />
              ELECTRIC
            </div>
          </div>

          <p
            style={{
              color: "#A3A3A3",
              fontSize: "0.875rem",
              lineHeight: 1.7,
              marginBottom: "1.75rem",
              maxWidth: "300px",
            }}
          >
            Powering Commercial &amp; Residential Excellence. Precision
            electrical work for Yukon and the greater OKC area.
          </p>

          {/* Credential badges */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {[
              { icon: Shield, text: "Fully Licensed & Insured" },
              { icon: Award, text: "A+ BBB Certified" },
              { icon: Zap, text: "Contractor Lic# 67363" },
            ].map(({ icon: Icon, text }) => (
              <div
                key={text}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <Icon size={13} color="#3B82F6" strokeWidth={2} />
                <span
                  style={{
                    fontSize: "0.78rem",
                    color: "#FFFFFF",
                    fontWeight: 500,
                  }}
                >
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Column 2: Navigation */}
        <div>
          <h4
            style={{
              fontWeight: 700,
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              color: "#A3A3A3",
              textTransform: "uppercase",
              margin: 0,
              marginBottom: "1.25rem",
            }}
          >
            Navigate
          </h4>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  style={{
                    color: "#A3A3A3",
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    transition: "color 0.2s ease",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.35rem",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#A3A3A3")}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Services */}
        <div>
          <h4
            style={{
              fontWeight: 700,
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              color: "#A3A3A3",
              textTransform: "uppercase",
              margin: 0,
              marginBottom: "1.25rem",
            }}
          >
            Services
          </h4>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {serviceLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  style={{
                    color: "#A3A3A3",
                    textDecoration: "none",
                    fontSize: "0.8rem",
                    fontWeight: 400,
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#A3A3A3")}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Reviews */}
        <div>
          <h4
            style={{
              fontWeight: 700,
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              color: "#A3A3A3",
              textTransform: "uppercase",
              margin: 0,
              marginBottom: "0.5rem",
            }}
          >
            Customer Reviews
          </h4>
          <p style={{ color: "#A3A3A3", fontSize: "0.78rem", lineHeight: 1.6, marginBottom: "1.25rem" }}>
            See what our customers are saying across the web.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {reviewPlatforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.85rem",
                  padding: "0.85rem 1rem",
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  textDecoration: "none",
                  transition: "border-color 0.2s ease, background-color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                  e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.06)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.03)";
                }}
              >
                {/* Platform badge */}
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    backgroundColor: platform.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 900,
                    fontSize: "0.7rem",
                    color: "#FFFFFF",
                    letterSpacing: "0.03em",
                    flexShrink: 0,
                  }}
                >
                  {platform.name}
                </div>

                {/* Info */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.35rem", marginBottom: "0.2rem" }}>
                    <span style={{ fontWeight: 700, fontSize: "0.78rem", color: "#FFFFFF" }}>
                      {platform.rating}
                    </span>
                    <div style={{ display: "flex", gap: "1px" }}>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={9} fill="#FBBF24" color="#FBBF24" strokeWidth={0} />
                      ))}
                    </div>
                  </div>
                  <div style={{ fontSize: "0.65rem", color: "#A3A3A3", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {platform.detail}
                  </div>
                </div>

                <ExternalLink size={12} color="#A3A3A3" strokeWidth={1.5} style={{ flexShrink: 0 }} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "1.25rem 1.5rem",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "0.75rem",
          }}
        >
          <span style={{ color: "#A3A3A3", fontSize: "0.75rem" }}>
            © {new Date().getFullYear()} Big B Wolf Electric. All rights
            reserved. · Contractor Lic# 67363
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            {["Privacy Policy", "Terms of Service"].map((label) => (
              <a
                key={label}
                href="#"
                style={{
                  color: "#A3A3A3",
                  fontSize: "0.72rem",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#A3A3A3")}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Persaille signature */}
      <PersailleBadge />

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @keyframes persaille-shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .persaille-shimmer {
          animation: persaille-shimmer 4s ease-in-out infinite;
        }
        @keyframes persaille-gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        a:hover .persaille-text {
          animation: persaille-gradient 3s ease infinite;
        }
      `}</style>
    </footer>
  );
}

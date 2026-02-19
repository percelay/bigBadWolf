"use client";

import { Zap, Shield, Award, ExternalLink, ArrowRight } from "lucide-react";
import { useState } from "react";
import WolfLogo from "./WolfLogo";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  { label: "Residential Construction", href: "#services" },
  { label: "Commercial Construction", href: "#services" },
  { label: "LED Commercial Upgrades", href: "#services" },
  { label: "Parking Lot Lighting", href: "#services" },
  { label: "Service & Repair", href: "#contact" },
  { label: "Get a Free Quote", href: "#contact" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

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
          <a
            href="#"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              textDecoration: "none",
              marginBottom: "1.25rem",
            }}
          >
            <WolfLogo size={46} />
            <div>
              <div
                style={{
                  fontWeight: 900,
                  fontSize: "1rem",
                  color: "#FFFFFF",
                  letterSpacing: "0.02em",
                  lineHeight: 1.1,
                }}
              >
                BIG B WOLF
              </div>
              <div
                style={{
                  fontWeight: 500,
                  fontSize: "0.65rem",
                  color: "#3B82F6",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.25rem",
                }}
              >
                <Zap size={9} strokeWidth={2.5} />
                ELECTRIC
              </div>
            </div>
          </a>

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
            electrical work for Arizona&apos;s homes, businesses, and facilities.
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

        {/* Column 4: Newsletter */}
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
            Stay Updated
          </h4>
          <p
            style={{
              color: "#A3A3A3",
              fontSize: "0.82rem",
              lineHeight: 1.65,
              marginBottom: "1.25rem",
            }}
          >
            Get electrical tips, energy-saving guides, and project updates.
          </p>

          {subscribed ? (
            <div
              style={{
                backgroundColor: "rgba(59,130,246,0.08)",
                border: "1px solid rgba(59,130,246,0.3)",
                padding: "0.85rem 1rem",
                color: "#3B82F6",
                fontSize: "0.82rem",
                fontWeight: 600,
              }}
            >
              You&apos;re subscribed. Thanks!
            </div>
          ) : (
            <form onSubmit={handleSubscribe}>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    backgroundColor: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "#FFFFFF",
                    fontSize: "0.85rem",
                    padding: "0.75rem 1rem",
                    outline: "none",
                    fontFamily: "inherit",
                    width: "100%",
                    transition: "border-color 0.2s ease",
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "rgba(59,130,246,0.5)")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")
                  }
                />
                <button
                  type="submit"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.4rem",
                    backgroundColor: "#3B82F6",
                    color: "#FFFFFF",
                    border: "none",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    padding: "0.75rem 1rem",
                    cursor: "pointer",
                    fontFamily: "inherit",
                    transition: "background-color 0.2s ease",
                    width: "100%",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#2563EB")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "#3B82F6")
                  }
                >
                  SUBSCRIBE
                  <ArrowRight size={12} strokeWidth={2.5} />
                </button>
              </div>
            </form>
          )}

          {/* BBB Badge placeholder */}
          <div
            style={{
              marginTop: "1.75rem",
              padding: "1rem",
              backgroundColor: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                backgroundColor: "#003087",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 900,
                fontSize: "0.75rem",
                color: "#FFFFFF",
                letterSpacing: "0.05em",
                flexShrink: 0,
              }}
            >
              BBB
            </div>
            <div>
              <div
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  marginBottom: "0.15rem",
                }}
              >
                A+ Accredited Business
              </div>
              <a
                href="https://www.bbb.org"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "0.65rem",
                  color: "#A3A3A3",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.25rem",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#3B82F6")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#A3A3A3")}
              >
                Better Business Bureau
                <ExternalLink size={9} />
              </a>
            </div>
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
          <div style={{ display: "flex", gap: "1.5rem" }}>
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
      `}</style>
    </footer>
  );
}

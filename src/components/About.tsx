"use client";

import { Shield, Award, Zap, CheckCircle } from "lucide-react";
import WolfLogo from "./WolfLogo";

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "500+", label: "Projects Completed" },
  { value: "A+", label: "BBB Rating" },
  { value: "100%", label: "Licensed & Insured" },
];

const credentials = [
  {
    icon: Shield,
    title: "Fully Licensed & Insured",
    description:
      "Every job is backed by full licensing and comprehensive insurance coverage — protecting your property and our team.",
  },
  {
    icon: Award,
    title: "A+ BBB Certified",
    description:
      "Better Business Bureau accredited with the highest rating, reflecting our commitment to honest, quality work.",
  },
  {
    icon: Zap,
    title: "License # 67363",
    description:
      "Verified contractor credentials. You can trust that every installation meets or exceeds code requirements.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        backgroundColor: "#2F2F2F",
        padding: "6rem 1.5rem",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background wolf watermark */}
      <div
        style={{
          position: "absolute",
          bottom: "-4rem",
          left: "-3rem",
          opacity: 0.04,
          pointerEvents: "none",
        }}
      >
        <WolfLogo size={400} />
      </div>

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "start",
          }}
          className="about-grid"
        >
          {/* Left: copy */}
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
                style={{ width: "24px", height: "2px", backgroundColor: "#3B82F6" }}
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
                Why Choose Us
              </span>
            </div>

            <h2
              style={{
                fontWeight: 900,
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: "#FFFFFF",
                margin: 0,
                marginBottom: "1.5rem",
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}
            >
              TRUSTED.
              <br />
              <span style={{ color: "#3B82F6" }}>PRECISE.</span>
              <br />
              POWERFUL.
            </h2>

            <p
              style={{
                color: "#A3A3A3",
                fontSize: "1rem",
                lineHeight: 1.75,
                marginBottom: "2rem",
              }}
            >
              Big Bad Wolf Electric brings a relentless work ethic and precision
              craftsmanship to every project — whether it&apos;s a 200-amp panel
              upgrade for a homeowner or a full LED conversion for a
              200,000 sq ft distribution center.
            </p>

            <p
              style={{
                color: "#A3A3A3",
                fontSize: "1rem",
                lineHeight: 1.75,
                marginBottom: "2.5rem",
              }}
            >
              We don&apos;t cut corners. Every wire is pulled clean, every
              connection is torqued to spec, and every project is completed on
              time — or we fix it at no extra cost.
            </p>

            {/* Checklist */}
            {[
              "Commercial & residential new construction",
              "LED retrofits and energy audits",
              "Code-compliant service upgrades",
              "24/7 emergency service available",
            ].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "0.75rem",
                }}
              >
                <CheckCircle size={16} color="#3B82F6" strokeWidth={2} />
                <span style={{ color: "#FFFFFF", fontSize: "0.9rem", fontWeight: 500 }}>
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Right: stats + credentials */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {/* Stats grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1px",
                backgroundColor: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    backgroundColor: "#1A1A1A",
                    padding: "1.75rem",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontWeight: 900,
                      fontSize: "2.25rem",
                      color: "#3B82F6",
                      letterSpacing: "-0.02em",
                      lineHeight: 1,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      color: "#A3A3A3",
                      textTransform: "uppercase",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Credentials */}
            {credentials.map((cred) => {
              const CIcon = cred.icon;
              return (
                <div
                  key={cred.title}
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                    paddingBottom: "1.5rem",
                  }}
                >
                  <div
                    style={{
                      flexShrink: 0,
                      width: "40px",
                      height: "40px",
                      backgroundColor: "rgba(59,130,246,0.1)",
                      border: "1px solid rgba(59,130,246,0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <CIcon size={18} color="#3B82F6" strokeWidth={1.75} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontWeight: 700,
                        fontSize: "0.9rem",
                        color: "#FFFFFF",
                        marginBottom: "0.35rem",
                      }}
                    >
                      {cred.title}
                    </div>
                    <div
                      style={{
                        color: "#A3A3A3",
                        fontSize: "0.82rem",
                        lineHeight: 1.6,
                      }}
                    >
                      {cred.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}

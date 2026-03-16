"use client";

import { Zap, Phone, Mail, MapPin, CheckCircle } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      style={{ backgroundColor: "#1A1A1A", padding: "6rem 1.5rem", borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "3.5rem" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
            <div style={{ width: "24px", height: "2px", backgroundColor: "#3B82F6" }} />
            <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", color: "#3B82F6", textTransform: "uppercase" }}>
              Get In Touch
            </span>
          </div>
          <h2 style={{ fontWeight: 900, fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#FFFFFF", margin: 0, lineHeight: 1, letterSpacing: "-0.02em" }}>
            CONTACT US
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }} className="contact-grid">

          {/* Left: contact info */}
          <div>
            <p style={{ color: "#A3A3A3", fontSize: "0.95rem", lineHeight: 1.75, marginBottom: "2.5rem" }}>
              Ready to start your project? Reach out and we&apos;ll get
              back to you within one business day with a detailed estimate.
            </p>

            {[
              { icon: Phone, label: "Phone", value: "(405) 577-6680", href: "tel:4055776680" },
              { icon: Mail, label: "Email", value: "fleeta@bigbwolfelectric.com", href: "mailto:fleeta@bigbwolfelectric.com" },
              { icon: MapPin, label: "Address", value: "10601 NW 2nd St\nYukon, OK 73099", href: "https://maps.google.com/?q=10601+NW+2nd+St+Yukon+OK+73099" },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", marginBottom: "1.5rem" }}>
                <div style={{ flexShrink: 0, width: "40px", height: "40px", backgroundColor: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon size={16} color="#3B82F6" strokeWidth={1.75} />
                </div>
                <div>
                  <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em", color: "#A3A3A3", textTransform: "uppercase", marginBottom: "0.2rem" }}>
                    {label}
                  </div>
                  <a
                    href={href}
                    target={label === "Address" ? "_blank" : undefined}
                    rel={label === "Address" ? "noopener noreferrer" : undefined}
                    style={{ color: "#FFFFFF", fontSize: "0.9rem", fontWeight: 500, textDecoration: "none", transition: "color 0.2s ease", whiteSpace: "pre-line" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#3B82F6")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                  >
                    {value}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Right: credentials */}
          <div>
            <div style={{ padding: "2rem", backgroundColor: "rgba(59,130,246,0.06)", border: "1px solid rgba(59,130,246,0.2)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
                <Zap size={14} color="#3B82F6" strokeWidth={2.5} />
                <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", color: "#3B82F6", textTransform: "uppercase" }}>
                  Credentials
                </span>
              </div>
              {["Fully Licensed & Insured", "A+ BBB Certified", "Lic# 67363", "Certified Generac Installer"].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.6rem" }}>
                  <CheckCircle size={13} color="#3B82F6" strokeWidth={2} />
                  <span style={{ color: "#FFFFFF", fontSize: "0.85rem" }}>{item}</span>
                </div>
              ))}
            </div>

            <a
              href="mailto:fleeta@bigbwolfelectric.com"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.6rem",
                backgroundColor: "#3B82F6",
                color: "#FFFFFF",
                textDecoration: "none",
                fontSize: "0.875rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                padding: "1rem 2rem",
                marginTop: "1.5rem",
                transition: "background-color 0.2s ease, transform 0.15s ease",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#2563EB"; e.currentTarget.style.transform = "translateY(-1px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#3B82F6"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <Mail size={15} strokeWidth={2} />
              EMAIL US FOR A QUOTE
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
}

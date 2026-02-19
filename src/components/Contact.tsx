"use client";

import { useState } from "react";
import { Zap, Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.12)",
    color: "#FFFFFF",
    fontSize: "0.9rem",
    padding: "0.85rem 1rem",
    outline: "none",
    fontFamily: "inherit",
    transition: "border-color 0.2s ease",
  };

  return (
    <section
      id="contact"
      style={{
        backgroundColor: "#1A1A1A",
        padding: "6rem 1.5rem",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "3.5rem" }}>
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
              Get In Touch
            </span>
          </div>
          <h2
            style={{
              fontWeight: 900,
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "#FFFFFF",
              margin: 0,
              lineHeight: 1,
              letterSpacing: "-0.02em",
            }}
          >
            REQUEST A QUOTE
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.6fr",
            gap: "4rem",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Left: contact info */}
          <div>
            <p
              style={{
                color: "#A3A3A3",
                fontSize: "0.95rem",
                lineHeight: 1.75,
                marginBottom: "2.5rem",
              }}
            >
              Ready to start your project? Fill out the form and we&apos;ll get
              back to you within one business day with a detailed estimate.
            </p>

            {[
              {
                icon: Phone,
                label: "Phone",
                value: "(555) 867-5309",
                href: "tel:5558675309",
              },
              {
                icon: Mail,
                label: "Email",
                value: "info@bigbadwolfelectric.com",
                href: "mailto:info@bigbadwolfelectric.com",
              },
              {
                icon: MapPin,
                label: "Service Area",
                value: "Phoenix Metro Area, AZ",
                href: null,
              },
            ].map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "flex-start",
                  marginBottom: "1.5rem",
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
                  <Icon size={16} color="#3B82F6" strokeWidth={1.75} />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      letterSpacing: "0.15em",
                      color: "#A3A3A3",
                      textTransform: "uppercase",
                      marginBottom: "0.2rem",
                    }}
                  >
                    {label}
                  </div>
                  {href ? (
                    <a
                      href={href}
                      style={{
                        color: "#FFFFFF",
                        fontSize: "0.9rem",
                        fontWeight: 500,
                        textDecoration: "none",
                        transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#3B82F6")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                    >
                      {value}
                    </a>
                  ) : (
                    <span
                      style={{ color: "#FFFFFF", fontSize: "0.9rem", fontWeight: 500 }}
                    >
                      {value}
                    </span>
                  )}
                </div>
              </div>
            ))}

            {/* Trust badges */}
            <div
              style={{
                marginTop: "2rem",
                padding: "1.5rem",
                backgroundColor: "rgba(59,130,246,0.06)",
                border: "1px solid rgba(59,130,246,0.2)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: "0.75rem",
                }}
              >
                <Zap size={14} color="#3B82F6" strokeWidth={2.5} />
                <span
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    color: "#3B82F6",
                    textTransform: "uppercase",
                  }}
                >
                  Credentials
                </span>
              </div>
              {["Fully Licensed & Insured", "A+ BBB Certified", "Lic# 67363"].map(
                (item) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <CheckCircle size={13} color="#3B82F6" strokeWidth={2} />
                    <span style={{ color: "#FFFFFF", fontSize: "0.82rem" }}>
                      {item}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Right: form */}
          <div>
            {submitted ? (
              <div
                style={{
                  backgroundColor: "#2F2F2F",
                  border: "1px solid rgba(59,130,246,0.4)",
                  padding: "3rem",
                  textAlign: "center",
                }}
              >
                <CheckCircle
                  size={48}
                  color="#3B82F6"
                  strokeWidth={1.5}
                  style={{ margin: "0 auto 1.5rem" }}
                />
                <h3
                  style={{
                    fontWeight: 900,
                    fontSize: "1.5rem",
                    color: "#FFFFFF",
                    marginBottom: "0.75rem",
                  }}
                >
                  Message Received
                </h3>
                <p style={{ color: "#A3A3A3", fontSize: "0.9rem", lineHeight: 1.6 }}>
                  We&apos;ll review your project details and follow up within one
                  business day. Thank you for choosing Big Bad Wolf Electric.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                  }}
                >
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.65rem",
                        fontWeight: 700,
                        letterSpacing: "0.15em",
                        color: "#A3A3A3",
                        textTransform: "uppercase",
                        marginBottom: "0.4rem",
                      }}
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Smith"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) =>
                        (e.currentTarget.style.borderColor = "rgba(59,130,246,0.6)")
                      }
                      onBlur={(e) =>
                        (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")
                      }
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.65rem",
                        fontWeight: 700,
                        letterSpacing: "0.15em",
                        color: "#A3A3A3",
                        textTransform: "uppercase",
                        marginBottom: "0.4rem",
                      }}
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="(555) 000-0000"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) =>
                        (e.currentTarget.style.borderColor = "rgba(59,130,246,0.6)")
                      }
                      onBlur={(e) =>
                        (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")
                      }
                    />
                  </div>
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      letterSpacing: "0.15em",
                      color: "#A3A3A3",
                      textTransform: "uppercase",
                      marginBottom: "0.4rem",
                    }}
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@company.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor = "rgba(59,130,246,0.6)")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")
                    }
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      letterSpacing: "0.15em",
                      color: "#A3A3A3",
                      textTransform: "uppercase",
                      marginBottom: "0.4rem",
                    }}
                  >
                    Project Type
                  </label>
                  <select
                    value={form.projectType}
                    onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                    style={{
                      ...inputStyle,
                      appearance: "none",
                      cursor: "pointer",
                    }}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor = "rgba(59,130,246,0.6)")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")
                    }
                  >
                    <option value="" style={{ backgroundColor: "#2F2F2F" }}>
                      Select a project type...
                    </option>
                    <option value="residential" style={{ backgroundColor: "#2F2F2F" }}>
                      Residential New Construction / Remodel
                    </option>
                    <option value="commercial" style={{ backgroundColor: "#2F2F2F" }}>
                      Commercial New Construction / Remodel
                    </option>
                    <option value="led" style={{ backgroundColor: "#2F2F2F" }}>
                      LED Commercial Upgrade
                    </option>
                    <option value="parking" style={{ backgroundColor: "#2F2F2F" }}>
                      Parking Lot Lighting
                    </option>
                    <option value="service" style={{ backgroundColor: "#2F2F2F" }}>
                      Service / Repair Work
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      letterSpacing: "0.15em",
                      color: "#A3A3A3",
                      textTransform: "uppercase",
                      marginBottom: "0.4rem",
                    }}
                  >
                    Project Details *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Describe your project, location, timeline, and any specific requirements..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{
                      ...inputStyle,
                      resize: "vertical",
                      minHeight: "120px",
                    }}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor = "rgba(59,130,246,0.6)")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")
                    }
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.6rem",
                    backgroundColor: "#3B82F6",
                    color: "#FFFFFF",
                    border: "none",
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    padding: "1rem 2rem",
                    cursor: "pointer",
                    fontFamily: "inherit",
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
                  SEND REQUEST
                  <Send size={15} strokeWidth={2} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}

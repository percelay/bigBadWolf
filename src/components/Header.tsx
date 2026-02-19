"use client";

import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        backgroundColor: scrolled ? "rgba(26,26,26,0.92)" : "rgba(26,26,26,0.7)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        transition: "background-color 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1.5rem",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            textDecoration: "none",
          }}
        >
          <Image
            src="/wolfy.avif"
            alt="Big Bad Wolf Electric"
            width={42}
            height={42}
            style={{ objectFit: "contain" }}
            priority
          />
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
              BIG BAD WOLF
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

        {/* Desktop Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "0.25rem" }} className="hidden-mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                color: "#A3A3A3",
                textDecoration: "none",
                fontSize: "0.875rem",
                fontWeight: 500,
                letterSpacing: "0.05em",
                padding: "0.5rem 1rem",
                borderRadius: "2px",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "#FFFFFF")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "#A3A3A3")
              }
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            style={{
              marginLeft: "0.5rem",
              backgroundColor: "#3B82F6",
              color: "#FFFFFF",
              textDecoration: "none",
              fontSize: "0.875rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              padding: "0.6rem 1.25rem",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.2s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#2563EB")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#3B82F6")
            }
          >
            GET A QUOTE
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            color: "#FFFFFF",
            cursor: "pointer",
            padding: "0.5rem",
            display: "none",
          }}
          className="show-mobile"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      <div
        style={{
          maxHeight: menuOpen ? "400px" : "0",
          overflow: "hidden",
          transition: "max-height 0.35s ease",
          backgroundColor: "rgba(26,26,26,0.98)",
          borderBottom: menuOpen ? "1px solid rgba(255,255,255,0.08)" : "none",
        }}
      >
        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "1rem 1.5rem 1.5rem",
            gap: "0.25rem",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: "#A3A3A3",
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: 500,
                padding: "0.75rem 0",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                transition: "color 0.2s ease",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{
              marginTop: "1rem",
              backgroundColor: "#3B82F6",
              color: "#FFFFFF",
              textDecoration: "none",
              fontSize: "0.875rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              padding: "0.85rem 1.5rem",
              textAlign: "center",
            }}
          >
            GET A QUOTE
          </a>
        </nav>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
          .hidden-mobile { display: flex !important; }
        }
      `}</style>
    </header>
  );
}

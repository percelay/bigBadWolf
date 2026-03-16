"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";

const images = [
  { src: "/images/IMG_0750.JPEG", alt: "Commercial electrical work" },
  { src: "/images/IMG_1513.jpeg", alt: "Electrical installation" },
  { src: "/images/IMG_2110.jpeg", alt: "Job site progress" },
  { src: "/images/IMG_2285.jpeg", alt: "Panel and wiring work" },
  { src: "/images/IMG_2287.jpeg", alt: "Commercial buildout" },
  { src: "/images/IMG_2597.jpeg", alt: "Electrical service work" },
  { src: "/images/IMG_2985.jpeg", alt: "Project in progress" },
  { src: "/images/IMG_3009.jpeg", alt: "On-site electrical work" },
  { src: "/images/IMG_3010.jpeg", alt: "Commercial electrical installation" },
  { src: "/images/IMG_3012.jpeg", alt: "Panel installation" },
  { src: "/images/IMG_3017.jpeg", alt: "Electrical room buildout" },
  { src: "/images/IMG_3090.jpeg", alt: "Job site detail" },
  { src: "/images/IMG_3102.jpeg", alt: "Completed installation" },
  { src: "/images/IMG_5076.jpeg", alt: "Electrical project" },
  { src: "/images/IMG_5997.JPEG", alt: "Commercial project" },
  { src: "/images/IMG_6822.jpeg", alt: "Service work" },
  { src: "/images/image.avif", alt: "Completed project" },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);

  const goNext = () => {
    if (lightbox !== null) setLightbox((lightbox + 1) % images.length);
  };
  const goPrev = () => {
    if (lightbox !== null) setLightbox((lightbox - 1 + images.length) % images.length);
  };

  return (
    <section
      id="gallery"
      style={{
        backgroundColor: "#1A1A1A",
        padding: "6rem 1.5rem",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "2rem",
            marginBottom: "3.5rem",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "1rem",
              }}
            >
              <div style={{ width: "24px", height: "2px", backgroundColor: "#3B82F6" }} />
              <span
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  color: "#3B82F6",
                  textTransform: "uppercase",
                }}
              >
                From The Field
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
              GALLERY
            </h2>
          </div>
          <p
            style={{
              color: "#A3A3A3",
              fontSize: "0.95rem",
              maxWidth: "360px",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            Real photos from our job sites — commercial buildouts, panel installs, and precision electrical work.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="gallery-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "3px" }}>
          {images.map((img, index) => {
            const isWide = index === 0 || index === 7 || index === 13;
            return (
              <div
                key={img.src}
                className={isWide ? "gallery-wide" : undefined}
                onClick={() => openLightbox(index)}
                style={{
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                  gridColumn: isWide ? "span 2" : "span 1",
                  height: isWide ? "320px" : "260px",
                }}
                onMouseEnter={(e) => {
                  const overlay = e.currentTarget.querySelector("[data-overlay]") as HTMLElement;
                  if (overlay) overlay.style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  const overlay = e.currentTarget.querySelector("[data-overlay]") as HTMLElement;
                  if (overlay) overlay.style.opacity = "0";
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes={isWide ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
                  style={{ objectFit: "cover", transition: "transform 0.35s ease" }}
                />
                {/* Hover overlay */}
                <div
                  data-overlay="true"
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "rgba(0,0,0,0.45)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: 0,
                    transition: "opacity 0.25s ease",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      backgroundColor: "rgba(59,130,246,0.85)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Camera size={18} color="#FFFFFF" strokeWidth={2} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) closeLightbox();
          }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            backgroundColor: "rgba(0,0,0,0.92)",
            backdropFilter: "blur(8px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            style={{
              position: "absolute",
              top: "1.5rem",
              right: "1.5rem",
              background: "none",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#FFFFFF",
              cursor: "pointer",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 10,
              transition: "border-color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#3B82F6")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)")}
          >
            <X size={18} strokeWidth={2} />
          </button>

          {/* Counter */}
          <div
            style={{
              position: "absolute",
              top: "1.75rem",
              left: "1.5rem",
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              color: "#A3A3A3",
              zIndex: 10,
            }}
          >
            {lightbox + 1} / {images.length}
          </div>

          {/* Prev */}
          <button
            onClick={goPrev}
            style={{
              position: "absolute",
              left: "1rem",
              top: "50%",
              transform: "translateY(-50%)",
              background: "none",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "#FFFFFF",
              cursor: "pointer",
              width: "44px",
              height: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 10,
              transition: "border-color 0.2s ease, background-color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#3B82F6";
              e.currentTarget.style.backgroundColor = "rgba(59,130,246,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            <ChevronLeft size={20} strokeWidth={2} />
          </button>

          {/* Next */}
          <button
            onClick={goNext}
            style={{
              position: "absolute",
              right: "1rem",
              top: "50%",
              transform: "translateY(-50%)",
              background: "none",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "#FFFFFF",
              cursor: "pointer",
              width: "44px",
              height: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 10,
              transition: "border-color 0.2s ease, background-color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#3B82F6";
              e.currentTarget.style.backgroundColor = "rgba(59,130,246,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            <ChevronRight size={20} strokeWidth={2} />
          </button>

          {/* Image */}
          <div
            style={{
              position: "relative",
              width: "85vw",
              height: "80vh",
              maxWidth: "1200px",
            }}
          >
            <Image
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              fill
              sizes="85vw"
              style={{ objectFit: "contain" }}
              quality={90}
            />
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          .gallery-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .gallery-wide {
            grid-column: span 2 !important;
            height: 240px !important;
          }
        }
        @media (max-width: 480px) {
          .gallery-grid {
            grid-template-columns: 1fr !important;
          }
          .gallery-wide {
            grid-column: span 1 !important;
            height: 220px !important;
          }
        }
      `}</style>
    </section>
  );
}

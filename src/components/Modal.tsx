"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ open, onClose, children }: ModalProps) {
  // Lock body scroll while open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 100,
          backgroundColor: "rgba(0,0,0,0.82)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Panel */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 101,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1.5rem",
          pointerEvents: open ? "auto" : "none",
        }}
      >
        <div
          style={{
            backgroundColor: "#1e1e1e",
            border: "1px solid rgba(255,255,255,0.1)",
            width: "100%",
            maxWidth: "860px",
            maxHeight: "90vh",
            overflowY: "auto",
            position: "relative",
            opacity: open ? 1 : 0,
            transform: open ? "translateY(0) scale(1)" : "translateY(20px) scale(0.97)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: "1rem",
              right: "1rem",
              zIndex: 10,
              background: "rgba(0,0,0,0.5)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "#FFFFFF",
              width: "36px",
              height: "36px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "background-color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(59,130,246,0.3)")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.5)")}
            aria-label="Close"
          >
            <X size={16} strokeWidth={2} />
          </button>

          {children}
        </div>
      </div>
    </>
  );
}

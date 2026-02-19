"use client";

export default function WolfLogo({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Big B Wolf Electric logo"
    >
      {/* Wolf head silhouette */}
      <path
        d="M10 60 L10 30 L20 10 L30 22 L40 18 L50 22 L60 10 L70 30 L70 60 L58 60 L55 50 L40 54 L25 50 L22 60 Z"
        fill="white"
        opacity="0.92"
      />
      {/* Ears */}
      <path d="M20 10 L14 2 L26 16 Z" fill="white" opacity="0.92" />
      <path d="M60 10 L66 2 L54 16 Z" fill="white" opacity="0.92" />
      {/* Snout */}
      <path
        d="M32 44 Q40 50 48 44 L46 38 Q40 42 34 38 Z"
        fill="#1A1A1A"
        opacity="0.5"
      />
      {/* Left eye — dark */}
      <ellipse cx="28" cy="34" rx="5" ry="5.5" fill="#1A1A1A" />
      {/* Right eye — glowing blue */}
      <ellipse cx="52" cy="34" rx="5" ry="5.5" fill="#1A1A1A" />
      <ellipse cx="52" cy="34" rx="3.5" ry="4" fill="#3B82F6" />
      {/* Blue eye glow */}
      <ellipse cx="52" cy="34" rx="5" ry="5.5" fill="#3B82F6" opacity="0.25" />
      <circle cx="53.5" cy="32.5" r="1" fill="white" opacity="0.8" />
    </svg>
  );
}

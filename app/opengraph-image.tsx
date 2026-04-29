import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "BusjeDirect — Meubels & witgoed vervoeren";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#E31B1B",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Logo icon — SVG paths inline */}
        <svg
          width="120"
          height="90"
          viewBox="0 0 145 109"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.4375 90H13.0091C7.70442 90 3.86868 84.9312 5.31011 79.8262L24.7925 10.8262C25.7655 7.37984 28.9104 5 32.4915 5H101.938C115.745 5 126.938 16.1929 126.938 30C126.938 43.8071 115.745 55 101.938 55H95.9375C90.9669 55 86.9375 50.9706 86.9375 46C86.9375 41.0294 90.9669 37 95.9375 37H112.938C127.573 37 139.438 48.8645 139.438 63.5C139.438 78.1355 127.573 90 112.938 90H110.938M51.4375 90H86.9375"
            stroke="white"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <circle cx="36.4375" cy="89.5" r="14.5" stroke="white" strokeWidth="10" />
          <circle cx="101.438" cy="89.5" r="14.5" stroke="white" strokeWidth="10" />
        </svg>

        {/* Brand name */}
        <div
          style={{
            display: "flex",
            marginTop: 32,
            fontSize: 72,
            fontWeight: 800,
            letterSpacing: "-2px",
            color: "white",
          }}
        >
          BusjeDirect
        </div>

        {/* Tagline */}
        <div
          style={{
            marginTop: 16,
            fontSize: 28,
            color: "rgba(255,255,255,0.75)",
            fontWeight: 400,
          }}
        >
          Meubels &amp; witgoed vervoeren door heel Nederland
        </div>
      </div>
    ),
    { ...size }
  );
}

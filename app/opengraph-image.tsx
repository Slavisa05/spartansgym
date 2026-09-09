import { ImageResponse } from "next/og";
import { SITE } from "@/data/site";

export const alt = "Spartans Gym — teretane u Ubu i Lajkovcu";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0A0A0A",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(255,85,0,0.25), transparent 55%)",
          color: "#F0F0F0",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 34,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#FF5500",
            fontWeight: 700,
          }}
        >
          Spartans Gym
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 76,
            fontWeight: 800,
            lineHeight: 1.05,
            maxWidth: 900,
          }}
        >
          Teretane u Ubu i Lajkovcu
        </div>
        <div style={{ marginTop: 28, fontSize: 32, color: "#a1a1aa", maxWidth: 820 }}>
          Personalni i vođeni treninzi uz stručan tim trenera
        </div>
        <div style={{ marginTop: 48, fontSize: 26, color: "#a1a1aa" }}>
          {SITE.url.replace("https://", "")}
        </div>
      </div>
    ),
    { ...size },
  );
}

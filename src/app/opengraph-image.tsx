import { ImageResponse } from "next/og";
import { site } from "@/lib/content";

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
          background:
            "linear-gradient(135deg, #1A0B1A 0%, #0B0A1A 55%, #0D0D0D 100%)",
          color: "#EDEFF4",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 20,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#D4AF37",
            marginBottom: 28,
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              border: "2px solid #D4AF37",
              transform: "rotate(45deg)",
            }}
          />
          {site.role}
        </div>
        <div style={{ display: "flex", fontSize: 76, lineHeight: 1.1 }}>
          Where imagination
        </div>
        <div style={{ display: "flex", fontSize: 76, lineHeight: 1.1, color: "#D4AF37", fontStyle: "italic" }}>
          becomes architecture.
        </div>
        <div style={{ display: "flex", fontSize: 28, marginTop: 36, color: "#C9CFDA" }}>
          {site.name}
        </div>
      </div>
    ),
    { ...size }
  );
}

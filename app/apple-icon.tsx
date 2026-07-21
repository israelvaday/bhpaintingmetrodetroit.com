import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(180deg, #0B0E12 0%, #121820 100%)",
        }}
      >
        <div
          style={{
            width: 148,
            height: 148,
            borderRadius: 32,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #E9D08A 0%, #C9A24A 55%, #8A6A1F 100%)",
            color: "#0B0E12",
            boxShadow: "0 18px 40px rgba(0,0,0,0.35)",
          }}
        >
          <div style={{ display: "flex", fontSize: 58, fontWeight: 900, letterSpacing: -4, lineHeight: 1 }}>BH</div>
          <div style={{ display: "flex", marginTop: 8, fontSize: 13, fontWeight: 800, letterSpacing: 2 }}>
            PAINTING
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}

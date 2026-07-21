import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0B0E12",
        }}
      >
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: 7,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #E9D08A 0%, #C9A24A 55%, #8A6A1F 100%)",
            color: "#0B0E12",
            fontSize: 11,
            fontWeight: 900,
            letterSpacing: -0.5,
          }}
        >
          BH
        </div>
      </div>
    ),
    { ...size }
  );
}

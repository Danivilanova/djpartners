/**
 * D&J PARTNERS text lockup, as used in the Tinta design (header + calendar
 * card). Kept as a tiny component so it can be swapped for the real image logo
 * (`/uploads/ad367c9b-b41f-46b7-a483-c58506105dbe.webp`) in one place later.
 */
export default function LpLogo({ size = "header" }: { size?: "header" | "small" }) {
  const big = size === "header";
  return (
    <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
      <span
        style={{
          fontSize: big ? 26 : 17,
          fontWeight: 800,
          letterSpacing: "-0.5px",
        }}
      >
        D&amp;J
      </span>
      <span
        style={{
          fontSize: big ? 10 : 7,
          fontWeight: 600,
          letterSpacing: big ? "4.2px" : "2.8px",
          marginTop: big ? 3 : 2,
        }}
      >
        PARTNERS
      </span>
    </div>
  );
}

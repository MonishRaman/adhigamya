import { createFileRoute } from "@tanstack/react-router";
import AdhigamyaLanding from "@/components/AdhigamyaLanding";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ADHIGAMYA 2026 — AI Tech Conclave | DSATM" },
      {
        name: "description",
        content:
          "ADHIGAMYA — AI Tech Conclave 2026 by Dept of CSE × CSI Student Branch, DSATM. 4–5 May 2026. 5 events, 20-hour hackathon, ₹1,00,000+ prize pool. Register now.",
      },
      { property: "og:title", content: "ADHIGAMYA 2026 — AI Tech Conclave" },
      {
        property: "og:description",
        content:
          "Two days. Five flagship events. ₹1L+ prize pool. The AI Tech Conclave at DSATM — May 4 & 5, 2026.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <AdhigamyaLanding />;
}

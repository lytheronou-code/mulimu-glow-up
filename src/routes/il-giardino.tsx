import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/il-giardino")({
  beforeLoad: () => {
    throw redirect({
      to: "/rooms/$slug",
      params: { slug: "il-giardino" },
      statusCode: 301,
    });
  },
});

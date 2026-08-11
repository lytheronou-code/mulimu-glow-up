import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/la-mansarda")({
  beforeLoad: () => {
    throw redirect({
      to: "/rooms/$slug",
      params: { slug: "la-mansarda" },
      statusCode: 301,
    });
  },
});

import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { Footer } from "@/components/Footer";
import { useI18n } from "@/i18n";
import { ROOMS } from "@/data/rooms";
import { SOCIAL_IMAGE_URL, absoluteUrl } from "@/data/site";

import roomsCover from "@/assets/rooms-cover.webp";

export const Route = createFileRoute("/rooms/")({
  component: RoomsPage,
  head: () => ({
    meta: [
      { title: "Camere — Mulimù, Oltrepò Pavese" },
      {
        name: "description",
        content:
          "Mulimù dispone di cinque camere con bagno privato. Scopri in dettaglio La Mansarda con area relax e Il Giardino con balconcino in pietra.",
      },
      { property: "og:title", content: "Le camere di Mulimù" },
      {
        property: "og:description",
        content:
          "Cinque camere con bagno privato nell'Oltrepò Pavese; fotografie e dettagli di La Mansarda e Il Giardino.",
      },
      { property: "og:image", content: SOCIAL_IMAGE_URL },
      { property: "og:url", content: absoluteUrl("/rooms") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/rooms") }],
  }),
});

function RoomsPage() {
  const { t, locale } = useI18n();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative flex min-h-[70svh] items-end overflow-hidden">
        <img
          src={roomsCover}
          alt="Interno di Mulimù con vista sulle colline"
          width={1247}
          height={1440}
          fetchPriority="high"
          className="animate-kenburns absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/40" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background/95 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 lg:px-10 lg:pb-24">
          <p className="eyebrow animate-rise text-primary-foreground/80">{t("rooms.eyebrow")}</p>
          <span className="rule-accent animate-rise mt-5" />
          <h1 className="animate-rise mt-5 font-display text-[clamp(2.8rem,8vw,6rem)] leading-[0.98] text-primary-foreground">
            {t("nav.rooms")}
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-32">
        <Reveal>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.05]">
            {t("rooms.title")}
          </h2>
          <span className="rule-accent mt-6" />
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {t("rooms.body")}
          </p>
        </Reveal>

        <Reveal className="mt-14 grid gap-8 border-y border-border py-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <div>
            <p className="font-display text-6xl leading-none text-accent">5</p>
            <p className="eyebrow mt-3">{t("rooms.totalLabel")}</p>
          </div>
          <div>
            <h2 className="font-display text-3xl leading-tight">{t("rooms.inventoryTitle")}</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{t("rooms.inventoryBody")}</p>
          </div>
        </Reveal>

        <div className="mt-20 space-y-24 lg:space-y-32">
          {ROOMS.map((room, i) => (
            <Reveal
              as="article"
              key={room.slug}
              className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-20 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Link
                to="/rooms/$slug"
                params={{ slug: room.slug }}
                className="frame-media group block"
              >
                <img
                  src={room.cover}
                  alt={room.name}
                  loading="lazy"
                  className="aspect-4/3 w-full object-cover"
                />
              </Link>
              <div>
                <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] leading-[1.05]">
                  {room.name}
                </h2>
                <p className="eyebrow mt-4">{room.content[locale].tagline}</p>
                <p className="mt-6 leading-relaxed text-muted-foreground">
                  {room.content[locale].body[0]}
                </p>
                <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-muted-foreground">
                  {room.content[locale].features.slice(0, 6).map((f) => (
                    <li key={f} className="border-b border-border pb-2">
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/rooms/$slug" params={{ slug: room.slug }} className="btn-outline mt-10">
                  {t("rooms.detail")} <ArrowRight className="size-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { Footer } from "@/components/Footer";
import { useI18n } from "@/i18n";
import { ROOMS, getRoom } from "@/data/rooms";
import { BOOKING_URL, absoluteUrl } from "@/data/site";

export const Route = createFileRoute("/rooms/$slug")({
  loader: ({ params }) => {
    const room = getRoom(params.slug);
    if (!room) throw notFound();
    return { name: room.name };
  },
  component: RoomPage,
  head: ({ params, loaderData }) => {
    const name = loaderData?.name ?? "Camera";
    return {
      meta: [
        { title: `${name} — Mulimù, Oltrepò Pavese` },
        {
          name: "description",
          content: `${name}: camera con bagno privato, Wi-Fi in fibra ottica e vista sulle colline dell'Oltrepò Pavese, nella guest house Mulimù.`,
        },
        { property: "og:title", content: `${name} — Mulimù` },
        {
          property: "og:description",
          content: `Scopri ${name}, una delle due camere della guest house Mulimù nell'Oltrepò Pavese.`,
        },
        { property: "og:type", content: "article" },
        { property: "og:image", content: absoluteUrl("/og-mulimu.webp") },
        { property: "og:url", content: absoluteUrl(`/rooms/${params.slug}`) },
      ],
      links: [{ rel: "canonical", href: absoluteUrl(`/rooms/${params.slug}`) }],
    };
  },
});

function RoomPage() {
  const { slug } = Route.useParams();
  const { t, locale } = useI18n();
  const room = getRoom(slug)!;
  const other = ROOMS.find((r) => r.slug !== slug)!;
  const content = room.content[locale];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative flex min-h-[75svh] items-end overflow-hidden">
        <img
          src={room.cover}
          alt={room.name}
          fetchPriority="high"
          className="animate-kenburns absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/40" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background/95 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 lg:px-10 lg:pb-24">
          <Link
            to="/rooms"
            className="link-underline inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.22em] text-primary-foreground/75"
          >
            <ArrowLeft className="size-3.5" /> {t("rooms.back")}
          </Link>
          <h1 className="animate-rise mt-6 font-display text-[clamp(2.8rem,8vw,6rem)] leading-[0.98] text-primary-foreground">
            {room.name}
          </h1>
          <p className="animate-rise mt-4 max-w-xl text-primary-foreground/85">{content.tagline}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr] lg:gap-24">
          <Reveal>
            {content.body.map((p) => (
              <p key={p} className="mb-5 text-lg leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
            <a href={BOOKING_URL} target="_blank" rel="noreferrer" className="btn-solid mt-6">
              {t("rooms.book")} <ArrowRight aria-hidden="true" className="size-4" />
            </a>
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">{t("rooms.features")}</p>
            <span className="rule-accent mt-5" />
            <ul className="mt-6 divide-y divide-border border-t border-border">
              {content.features.map((f) => (
                <li key={f} className="py-3 text-sm">
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="eyebrow">{t("rooms.gallery")}</p>
          <span className="rule-accent mt-5" />
          <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
            {room.gallery.map((src, i) => (
              <Reveal key={src} delay={(i % 3) * 100} className="frame-media mb-5 block">
                <img
                  src={src}
                  alt={`${room.name} — ${i + 1}`}
                  loading="lazy"
                  className="w-full object-cover"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <p className="eyebrow">{t("rooms.other")}</p>
        <Link
          to="/rooms/$slug"
          params={{ slug: other.slug }}
          className="group mt-8 grid items-center gap-8 md:grid-cols-2"
        >
          <div className="frame-media">
            <img
              src={other.cover}
              alt={other.name}
              loading="lazy"
              className="aspect-4/3 w-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)]">{other.name}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{other.content[locale].tagline}</p>
            <span className="link-underline mt-6 inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.22em] text-accent">
              {t("rooms.detail")} <ArrowRight className="size-4" />
            </span>
          </div>
        </Link>
      </section>

      <Footer />
    </div>
  );
}

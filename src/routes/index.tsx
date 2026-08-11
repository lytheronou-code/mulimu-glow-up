import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Grape, Mountain, Flower2 } from "lucide-react";

import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { Footer } from "@/components/Footer";
import { useI18n } from "@/i18n";
import { ROOMS } from "@/data/rooms";
import {
  ADDRESS,
  BOOKING_URL,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_HREF,
  absoluteUrl,
} from "@/data/site";

import hero from "@/assets/hero.webp";
import house from "@/assets/house.webp";
import panorama from "@/assets/struttura-6.webp";
import degustazioni from "@/assets/degustazioni.webp";
import trekking from "@/assets/trekking.webp";
import massaggi from "@/assets/massaggi.webp";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Mulimù — Guest house tra i vigneti dell'Oltrepò Pavese" },
      {
        name: "description",
        content:
          "Guest house a gestione familiare nell'Oltrepò Pavese: cinque camere con bagno privato, vista sulle colline, degustazioni, trekking e massaggi su richiesta.",
      },
      { property: "og:title", content: "Mulimù — Guest house nell'Oltrepò Pavese" },
      {
        property: "og:description",
        content:
          "Una villa storica con cinque camere, vista sui vigneti e esperienze su misura nelle colline dell'Oltrepò Pavese.",
      },
      { property: "og:image", content: absoluteUrl("/og-mulimu.jpg") },
      { property: "og:url", content: absoluteUrl("/") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/") }],
  }),
});

function Home() {
  const { t, locale } = useI18n();

  const services = [
    { img: degustazioni, key: "tasting", Icon: Grape },
    { img: trekking, key: "trek", Icon: Mountain },
    { img: massaggi, key: "massage", Icon: Flower2 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden">
        <img
          src={hero}
          alt="Le colline e i vigneti dell'Oltrepò Pavese visti da Mulimù"
          fetchPriority="high"
          className="animate-kenburns absolute inset-0 size-full object-cover"
          width={2000}
          height={1500}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/45" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background/95 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 lg:px-10 lg:pb-28">
          <p className="eyebrow animate-rise text-primary-foreground/80">{t("hero.eyebrow")}</p>
          <span className="rule-accent animate-rise mt-5" />
          <h1 className="animate-rise mt-6 max-w-5xl font-display text-[clamp(3.2rem,8vw,7rem)] leading-[0.94] tracking-[0.01em] text-primary-foreground">
            {t("hero.title")}
          </h1>
          <p className="animate-rise mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/85">
            {t("hero.subtitle")}
          </p>
          <div className="animate-rise mt-10 flex flex-wrap items-center gap-7">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 border border-primary-foreground/50 px-8 py-4 text-[0.72rem] uppercase tracking-[0.22em] text-primary-foreground transition-all duration-500 hover:-translate-y-0.5 hover:bg-primary-foreground hover:text-foreground"
            >
              {t("hero.cta")} <ArrowRight aria-hidden="true" className="size-4" />
            </a>
            <Link
              to="/rooms"
              className="link-underline text-[0.72rem] uppercase tracking-[0.22em] text-primary-foreground"
            >
              {t("rooms.cta")}
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section id="storia" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
          <Reveal className="frame-media relative">
            <img
              src={house}
              alt="La colazione nel giardino di Mulimù insieme a Pongo"
              width={1080}
              height={1416}
              loading="lazy"
              className="aspect-4/5 w-full object-cover"
            />
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">{t("intro.eyebrow")}</p>
            <span className="rule-accent mt-5" />
            <h2 className="mt-5 font-display text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[1.08]">
              {t("intro.title")}
            </h2>
            <p className="mt-7 leading-relaxed text-muted-foreground">{t("intro.body1")}</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">{t("intro.body2")}</p>
            <Link to="/about" className="btn-outline mt-9">
              {t("nav.story")} <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {(["1", "2", "3"] as const).map((n) => (
                <div key={n}>
                  <dt className="eyebrow">{t(`intro.stat${n}`)}</dt>
                  <dd className="mt-2 font-display text-xl leading-tight">
                    {t(`intro.stat${n}v`)}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Rooms */}
      <section id="camere" className="bg-secondary/50 py-24 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal className="max-w-2xl">
              <p className="eyebrow">{t("rooms.eyebrow")}</p>
              <span className="rule-accent mt-5" />
              <h2 className="mt-5 font-display text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[1.08]">
                {t("rooms.title")}
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">{t("rooms.body")}</p>
            </Reveal>
            <Link
              to="/rooms"
              className="link-underline text-[0.72rem] uppercase tracking-[0.22em] text-accent"
            >
              {t("rooms.cta")}
            </Link>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-2">
            {ROOMS.map((room, i) => (
              <Reveal
                as={Link}
                delay={i * 120}
                key={room.slug}
                to="/rooms/$slug"
                params={{ slug: room.slug }}
                className="group block"
              >
                <div className="frame-media">
                  <img
                    src={room.cover}
                    alt={room.name}
                    loading="lazy"
                    className="aspect-3/4 w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                </div>
                <div className="mt-6 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-3xl">{room.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {room.content[locale].tagline}
                    </p>
                  </div>
                  <ArrowRight
                    aria-hidden="true"
                    className="mt-3 size-5 shrink-0 text-accent transition-transform group-hover:translate-x-1"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section id="esperienze" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">{t("services.eyebrow")}</p>
          <span className="rule-accent mt-5" />
          <h2 className="mt-5 font-display text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[1.08]">
            {t("services.title")}
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">{t("services.body")}</p>
        </Reveal>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {services.map(({ img, key, Icon }, i) => (
            <Reveal as="article" delay={i * 120} key={key}>
              <div className="frame-media">
                <img
                  src={img}
                  alt={t(`services.${key}.title`)}
                  loading="lazy"
                  className="aspect-4/3 w-full object-cover"
                />
              </div>
              <div className="mt-6 flex items-center gap-3">
                <Icon aria-hidden="true" className="size-4 text-accent" />
                <h3 className="text-[0.78rem] uppercase tracking-[0.22em]">
                  {t(`services.${key}.title`)}
                </h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {t(`services.${key}.body`)}
              </p>
            </Reveal>
          ))}
        </div>

        <a href={`mailto:${CONTACT_EMAIL}`} className="btn-outline mt-14">
          {t("services.cta")} <ArrowRight aria-hidden="true" className="size-4" />
        </a>
      </section>

      {/* Place */}
      <section id="luogo" className="relative overflow-hidden">
        <img
          src={panorama}
          alt="Panorama delle colline dell'Oltrepò Pavese"
          width={1999}
          height={1133}
          loading="lazy"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-40">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-primary-foreground/70">{t("place.eyebrow")}</p>
            <span className="rule-accent mt-5" />
            <h2 className="mt-5 font-display text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[1.08] text-primary-foreground">
              {t("place.title")}
            </h2>
            <p className="mt-6 leading-relaxed text-primary-foreground/85">{t("place.body")}</p>
          </Reveal>
          <div className="mt-16 grid gap-10 border-t border-primary-foreground/20 pt-10 md:grid-cols-3">
            {["p1", "p2", "p3"].map((p, i) => (
              <Reveal delay={i * 120} key={p}>
                <h3 className="font-display text-2xl text-primary-foreground">
                  {t(`place.${p}.title`)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-primary-foreground/75">
                  {t(`place.${p}.body`)}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12">
            <Link
              to="/dove-siamo"
              className="inline-flex items-center gap-3 border border-primary-foreground/40 px-7 py-3.5 text-[0.72rem] uppercase tracking-[0.22em] text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-foreground"
            >
              {t("nav.directions")} <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Contact */}
      <section id="contatti" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <p className="eyebrow">{t("contact.eyebrow")}</p>
            <span className="rule-accent mt-5" />
            <h2 className="mt-5 font-display text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[1.08]">
              {t("contact.title")}
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
              {t("contact.body")}
            </p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="btn-solid mt-10">
              {t("contact.write")} <ArrowRight aria-hidden="true" className="size-4" />
            </a>
          </Reveal>
          <Reveal as="dl" delay={120} className="space-y-8 lg:border-l lg:border-border lg:pl-16">
            <div>
              <dt className="eyebrow">{t("contact.email")}</dt>
              <dd className="mt-2 font-display text-2xl">
                <a href={`mailto:${CONTACT_EMAIL}`} className="link-underline">
                  {CONTACT_EMAIL}
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Telefono</dt>
              <dd className="mt-2 font-display text-2xl">
                <a href={`tel:${CONTACT_PHONE_HREF}`} className="link-underline">
                  {CONTACT_PHONE}
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow">{t("contact.where")}</dt>
              <dd className="mt-2 font-display text-2xl">
                {ADDRESS.street}
                <br />
                {ADDRESS.locality}
              </dd>
            </div>
            <div>
              <dt className="eyebrow">{t("contact.checkin")}</dt>
              <dd className="mt-2 text-sm text-muted-foreground">{t("contact.checkinValue")}</dd>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

import panorama from "@/assets/struttura-6.webp";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import {
  ADDRESS,
  BOOKING_URL,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_HREF,
  MAP_URL,
  absoluteUrl,
} from "@/data/site";
import { useI18n } from "@/i18n";

export const Route = createFileRoute("/dove-siamo")({
  component: DirectionsPage,
  head: () => ({
    meta: [
      { title: "Come raggiungerci — Mulimù, Montecalvo Versiggia" },
      {
        name: "description",
        content:
          "Indirizzo, contatti e indicazioni per raggiungere Mulimù a Montecalvo Versiggia, tra le colline dell'Oltrepò Pavese.",
      },
      { property: "og:title", content: "Come raggiungere Mulimù" },
      { property: "og:image", content: absoluteUrl("/og-mulimu.webp") },
      { property: "og:url", content: absoluteUrl("/dove-siamo") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/dove-siamo") }],
  }),
});

function DirectionsPage() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <section className="relative flex min-h-[72svh] items-end overflow-hidden">
          <img
            src={panorama}
            alt={t("directions.imageAlt")}
            width={1999}
            height={1133}
            fetchPriority="high"
            className="animate-kenburns absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/45" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background/95 to-transparent" />
          <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 lg:px-10 lg:pb-24">
            <p className="eyebrow animate-rise text-primary-foreground/75">
              Montecalvo Versiggia — Oltrepò Pavese
            </p>
            <span className="rule-accent animate-rise mt-5" />
            <h1 className="animate-rise mt-5 max-w-4xl font-display text-[clamp(3rem,8vw,6.5rem)] leading-[0.96] text-primary-foreground">
              {t("directions.title")}
            </h1>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24 lg:px-10 lg:py-36">
          <Reveal>
            <p className="eyebrow">{t("directions.eyebrow")}</p>
            <span className="rule-accent mt-5" />
            <h2 className="mt-5 font-display text-[clamp(2.3rem,5vw,4rem)] leading-tight">
              {t("directions.addressTitle")}
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {t("directions.body")}
            </p>
            <a href={MAP_URL} target="_blank" rel="noreferrer" className="btn-solid mt-10">
              {t("directions.maps")} <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          </Reveal>

          <Reveal delay={120} className="border border-border bg-card p-8 sm:p-10">
            <address className="space-y-8 not-italic">
              <div className="flex gap-4">
                <MapPin aria-hidden="true" className="mt-1 size-5 shrink-0 text-accent" />
                <div>
                  <p className="eyebrow">{t("contact.where")}</p>
                  <p className="mt-2 font-display text-2xl">
                    {ADDRESS.street}
                    <br />
                    {ADDRESS.locality}
                  </p>
                </div>
              </div>
              <div className="flex gap-4 border-t border-border pt-8">
                <Phone aria-hidden="true" className="mt-1 size-5 shrink-0 text-accent" />
                <div>
                  <p className="eyebrow">Telefono</p>
                  <a
                    href={`tel:${CONTACT_PHONE_HREF}`}
                    className="link-underline mt-2 inline-block font-display text-2xl"
                  >
                    {CONTACT_PHONE}
                  </a>
                </div>
              </div>
              <div className="flex gap-4 border-t border-border pt-8">
                <Mail aria-hidden="true" className="mt-1 size-5 shrink-0 text-accent" />
                <div>
                  <p className="eyebrow">Email</p>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="link-underline mt-2 inline-block font-display text-2xl"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>
            </address>
          </Reveal>
        </section>

        <section className="bg-secondary/60 py-24 lg:py-32">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
            <Reveal>
              <p className="eyebrow">{t("directions.arrivalEyebrow")}</p>
              <h2 className="mt-5 font-display text-[clamp(2.3rem,5vw,4rem)] leading-tight">
                {t("directions.arrivalTitle")}
              </h2>
              <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-muted-foreground">
                {t("directions.arrivalBody")}
              </p>
              <a href={BOOKING_URL} target="_blank" rel="noreferrer" className="btn-outline mt-10">
                {t("nav.book")} <ArrowRight aria-hidden="true" className="size-4" />
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

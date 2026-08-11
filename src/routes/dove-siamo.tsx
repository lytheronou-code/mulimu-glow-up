import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Car,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Train,
} from "lucide-react";

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
  MAP_EMBED_URL,
  MAP_URL,
  absoluteUrl,
  getWhatsAppUrl,
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
      { property: "og:image", content: absoluteUrl("/og-mulimu.jpg") },
      { property: "og:url", content: absoluteUrl("/dove-siamo") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/dove-siamo") }],
  }),
});

const TRAVEL_TIMES = [
  "milan",
  "linate",
  "bergamo",
  "malpensa",
  "bologna",
  "lugano",
  "zurich",
] as const;

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
            <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
              {t("directions.trainBody")}
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
                    {ADDRESS.postalCode} {ADDRESS.locality}
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
                <MessageCircle aria-hidden="true" className="mt-1 size-5 shrink-0 text-accent" />
                <div>
                  <p className="eyebrow">WhatsApp</p>
                  <a
                    href={getWhatsAppUrl(t("contact.whatsappMessage"))}
                    target="_blank"
                    rel="noreferrer"
                    className="link-underline mt-2 inline-block font-display text-2xl text-accent"
                  >
                    {t("contact.whatsappCta")}
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

        <section className="border-y border-border bg-secondary/30 py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <h2 className="text-center font-display text-[clamp(2.5rem,6vw,4.75rem)] leading-none">
                Mulimù
              </h2>
              <div className="relative mt-10 overflow-hidden border border-border bg-muted shadow-[0_30px_80px_-45px_rgba(31,37,30,0.45)]">
                <iframe
                  src={MAP_EMBED_URL}
                  title="Mulimù — Google Maps"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[430px] w-full border-0 sm:h-[520px]"
                  allowFullScreen
                />
              </div>
              <div className="mt-7 flex justify-center">
                <a href={MAP_URL} target="_blank" rel="noreferrer" className="btn-outline">
                  {t("directions.maps")} <ArrowUpRight aria-hidden="true" className="size-4" />
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-secondary/60 py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal className="max-w-3xl">
              <p className="eyebrow">{t("directions.optionsEyebrow")}</p>
              <span className="rule-accent mt-5" />
              <h2 className="mt-5 font-display text-[clamp(2.3rem,5vw,4rem)] leading-tight">
                {t("directions.optionsTitle")}
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-6 md:grid-cols-2">
              <Reveal as="article" className="border border-border bg-background p-8 sm:p-10">
                <Car aria-hidden="true" className="size-6 text-accent" strokeWidth={1.5} />
                <h3 className="mt-8 font-display text-3xl">{t("directions.carTitle")}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {t("directions.carBody")}
                </p>
              </Reveal>
              <Reveal
                as="article"
                delay={120}
                className="border border-border bg-background p-8 sm:p-10"
              >
                <Train aria-hidden="true" className="size-6 text-accent" strokeWidth={1.5} />
                <h3 className="mt-8 font-display text-3xl">{t("directions.trainTitle")}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {t("directions.trainCardBody")}
                </p>
                <p className="mt-5 border-l border-accent pl-4 text-sm leading-relaxed">
                  {t("directions.transfer")}
                </p>
              </Reveal>
            </div>

            <Reveal className="mt-20">
              <div className="flex items-center gap-3">
                <Clock3 aria-hidden="true" className="size-5 text-accent" />
                <p className="eyebrow">{t("directions.timesTitle")}</p>
              </div>
              <div className="mt-7 grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-4">
                {TRAVEL_TIMES.map((place) => (
                  <div key={place} className="border-b border-r border-border bg-background p-6">
                    <p className="text-sm text-muted-foreground">
                      {t(`directions.place.${place}`)}
                    </p>
                    <p className="mt-2 font-display text-2xl">{t(`directions.time.${place}`)}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-24 text-center lg:px-10 lg:py-32">
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
        </section>
      </main>

      <Footer />
    </div>
  );
}

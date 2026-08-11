import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Heart, Home, Leaf } from "lucide-react";

import house from "@/assets/house.webp";
import property from "@/assets/struttura-8.webp";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { BOOKING_URL, absoluteUrl } from "@/data/site";
import { useI18n } from "@/i18n";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "La nostra storia — Mulimù, Oltrepò Pavese" },
      {
        name: "description",
        content:
          "La storia di Mulimù: una scelta di vita tra i vigneti di Montecalvo Versiggia e un'ospitalità familiare fatta di natura, cura e autenticità.",
      },
      { property: "og:title", content: "La nostra storia — Mulimù" },
      {
        property: "og:description",
        content:
          "Da Milano alle colline dell'Oltrepò Pavese: scopri le persone e i valori dietro Mulimù.",
      },
      { property: "og:image", content: absoluteUrl("/og-mulimu.jpg") },
      { property: "og:url", content: absoluteUrl("/about") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/about") }],
  }),
});

const VALUES = [
  { icon: Home, title: "about.value1.title", body: "about.value1.body" },
  { icon: Heart, title: "about.value2.title", body: "about.value2.body" },
  { icon: Leaf, title: "about.value3.title", body: "about.value3.body" },
] as const;

function AboutPage() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-background">
      <Header overlay={false} />

      <main>
        <section className="mx-auto max-w-7xl px-6 pb-20 pt-36 lg:px-10 lg:pb-28 lg:pt-44">
          <Reveal className="max-w-4xl">
            <p className="eyebrow">Mulimù — Montecalvo Versiggia</p>
            <span className="rule-accent mt-5" />
            <h1 className="mt-6 font-display text-[clamp(3rem,8vw,6.5rem)] leading-[0.96]">
              {t("about.title")}
            </h1>
            <p className="mt-7 max-w-2xl font-display text-[clamp(1.5rem,3vw,2.2rem)] font-light leading-snug text-muted-foreground">
              {t("about.subtitle")}
            </p>
          </Reveal>
        </section>

        <section className="mx-auto grid max-w-7xl items-start gap-14 px-6 pb-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24 lg:px-10 lg:pb-36">
          <Reveal className="frame-media lg:sticky lg:top-32">
            <img
              src={house}
              alt={t("about.imageAlt")}
              width={1080}
              height={1416}
              className="aspect-4/5 w-full object-cover"
            />
          </Reveal>

          <Reveal delay={120} className="space-y-7 text-lg leading-relaxed text-muted-foreground">
            <p className="first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-6xl first-letter:leading-[0.8] first-letter:text-accent">
              {t("about.p1")}
            </p>
            <p>{t("about.p2")}</p>
            <p>{t("about.p3")}</p>
            <p>{t("about.p4")}</p>
          </Reveal>
        </section>

        <section className="bg-primary py-24 text-primary-foreground lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal className="max-w-3xl">
              <p className="eyebrow text-primary-foreground/65">{t("about.valuesEyebrow")}</p>
              <span className="rule-accent mt-5" />
              <h2 className="mt-5 font-display text-[clamp(2.3rem,5vw,4rem)] leading-tight">
                {t("about.valuesTitle")}
              </h2>
            </Reveal>
            <div className="mt-14 grid gap-8 border-t border-primary-foreground/20 pt-10 md:grid-cols-3">
              {VALUES.map(({ icon: Icon, title, body }, index) => (
                <Reveal key={title} delay={index * 100}>
                  <Icon aria-hidden="true" className="size-5 text-sand" strokeWidth={1.5} />
                  <h3 className="mt-6 font-display text-2xl">{t(title)}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-primary-foreground/75">
                    {t(body)}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:gap-24 lg:px-10 lg:py-36">
          <Reveal>
            <p className="eyebrow">{t("about.homeEyebrow")}</p>
            <span className="rule-accent mt-5" />
            <h2 className="mt-5 font-display text-[clamp(2.3rem,5vw,4rem)] leading-tight">
              {t("about.homeTitle")}
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">{t("about.homeBody")}</p>
            <a href={BOOKING_URL} target="_blank" rel="noreferrer" className="btn-solid mt-10">
              {t("nav.book")} <ArrowRight aria-hidden="true" className="size-4" />
            </a>
          </Reveal>
          <Reveal delay={120} className="frame-media">
            <img
              src={property}
              alt={t("about.homeImageAlt")}
              width={1080}
              height={1422}
              loading="lazy"
              className="aspect-4/5 w-full object-cover"
            />
          </Reveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}

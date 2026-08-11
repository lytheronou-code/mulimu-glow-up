import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/Header";
import { PhotoGallery } from "@/components/PhotoGallery";
import { Reveal } from "@/components/Reveal";
import { Footer } from "@/components/Footer";
import { useI18n } from "@/i18n";
import { SOCIAL_IMAGE_URL, absoluteUrl } from "@/data/site";

import s1 from "@/assets/struttura-1.webp";
import s2 from "@/assets/struttura-2.webp";
import s3 from "@/assets/struttura-3.webp";
import s4 from "@/assets/struttura-4.webp";
import s5 from "@/assets/struttura-5.webp";
import s6 from "@/assets/struttura-6.webp";
import s7 from "@/assets/struttura-7.webp";
import s8 from "@/assets/struttura-8.webp";

const GALLERY = [s2, s3, s4, s5, s6, s7, s8];

export const Route = createFileRoute("/la-struttura")({
  component: StrutturaPage,
  head: () => ({
    meta: [
      { title: "La nostra Struttura — Mulimù, Oltrepò Pavese" },
      {
        name: "description",
        content:
          "Villa storica del XVI secolo con giardino di 2.000 mq, cinque camere con bagno privato, salone panoramico, locale colazioni e cucina comune.",
      },
      { property: "og:title", content: "La nostra Struttura — Mulimù" },
      {
        property: "og:description",
        content:
          "Una villa del XVI secolo riportata a nuova vita, affacciata su Golferenzo, Canevino e i vigneti della Val Versa.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: SOCIAL_IMAGE_URL },
      { property: "og:url", content: absoluteUrl("/la-struttura") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/la-struttura") }],
  }),
});

function StrutturaPage() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-background">
      <Header overlay={false} />

      <section className="mx-auto max-w-5xl px-6 pt-36 lg:px-10 lg:pt-44">
        <h1 className="animate-rise font-display text-[clamp(2.4rem,6vw,4.4rem)] leading-[1.05]">
          {t("struttura.title")}
        </h1>
        <span className="rule-accent animate-rise mt-6" />

        <Reveal className="frame-media mt-12">
          <img
            src={s1}
            alt={t("struttura.title")}
            width={1200}
            height={893}
            className="w-full object-cover"
          />
        </Reveal>

        <Reveal
          delay={100}
          className="mt-14 space-y-7 text-lg leading-relaxed text-muted-foreground"
        >
          <p className="first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-6xl first-letter:leading-[0.8] first-letter:text-accent">
            {t("struttura.p1")}
          </p>
          <p>{t("struttura.p2")}</p>
          <p>{t("struttura.p3")}</p>
        </Reveal>

        <Reveal className="mt-16 grid border-y border-border sm:grid-cols-3">
          {(["1", "2", "3"] as const).map((item) => (
            <div
              key={item}
              className="border-b border-border px-2 py-8 last:border-b-0 sm:border-b-0 sm:border-r sm:px-8 sm:last:border-r-0"
            >
              <p className="font-display text-4xl text-accent">
                {t(`struttura.fact${item}.value`)}
              </p>
              <p className="eyebrow mt-3">{t(`struttura.fact${item}.label`)}</p>
            </div>
          ))}
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <p className="eyebrow">{t("struttura.gallery")}</p>
        <span className="rule-accent mt-5" />
        <PhotoGallery
          images={GALLERY}
          altPrefix={`Mulimù — ${t("struttura.title")}`}
          label={t("struttura.gallery")}
          closeLabel={t("gallery.close")}
          previousLabel={t("gallery.previous")}
          nextLabel={t("gallery.next")}
        />
      </section>

      <Footer />
    </div>
  );
}

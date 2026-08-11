import {
  Outlet,
  Link,
  createRootRoute,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode } from "react";

import appCss from "../styles.css?url";
import { I18nProvider, useI18n } from "../i18n";
import { ADDRESS, CONTACT_EMAIL, CONTACT_PHONE, SITE_URL, SOCIAL_IMAGE_URL } from "../data/site";

function NotFoundComponent() {
  return (
    <I18nProvider>
      <NotFoundContent />
    </I18nProvider>
  );
}

function NotFoundContent() {
  const { t } = useI18n();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-foreground">404</h1>
        <h2 className="mt-4 font-display text-2xl text-foreground">{t("error.notFoundTitle")}</h2>
        <p className="mt-2 text-sm text-muted-foreground">{t("error.notFoundBody")}</p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center border border-foreground/30 px-6 py-3 text-[0.72rem] uppercase tracking-[0.22em] transition-colors hover:bg-foreground hover:text-background"
          >
            {t("error.backHome")}
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);

  return (
    <I18nProvider>
      <ErrorContent reset={reset} />
    </I18nProvider>
  );
}

function ErrorContent({ reset }: { reset: () => void }) {
  const router = useRouter();
  const { t } = useI18n();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl text-foreground">{t("error.loadTitle")}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{t("error.loadBody")}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="border border-foreground/30 px-6 py-3 text-[0.72rem] uppercase tracking-[0.22em] transition-colors hover:bg-foreground hover:text-background"
          >
            {t("error.retry")}
          </button>
          <a
            href="/"
            className="border border-foreground/30 px-6 py-3 text-[0.72rem] uppercase tracking-[0.22em] transition-colors hover:bg-foreground hover:text-background"
          >
            {t("nav.home")}
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Mulimù — Guest house nell'Oltrepò Pavese" },
      {
        name: "description",
        content:
          "Piccola guest house a gestione familiare tra le colline e i vigneti dell'Oltrepò Pavese.",
      },
      { name: "theme-color", content: "#4a6048" },
      { name: "apple-mobile-web-app-title", content: "Mulimù" },
      { property: "og:site_name", content: "Mulimù" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "it_IT" },
      { property: "og:title", content: "Mulimù — Guest house nell'Oltrepò Pavese" },
      {
        property: "og:description",
        content:
          "Una guest house familiare tra natura, vigneti e silenzio nelle colline dell'Oltrepò Pavese.",
      },
      { property: "og:image", content: SOCIAL_IMAGE_URL },
      { property: "og:image:secure_url", content: SOCIAL_IMAGE_URL },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: "Mulimù Guest House affacciata sui vigneti dell'Oltrepò Pavese",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Mulimù — Guest house nell'Oltrepò Pavese" },
      {
        name: "twitter:description",
        content: "Natura, quiete e ospitalità familiare tra i vigneti dell'Oltrepò Pavese.",
      },
      { name: "twitter:image", content: SOCIAL_IMAGE_URL },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png?v=3", type: "image/png", sizes: "64x64" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png?v=2", sizes: "180x180" },
      { rel: "manifest", href: "/site.webmanifest" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BedAndBreakfast",
          name: "Mulimù",
          description:
            "Piccola guest house a gestione familiare nelle colline dell'Oltrepò Pavese.",
          url: SITE_URL,
          telephone: CONTACT_PHONE,
          email: CONTACT_EMAIL,
          image: `${SITE_URL}/og-mulimu.jpg`,
          numberOfRooms: 5,
          address: {
            "@type": "PostalAddress",
            streetAddress: ADDRESS.street,
            postalCode: ADDRESS.postalCode,
            addressRegion: "Lombardia",
            addressCountry: "IT",
            addressLocality: ADDRESS.locality,
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="it">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <I18nProvider>
      <Outlet />
    </I18nProvider>
  );
}

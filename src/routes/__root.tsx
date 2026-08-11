import {
  Outlet,
  Link,
  createRootRoute,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { I18nProvider } from "../i18n";
import { ADDRESS, CONTACT_EMAIL, CONTACT_PHONE, SITE_URL } from "../data/site";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-foreground">404</h1>
        <h2 className="mt-4 font-display text-2xl text-foreground">Pagina non trovata</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          La pagina che cerchi non esiste o è stata spostata.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center border border-foreground/30 px-6 py-3 text-[0.72rem] uppercase tracking-[0.22em] transition-colors hover:bg-foreground hover:text-background"
          >
            Torna alla home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl text-foreground">Questa pagina non si è caricata</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Qualcosa è andato storto. Puoi riprovare o tornare alla home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="border border-foreground/30 px-6 py-3 text-[0.72rem] uppercase tracking-[0.22em] transition-colors hover:bg-foreground hover:text-background"
          >
            Riprova
          </button>
          <a
            href="/"
            className="border border-foreground/30 px-6 py-3 text-[0.72rem] uppercase tracking-[0.22em] transition-colors hover:bg-foreground hover:text-background"
          >
            Home
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
      { property: "og:site_name", content: "Mulimù" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
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
          address: {
            "@type": "PostalAddress",
            streetAddress: ADDRESS.street,
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

import { Link } from "@tanstack/react-router";

import logo from "@/assets/mulimu-logo.png";
import {
  ADDRESS,
  BOOKING_URL,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_HREF,
} from "@/data/site";
import { useI18n } from "@/i18n";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-border bg-secondary/60">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-10">
        <div className="lg:col-span-2">
          <img src={logo} alt="Mulimù" width={321} height={319} className="h-20 w-auto" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {t("footer.tagline")}
          </p>
          <p className="eyebrow mt-7">Mulimù — Ospitalità rurale — Guest house</p>
        </div>

        <nav aria-label="Navigazione nel footer" className="space-y-3 text-sm">
          <p className="eyebrow">Mulimù</p>
          <Link to="/about" className="link-underline block w-fit">
            {t("nav.story")}
          </Link>
          <Link to="/la-struttura" className="link-underline block w-fit">
            {t("nav.struttura")}
          </Link>
          <Link to="/rooms" className="link-underline block w-fit">
            {t("nav.rooms")}
          </Link>
          <Link to="/dove-siamo" className="link-underline block w-fit">
            {t("nav.directions")}
          </Link>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noreferrer"
            className="link-underline block w-fit text-accent"
          >
            {t("nav.book")}
          </a>
        </nav>

        <address className="space-y-3 text-sm not-italic">
          <p className="eyebrow">{t("nav.contact")}</p>
          <p className="text-muted-foreground">
            {ADDRESS.street}
            <br />
            {ADDRESS.locality}
          </p>
          <a href={`tel:${CONTACT_PHONE_HREF}`} className="link-underline block w-fit">
            {CONTACT_PHONE}
          </a>
          <a href={`mailto:${CONTACT_EMAIL}`} className="link-underline block w-fit">
            {CONTACT_EMAIL}
          </a>
        </address>
      </div>
      <div className="border-t border-border px-6 py-6 text-center text-xs text-muted-foreground lg:px-10">
        © {new Date().getFullYear()} Mulimù — {t("footer.rights")}
      </div>
    </footer>
  );
}

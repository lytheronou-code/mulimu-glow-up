import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import logo from "@/assets/mulimu-logo.png";
import logoLight from "@/assets/mulimu-logo-light.png";
import { BOOKING_URL } from "@/data/site";
import { LOCALES, LOCALE_FLAGS, LOCALE_NAMES, useI18n } from "@/i18n";

const NAV_ITEMS = [
  { to: "/about", label: "nav.story" },
  { to: "/la-struttura", label: "nav.struttura" },
  { to: "/rooms", label: "nav.rooms" },
  { to: "/dove-siamo", label: "nav.directions" },
] as const;

function LanguageSwitcher({ onPick, compact = false }: { onPick?: () => void; compact?: boolean }) {
  const { locale, setLocale, t } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const closeOnOutsideClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) setOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t("a11y.changeLanguage")}
        className={`flex items-center border border-current/20 bg-background/90 text-[0.68rem] uppercase text-foreground backdrop-blur-sm transition-colors hover:text-accent ${
          compact ? "gap-1.5 px-2.5 py-2 tracking-[0.12em]" : "gap-2 px-3 py-2 tracking-[0.16em]"
        }`}
      >
        <span aria-hidden="true" className="text-base leading-none">
          {LOCALE_FLAGS[locale]}
        </span>
        {compact ? locale.toUpperCase() : LOCALE_NAMES[locale]}
        <ChevronDown
          aria-hidden="true"
          className={`size-3 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open ? (
        <ul
          role="listbox"
          aria-label={t("a11y.availableLanguages")}
          className="absolute right-0 z-50 mt-2 w-44 border border-border bg-background py-1 shadow-xl"
        >
          {LOCALES.map((language) => (
            <li key={language}>
              <button
                type="button"
                role="option"
                aria-selected={locale === language}
                onClick={() => {
                  setLocale(language);
                  setOpen(false);
                  onPick?.();
                }}
                className={`flex w-full items-center gap-3 px-4 py-2.5 text-left text-[0.78rem] tracking-wide transition-colors hover:bg-muted ${
                  locale === language ? "text-accent" : "text-foreground"
                }`}
              >
                <span aria-hidden="true" className="text-base leading-none">
                  {LOCALE_FLAGS[language]}
                </span>
                {LOCALE_NAMES[language]}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export function Header({ overlay = true }: { overlay?: boolean }) {
  const { t } = useI18n();
  const [hasScrolled, setHasScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateHeader = () => setHasScrolled(window.scrollY > 24);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  const solidHeader = !overlay || hasScrolled;
  const navClass = solidHeader
    ? "text-muted-foreground hover:text-foreground"
    : "text-primary-foreground/85 hover:text-primary-foreground";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solidHeader ? "border-b border-border bg-background/92 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5 lg:px-10">
        <Link to="/" aria-label={t("a11y.home")} className="flex items-center">
          <img
            src={solidHeader ? logo : logoLight}
            alt={t("brand.logoAlt")}
            width={321}
            height={319}
            className={`h-16 w-auto transition-all duration-500 lg:h-[4.5rem] ${
              solidHeader ? "" : "drop-shadow-[0_2px_14px_rgba(0,0,0,0.5)]"
            }`}
          />
        </Link>

        <nav aria-label={t("a11y.mainNavigation")} className="hidden items-center gap-7 lg:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "text-accent" }}
              className={`link-underline text-[0.68rem] uppercase tracking-[0.2em] transition-colors ${navClass}`}
            >
              {t(item.label)}
            </Link>
          ))}
          <LanguageSwitcher />
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noreferrer"
            className={`border px-5 py-2.5 text-[0.68rem] uppercase tracking-[0.2em] transition-colors ${
              solidHeader
                ? "border-foreground/30 text-foreground hover:bg-foreground hover:text-background"
                : "border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground hover:text-foreground"
            }`}
          >
            {t("nav.book")}
          </a>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher compact />
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label={t("a11y.openMenu")}
            aria-expanded={menuOpen}
            className={`p-2 ${solidHeader ? "text-foreground" : "text-primary-foreground"}`}
          >
            <Menu aria-hidden="true" className="size-6" />
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="fixed inset-0 z-50 flex min-h-screen flex-col bg-background px-6 py-5 lg:hidden">
          <div className="flex items-center justify-between">
            <img src={logo} alt="Mulimù" width={321} height={319} className="h-14 w-auto" />
            <div className="flex items-center gap-2">
              <LanguageSwitcher compact onPick={() => setMenuOpen(false)} />
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label={t("a11y.closeMenu")}
                className="p-2"
              >
                <X aria-hidden="true" className="size-6" />
              </button>
            </div>
          </div>
          <nav aria-label={t("a11y.mobileNavigation")} className="mt-16 flex flex-col gap-7">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className="font-display text-3xl"
              >
                {t(item.label)}
              </Link>
            ))}
          </nav>
          <div className="mt-auto flex flex-col gap-6 pb-4">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noreferrer"
              className="border border-foreground/30 px-5 py-3 text-center text-[0.72rem] uppercase tracking-[0.22em]"
            >
              {t("nav.book")}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}

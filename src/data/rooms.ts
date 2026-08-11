import type { Locale } from "@/i18n";

import mansardaCover from "@/assets/mansarda-cover.webp";
import mansarda1 from "@/assets/mansarda-1.webp";
import mansarda2 from "@/assets/mansarda-2.webp";
import mansarda3 from "@/assets/mansarda-3.webp";
import mansarda4 from "@/assets/mansarda-4.webp";
import mansarda5 from "@/assets/mansarda-5.webp";
import mansarda6 from "@/assets/mansarda-6.webp";
import mansarda7 from "@/assets/mansarda-7.webp";
import mansarda8 from "@/assets/mansarda-8.webp";
import giardinoCover from "@/assets/giardino-cover.webp";
import giardino1 from "@/assets/giardino-1.webp";
import giardino2 from "@/assets/giardino-2.webp";
import giardino3 from "@/assets/giardino-3.webp";
import giardino4 from "@/assets/giardino-4.webp";
import giardino5 from "@/assets/giardino-5.webp";
import giardino6 from "@/assets/giardino-6.webp";

export type Room = {
  slug: string;
  name: string;
  cover: string;
  gallery: string[];
  content: Record<Locale, { tagline: string; body: string[]; features: string[] }>;
};

export const ROOMS: Room[] = [
  {
    slug: "la-mansarda",
    name: "La Mansarda",
    cover: mansardaCover,
    gallery: [
      mansarda1,
      mansarda2,
      mansarda3,
      mansarda4,
      mansarda5,
      mansarda6,
      mansarda7,
      mansarda8,
    ],
    content: {
      it: {
        tagline: "Tutto il secondo piano, fino a 3 ospiti",
        body: [
          "«La Mansarda» è la nostra camera più grande e occupa l'intero secondo piano. È dotata di bagno privato e area relax con SmartTV.",
          "Può ospitare fino a 3 adulti con un letto matrimoniale 160×200 e un letto singolo 80×200 che può fungere anche da divano. Collegamento Wi-Fi con fibra ottica, comodini e abat-jour.",
        ],
        features: [
          "Fino a 3 adulti",
          "Letto matrimoniale 160×200",
          "Letto singolo 80×200 (anche divano)",
          "Bagno privato",
          "Area relax con SmartTV",
          "Wi-Fi con fibra ottica",
          "Comodini e abat-jour",
          "Travi originali a vista",
        ],
      },
      en: {
        tagline: "The entire second floor, up to 3 guests",
        body: [
          "“La Mansarda” is our largest room and takes up the entire second floor. It has a private bathroom and a relaxation area with SmartTV.",
          "It sleeps up to 3 adults with a 160×200 double bed and an 80×200 single bed that also works as a sofa. Fibre-optic Wi-Fi, bedside tables and lamps.",
        ],
        features: [
          "Up to 3 adults",
          "Double bed 160×200",
          "Single bed 80×200 (also a sofa)",
          "Private bathroom",
          "Lounge area with SmartTV",
          "Fibre-optic Wi-Fi",
          "Bedside tables and lamps",
          "Original exposed beams",
        ],
      },
      fr: {
        tagline: "Tout le deuxième étage, jusqu'à 3 personnes",
        body: [
          "« La Mansarda » est notre plus grande chambre et occupe tout le deuxième étage. Elle dispose d'une salle de bain privée et d'un coin détente avec SmartTV.",
          "Elle peut accueillir jusqu'à 3 adultes avec un lit double 160×200 et un lit simple 80×200 pouvant aussi servir de canapé. Wi-Fi fibre optique, tables de nuit et abat-jour.",
        ],
        features: [
          "Jusqu'à 3 adultes",
          "Lit double 160×200",
          "Lit simple 80×200 (aussi canapé)",
          "Salle de bain privée",
          "Coin détente avec SmartTV",
          "Wi-Fi fibre optique",
          "Tables de nuit et lampes",
          "Poutres apparentes d'origine",
        ],
      },
      de: {
        tagline: "Die gesamte zweite Etage, bis zu 3 Gäste",
        body: [
          "„La Mansarda“ ist unser größtes Zimmer und nimmt die gesamte zweite Etage ein. Es verfügt über ein eigenes Bad und einen Ruhebereich mit SmartTV.",
          "Es bietet Platz für bis zu 3 Erwachsene mit einem Doppelbett 160×200 und einem Einzelbett 80×200, das auch als Sofa dient. Glasfaser-WLAN, Nachttische und Leselampen.",
        ],
        features: [
          "Bis zu 3 Erwachsene",
          "Doppelbett 160×200",
          "Einzelbett 80×200 (auch Sofa)",
          "Eigenes Badezimmer",
          "Ruhebereich mit SmartTV",
          "Glasfaser-WLAN",
          "Nachttische und Leselampen",
          "Originale Holzbalken",
        ],
      },
      nl: {
        tagline: "De hele tweede verdieping, tot 3 gasten",
        body: [
          "„La Mansarda” is onze grootste kamer en beslaat de hele tweede verdieping. Ze heeft een eigen badkamer en een relaxhoek met SmartTV.",
          "De kamer biedt plaats aan maximaal 3 volwassenen met een tweepersoonsbed 160×200 en een eenpersoonsbed 80×200 dat ook als bank dient. Glasvezel-wifi, nachtkastjes en schemerlampen.",
        ],
        features: [
          "Tot 3 volwassenen",
          "Tweepersoonsbed 160×200",
          "Eenpersoonsbed 80×200 (ook bank)",
          "Eigen badkamer",
          "Relaxhoek met SmartTV",
          "Glasvezel-wifi",
          "Nachtkastjes en schemerlampen",
          "Originele zichtbare balken",
        ],
      },
    },
  },
  {
    slug: "il-giardino",
    name: "Il Giardino",
    cover: giardinoCover,
    gallery: [giardino1, giardino2, giardino3, giardino4, giardino5, giardino6],
    content: {
      it: {
        tagline: "25 mq al primo piano, balconcino in pietra",
        body: [
          "Questa camera è situata al primo piano e si affaccia su una parte del giardino interno con vista sulle colline. 25 mq di superficie, con bagno privato e balconcino in pietra.",
          "È dotata di letto matrimoniale King size 160×190, SmartTV, comodini, abat-jour e collegamento Wi-Fi con fibra ottica.",
        ],
        features: [
          "2 ospiti",
          "Letto King size 160×190",
          "25 mq",
          "Bagno privato",
          "Balconcino in pietra",
          "Vista giardino e colline",
          "SmartTV",
          "Wi-Fi con fibra ottica",
        ],
      },
      en: {
        tagline: "25 sqm on the first floor, small stone balcony",
        body: [
          "This room is on the first floor and overlooks part of the inner garden with a view of the hills. 25 sqm, with a private bathroom and a small stone balcony.",
          "It has a King size 160×190 double bed, SmartTV, bedside tables, lamps and fibre-optic Wi-Fi.",
        ],
        features: [
          "2 guests",
          "King size bed 160×190",
          "25 sqm",
          "Private bathroom",
          "Small stone balcony",
          "Garden and hill view",
          "SmartTV",
          "Fibre-optic Wi-Fi",
        ],
      },
      fr: {
        tagline: "25 m² au premier étage, petit balcon en pierre",
        body: [
          "Cette chambre se situe au premier étage et donne sur une partie du jardin intérieur avec vue sur les collines. 25 m², avec salle de bain privée et petit balcon en pierre.",
          "Elle dispose d'un lit double King size 160×190, d'une SmartTV, de tables de nuit, d'abat-jour et du Wi-Fi fibre optique.",
        ],
        features: [
          "2 personnes",
          "Lit King size 160×190",
          "25 m²",
          "Salle de bain privée",
          "Petit balcon en pierre",
          "Vue jardin et collines",
          "SmartTV",
          "Wi-Fi fibre optique",
        ],
      },
      de: {
        tagline: "25 m² im ersten Stock, kleiner Steinbalkon",
        body: [
          "Dieses Zimmer liegt im ersten Stock und blickt auf einen Teil des Innengartens mit Blick auf die Hügel. 25 m², mit eigenem Bad und kleinem Steinbalkon.",
          "Es verfügt über ein Kingsize-Doppelbett 160×190, SmartTV, Nachttische, Leselampen und Glasfaser-WLAN.",
        ],
        features: [
          "2 Gäste",
          "Kingsize-Bett 160×190",
          "25 m²",
          "Eigenes Badezimmer",
          "Kleiner Steinbalkon",
          "Blick auf Garten und Hügel",
          "SmartTV",
          "Glasfaser-WLAN",
        ],
      },
      nl: {
        tagline: "25 m² op de eerste verdieping, klein stenen balkon",
        body: [
          "Deze kamer ligt op de eerste verdieping en kijkt uit op een deel van de binnentuin met uitzicht op de heuvels. 25 m², met eigen badkamer en een klein stenen balkon.",
          "De kamer heeft een kingsize tweepersoonsbed 160×190, SmartTV, nachtkastjes, schemerlampen en glasvezel-wifi.",
        ],
        features: [
          "2 gasten",
          "Kingsize bed 160×190",
          "25 m²",
          "Eigen badkamer",
          "Klein stenen balkon",
          "Uitzicht op tuin en heuvels",
          "SmartTV",
          "Glasvezel-wifi",
        ],
      },
    },
  },
];

export const getRoom = (slug: string) => ROOMS.find((r) => r.slug === slug);

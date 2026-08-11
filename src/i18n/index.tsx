/* eslint-disable react-refresh/only-export-components -- context, locale constants and hook intentionally share one module */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export const LOCALES = ["it", "en", "fr", "de", "nl"] as const;
export type Locale = (typeof LOCALES)[number];

export const LOCALE_LABELS: Record<Locale, string> = {
  it: "IT",
  en: "EN",
  fr: "FR",
  de: "DE",
  nl: "NL",
};

export const LOCALE_FLAGS: Record<Locale, string> = {
  it: "🇮🇹",
  en: "🇬🇧",
  fr: "🇫🇷",
  de: "🇩🇪",
  nl: "🇳🇱",
};

export const LOCALE_NAMES: Record<Locale, string> = {
  it: "Italiano",
  en: "English",
  fr: "Français",
  de: "Deutsch",
  nl: "Nederlands",
};

type Dict = Record<string, string>;

const it: Dict = {
  "nav.home": "Casa",
  "nav.story": "La nostra storia",
  "nav.directions": "Come raggiungerci",
  "nav.rooms": "Camere",
  "nav.services": "Esperienze",
  "nav.place": "Il luogo",
  "nav.struttura": "La struttura",

  "struttura.title": "La nostra Struttura",
  "struttura.p1":
    "La nostra guest house trova spazio in una storica villa del XVI secolo, successivamente ampliata e rinnovata nei primi del ’900, oggi riportata a nuova vita nel rispetto della sua identità originaria. Circondata da un giardino di circa 2.000 mq, si affaccia sulle colline con una vista che abbraccia Golferenzo, Canevino e i vigneti della Val Versa.",
  "struttura.p2":
    "La casa è organizzata in cinque camere da letto con bagno privato dedicate agli ospiti e in un ampio salone con affaccio panoramico. Al piano terra si trovano l’accogliente locale per le colazioni e la cucina comune, pensata per chi desidera sentirsi libero come a casa, ma con le attenzioni di una piccola dimora di charme.",
  "struttura.p3":
    "Gli spazi esterni e le aree condivise sono stati curati per offrire quiete, comfort e un contatto diretto con la natura che circonda la proprietà.",
  "struttura.gallery": "Galleria",
  "nav.contact": "Contatti",
  "nav.book": "Prenota",

  "about.title": "La Nostra Storia",
  "about.subtitle": "Qualche informazione aggiuntiva su di noi…",
  "about.imageAlt": "La colazione nel giardino di Mulimù insieme a Pongo",
  "about.p1":
    "Tra le colline morbide e i vitigni dell’Oltrepò Pavese, a Montecalvo Versiggia, abbiamo scelto di dare forma a un nuovo capitolo della nostra vita. Dopo anni trascorsi a Milano, alla fine del 2023 abbiamo lasciato la città per avvicinarci a un ritmo più autentico, fatto di natura, silenzio e relazioni vere.",
  "about.p2":
    "Questa decisione ci ha permesso di immaginare un progetto diverso e più vicino ai nostri valori: così è nata la nostra guest house, un luogo intimo e curato in cui accogliere chi desidera prendersi una pausa e respirare l’atmosfera delle colline dell’Oltrepò.",
  "about.p3":
    "Siamo persone socievoli e ci fa piacere conoscere i nostri ospiti, condividere suggerimenti sul territorio o semplicemente una conversazione davanti a un buon calice di vino. Allo stesso tempo, crediamo molto nel rispetto dei tempi e degli spazi di ciascuno: chi sceglie di soggiornare da noi può contare su tranquillità e privacy.",
  "about.p4":
    "A completare la nostra quotidianità c’è Pongo, il nostro alano che condivide con noi la serenità di questa casa tra i vigneti, oltre che un gruppo di galline che fornisce uova fresche per le colazioni degli ospiti.",
  "about.valuesEyebrow": "Il nostro modo di accogliere",
  "about.valuesTitle": "La semplicità, con tutta la cura che merita.",
  "about.value1.title": "Sentirsi a casa",
  "about.value1.body":
    "Un luogo intimo, curato e senza formalità, dove ogni ospite può trovare il proprio ritmo.",
  "about.value2.title": "Relazioni vere",
  "about.value2.body":
    "Suggerimenti sinceri sul territorio, una conversazione e il piacere di condividere.",
  "about.value3.title": "Ritmo naturale",
  "about.value3.body":
    "Silenzio, vigneti e stagioni: il lusso essenziale di una pausa vissuta lentamente.",
  "about.homeEyebrow": "La casa tra i vigneti",
  "about.homeTitle": "Un soggiorno che lascia spazio.",
  "about.homeBody":
    "Mulimù è una dimora raccolta, immersa nel paesaggio della Val Versa. Qui ospitalità e privacy convivono con naturalezza, dalla colazione alle ore più quiete della sera.",
  "about.homeImageAlt": "La casa di Mulimù a Montecalvo Versiggia",

  "directions.title": "Come raggiungerci",
  "directions.eyebrow": "Dove siamo",
  "directions.addressTitle": "Nel cuore della Val Versa",
  "directions.body":
    "Mulimù si trova a Montecalvo Versiggia, tra vigneti, piccoli borghi e strade panoramiche dell’Oltrepò Pavese. Apri l’indirizzo completo nel tuo navigatore per arrivare direttamente alla guest house.",
  "directions.imageAlt": "Panorama della Val Versa visto da Mulimù",
  "directions.maps": "Apri in Google Maps",
  "directions.arrivalEyebrow": "Prima dell’arrivo",
  "directions.arrivalTitle": "Siamo qui per aiutarti",
  "directions.arrivalBody":
    "Per qualsiasi dubbio sul percorso o sull’orario di arrivo, chiamaci o scrivici. Ti risponderemo personalmente con tutte le indicazioni utili.",

  "hero.eyebrow": "Guest house — Oltrepò Pavese",
  "hero.title": "Abbraccia la Tua Oasi di Pace e Tranquillità",
  "hero.subtitle": "Una fuga raffinata circondata dalla natura.",
  "hero.cta": "Prenota ora",
  "hero.scroll": "Continua",

  "intro.eyebrow": "Benvenuti",
  "intro.title": "Le colline dell'Oltrepò Pavese",
  "intro.body1":
    "Una piccola guest house a gestione familiare situata nelle colline dell’Oltrepò Pavese, Mulimù ti invita in uno spazio sereno e rilassante, che speriamo possa farti sentire a casa.",
  "intro.body2":
    "Questi luoghi offrono un'esperienza unica, con panorami che cambiano con le stagioni e una ricca tradizione vinicola da scoprire.",
  "intro.stat1": "Camere",
  "intro.stat1v": "2",
  "intro.stat2": "Ospiti",
  "intro.stat2v": "fino a 5",
  "intro.stat3": "Vista",
  "intro.stat3v": "colline e vigneti",

  "rooms.eyebrow": "Camere",
  "rooms.title": "Esplora le nostre Camere",
  "rooms.body":
    "Svegliati con la splendida vista delle colline ricoperte di vigneti. Le nostre camere offrono un rifugio tranquillo, complete di letti comodi, arredi moderni e pezzi d'epoca recuperati con cura e dedizione.",
  "rooms.cta": "Esplora le camere",
  "rooms.detail": "Dettagli",
  "rooms.gallery": "Galleria",
  "rooms.features": "Servizi in camera",
  "rooms.back": "Tutte le camere",
  "rooms.other": "L'altra camera",
  "rooms.book": "Prenota Ora",

  "services.eyebrow": "Esperienze",
  "services.title": "I nostri servizi",
  "services.body":
    "Organizziamo su richiesta esperienze pensate per farti vivere l'Oltrepò con lentezza.",
  "services.tasting.title": "Degustazioni",
  "services.tasting.body":
    "Visite in cantina e assaggi guidati tra Pinot Nero, Bonarda e Riesling, dai piccoli produttori che conosciamo di persona.",
  "services.trek.title": "Trekking",
  "services.trek.body":
    "Sentieri tra crinali, boschi e borghi, con itinerari adatti a ogni passo e mappe preparate da noi.",
  "services.massage.title": "Massaggi",
  "services.massage.body":
    "Trattamenti rilassanti in casa, su prenotazione, al rientro da una giornata all'aria aperta.",
  "services.cta": "Scrivici per organizzare la tua esperienza",

  "place.eyebrow": "Il luogo",
  "place.title": "Oltrepò Pavese",
  "place.body":
    "Dolci pendii, vigneti a perdita d'occhio e panorami che cambiano con le stagioni. Una terra di vino antica e ancora autentica, a poco più di un'ora da Milano.",
  "place.p1.title": "Vino",
  "place.p1.body": "Una delle patrie italiane del Pinot Nero e delle bollicine metodo classico.",
  "place.p2.title": "Tavola",
  "place.p2.body": "Trattorie di collina, salumi, brasati e paste fatte a mano.",
  "place.p3.title": "Silenzio",
  "place.p3.body": "Strade tranquille, borghi in pietra e cieli stellati.",

  "contact.eyebrow": "Contatti",
  "contact.title": "Vieni a trovarci",
  "contact.body":
    "Scrivici per disponibilità, soggiorni lunghi o per organizzare la tua esperienza in Oltrepò. Rispondiamo personalmente.",
  "contact.email": "Email",
  "contact.where": "Dove siamo",
  "contact.whereValue": "Oltrepò Pavese, Lombardia, Italia",
  "contact.checkin": "Check-in",
  "contact.checkinValue": "dalle 15:00 — check-out entro le 10:30",
  "contact.write": "Scrivici",

  "footer.tagline": "Guest house a gestione familiare nelle colline dell'Oltrepò Pavese.",
  "footer.rights": "Tutti i diritti riservati.",
  "footer.lang": "Lingua",
};

const en: Dict = {
  "nav.home": "Home",
  "nav.rooms": "Rooms",
  "nav.story": "Our story",
  "nav.directions": "How to reach us",
  "nav.services": "Experiences",
  "nav.place": "The place",
  "nav.struttura": "The property",

  "struttura.title": "Our Property",
  "struttura.p1":
    "Our guest house is set in a historic 16th-century villa, later extended and renovated in the early 1900s, and today brought back to life while respecting its original identity. Surrounded by a garden of about 2,000 sqm, it looks out over the hills with a view that embraces Golferenzo, Canevino and the vineyards of Val Versa.",
  "struttura.p2":
    "The house is arranged into five bedrooms with private bathrooms for guests and a large lounge with a panoramic outlook. On the ground floor there is the welcoming breakfast room and the shared kitchen, designed for those who want to feel free as at home, but with the care of a small charming residence.",
  "struttura.p3":
    "The outdoor spaces and shared areas have been designed to offer quiet, comfort and a direct contact with the nature surrounding the property.",
  "struttura.gallery": "Gallery",
  "nav.contact": "Contact",
  "nav.book": "Book",

  "about.title": "Our Story",
  "about.subtitle": "A little more about us…",
  "about.imageAlt": "Breakfast in the Mulimù garden with Pongo",
  "about.p1":
    "Among the gentle hills and vineyards of the Oltrepò Pavese, in Montecalvo Versiggia, we chose to begin a new chapter of our lives. After years in Milan, at the end of 2023 we left the city to embrace a more authentic pace, shaped by nature, silence and genuine relationships.",
  "about.p2":
    "That decision allowed us to imagine a project closer to our values. This is how our guest house was born: an intimate, carefully tended place for anyone wishing to pause and breathe in the atmosphere of the Oltrepò hills.",
  "about.p3":
    "We are sociable people and enjoy getting to know our guests, sharing local recommendations or simply talking over a good glass of wine. At the same time, we deeply respect everyone’s time and space: those who stay with us can count on peace and privacy.",
  "about.p4":
    "Pongo, our Great Dane, completes our daily life and shares the tranquillity of this house among the vineyards with us, together with a small group of hens that provide fresh eggs for our guests’ breakfasts.",
  "about.valuesEyebrow": "Our way of welcoming",
  "about.valuesTitle": "Simplicity, with all the care it deserves.",
  "about.value1.title": "Feel at home",
  "about.value1.body":
    "An intimate, thoughtful and informal place where every guest can find their own pace.",
  "about.value2.title": "Genuine connections",
  "about.value2.body":
    "Honest local recommendations, a conversation and the simple pleasure of sharing.",
  "about.value3.title": "A natural rhythm",
  "about.value3.body":
    "Silence, vineyards and seasons: the essential luxury of taking a slower break.",
  "about.homeEyebrow": "The house among the vineyards",
  "about.homeTitle": "A stay with room to breathe.",
  "about.homeBody":
    "Mulimù is an intimate home immersed in the Val Versa landscape. Here, hospitality and privacy coexist naturally, from breakfast to the quietest hours of the evening.",
  "about.homeImageAlt": "The Mulimù house in Montecalvo Versiggia",

  "directions.title": "How to reach us",
  "directions.eyebrow": "Where we are",
  "directions.addressTitle": "In the heart of Val Versa",
  "directions.body":
    "Mulimù is in Montecalvo Versiggia, among vineyards, small villages and the panoramic roads of the Oltrepò Pavese. Open the full address in your navigation app to reach the guest house directly.",
  "directions.imageAlt": "View of Val Versa from Mulimù",
  "directions.maps": "Open in Google Maps",
  "directions.arrivalEyebrow": "Before you arrive",
  "directions.arrivalTitle": "We are here to help",
  "directions.arrivalBody":
    "If you have any questions about the route or your arrival time, call or write to us. We will reply personally with everything you need.",

  "hero.eyebrow": "Guest house — Oltrepò Pavese",
  "hero.title": "Embrace Your Oasis of Peace and Tranquillity",
  "hero.subtitle": "A refined escape surrounded by nature.",
  "hero.cta": "Book now",
  "hero.scroll": "Continue",

  "intro.eyebrow": "Welcome",
  "intro.title": "The hills of the Oltrepò Pavese",
  "intro.body1":
    "A small family-run guest house set in the hills of the Oltrepò Pavese, Mulimù welcomes you into a serene, relaxing space that we hope will feel like home.",
  "intro.body2":
    "These places offer a unique experience, with views that change with the seasons and a rich winemaking tradition to discover.",
  "intro.stat1": "Rooms",
  "intro.stat1v": "2",
  "intro.stat2": "Guests",
  "intro.stat2v": "up to 5",
  "intro.stat3": "View",
  "intro.stat3v": "hills and vineyards",

  "rooms.eyebrow": "Rooms",
  "rooms.title": "Explore our Rooms",
  "rooms.body":
    "Wake up to the wonderful view of vineyard-covered hills. Our rooms offer a peaceful retreat, complete with comfortable beds, modern furnishings and vintage pieces restored with care and dedication.",
  "rooms.cta": "Explore the rooms",
  "rooms.detail": "Details",
  "rooms.gallery": "Gallery",
  "rooms.features": "In-room amenities",
  "rooms.back": "All rooms",
  "rooms.other": "The other room",
  "rooms.book": "Book Now",

  "services.eyebrow": "Experiences",
  "services.title": "Our services",
  "services.body":
    "On request we arrange experiences designed to let you enjoy the Oltrepò slowly.",
  "services.tasting.title": "Wine tastings",
  "services.tasting.body":
    "Cellar visits and guided tastings of Pinot Noir, Bonarda and Riesling, with small producers we know personally.",
  "services.trek.title": "Trekking",
  "services.trek.body":
    "Trails across ridges, woods and stone villages, with routes for every pace and maps we prepare ourselves.",
  "services.massage.title": "Massages",
  "services.massage.body":
    "Relaxing treatments at the house, by appointment, after a day spent outdoors.",
  "services.cta": "Write to us to arrange your experience",

  "place.eyebrow": "The place",
  "place.title": "Oltrepò Pavese",
  "place.body":
    "Gentle slopes, vineyards as far as the eye can see and views that shift with the seasons. An ancient, still authentic wine country just over an hour from Milan.",
  "place.p1.title": "Wine",
  "place.p1.body": "One of Italy's homes of Pinot Noir and classic-method sparkling wines.",
  "place.p2.title": "Table",
  "place.p2.body": "Hillside trattorias, cured meats, braised dishes and handmade pasta.",
  "place.p3.title": "Silence",
  "place.p3.body": "Quiet roads, stone hamlets and starry skies.",

  "contact.eyebrow": "Contact",
  "contact.title": "Come and see us",
  "contact.body":
    "Write to us about availability, longer stays or to arrange your experience in the Oltrepò. We reply personally.",
  "contact.email": "Email",
  "contact.where": "Where we are",
  "contact.whereValue": "Oltrepò Pavese, Lombardy, Italy",
  "contact.checkin": "Check-in",
  "contact.checkinValue": "from 3:00 pm — check-out by 10:30 am",
  "contact.write": "Write to us",

  "footer.tagline": "Family-run guest house in the hills of the Oltrepò Pavese.",
  "footer.rights": "All rights reserved.",
  "footer.lang": "Language",
};

const fr: Dict = {
  "nav.home": "Accueil",
  "nav.story": "Notre histoire",
  "nav.directions": "Comment nous rejoindre",
  "nav.rooms": "Chambres",
  "nav.services": "Expériences",
  "nav.place": "Le lieu",
  "nav.struttura": "La structure",

  "struttura.title": "Notre Structure",
  "struttura.p1":
    "Notre guest house occupe une villa historique du XVIe siècle, agrandie et rénovée au début du XXe siècle, aujourd’hui ramenée à la vie dans le respect de son identité d’origine. Entourée d’un jardin d’environ 2 000 m², elle donne sur les collines avec une vue qui embrasse Golferenzo, Canevino et les vignobles de la Val Versa.",
  "struttura.p2":
    "La maison est organisée en cinq chambres avec salle de bain privée réservées aux hôtes et en un vaste salon avec vue panoramique. Au rez-de-chaussée se trouvent l’accueillante salle des petits-déjeuners et la cuisine commune, pensée pour ceux qui souhaitent se sentir libres comme chez eux, mais avec les attentions d’une petite demeure de charme.",
  "struttura.p3":
    "Les espaces extérieurs et les parties communes ont été soignés pour offrir calme, confort et un contact direct avec la nature qui entoure la propriété.",
  "struttura.gallery": "Galerie",
  "nav.contact": "Contact",
  "nav.book": "Réserver",

  "about.title": "Notre Histoire",
  "about.subtitle": "Quelques informations supplémentaires sur nous…",
  "about.imageAlt": "Le petit-déjeuner dans le jardin de Mulimù avec Pongo",
  "about.p1":
    "Parmi les douces collines et les vignobles de l’Oltrepò Pavese, à Montecalvo Versiggia, nous avons choisi d’ouvrir un nouveau chapitre de notre vie. Après des années passées à Milan, nous avons quitté la ville fin 2023 pour retrouver un rythme plus authentique, fait de nature, de silence et de relations sincères.",
  "about.p2":
    "Cette décision nous a permis d’imaginer un projet différent, plus proche de nos valeurs. C’est ainsi qu’est née notre maison d’hôtes : un lieu intime et soigné où accueillir celles et ceux qui souhaitent faire une pause et respirer l’atmosphère des collines de l’Oltrepò.",
  "about.p3":
    "Nous sommes sociables et aimons faire connaissance avec nos hôtes, partager nos conseils sur la région ou simplement discuter autour d’un bon verre de vin. Nous tenons tout autant au respect du temps et de l’espace de chacun : chez nous, tranquillité et intimité sont garanties.",
  "about.p4":
    "Pongo, notre dogue allemand, partage avec nous la sérénité de cette maison au milieu des vignes. Quelques poules complètent notre quotidien et nous offrent des œufs frais pour le petit-déjeuner de nos hôtes.",
  "about.valuesEyebrow": "Notre façon d’accueillir",
  "about.valuesTitle": "La simplicité, avec toute l’attention qu’elle mérite.",
  "about.value1.title": "Se sentir chez soi",
  "about.value1.body":
    "Un lieu intime, soigné et sans formalités où chaque hôte peut trouver son propre rythme.",
  "about.value2.title": "Des liens sincères",
  "about.value2.body":
    "Des conseils authentiques sur la région, une conversation et le plaisir de partager.",
  "about.value3.title": "Un rythme naturel",
  "about.value3.body":
    "Le silence, les vignes et les saisons : le luxe essentiel d’une pause vécue lentement.",
  "about.homeEyebrow": "La maison au milieu des vignes",
  "about.homeTitle": "Un séjour qui laisse respirer.",
  "about.homeBody":
    "Mulimù est une demeure intime, immergée dans le paysage de la Val Versa. Ici, accueil et intimité coexistent naturellement, du petit-déjeuner aux heures les plus calmes du soir.",
  "about.homeImageAlt": "La maison Mulimù à Montecalvo Versiggia",

  "directions.title": "Comment nous rejoindre",
  "directions.eyebrow": "Où nous sommes",
  "directions.addressTitle": "Au cœur de la Val Versa",
  "directions.body":
    "Mulimù se trouve à Montecalvo Versiggia, parmi les vignes, les petits villages et les routes panoramiques de l’Oltrepò Pavese. Ouvrez l’adresse complète dans votre GPS pour arriver directement à la maison d’hôtes.",
  "directions.imageAlt": "Panorama de la Val Versa depuis Mulimù",
  "directions.maps": "Ouvrir dans Google Maps",
  "directions.arrivalEyebrow": "Avant votre arrivée",
  "directions.arrivalTitle": "Nous sommes là pour vous aider",
  "directions.arrivalBody":
    "Pour toute question sur l’itinéraire ou votre heure d’arrivée, appelez-nous ou écrivez-nous. Nous vous répondrons personnellement avec toutes les indications utiles.",

  "hero.eyebrow": "Maison d'hôtes — Oltrepò Pavese",
  "hero.title": "Votre oasis de paix et de tranquillité",
  "hero.subtitle": "Une escapade raffinée entourée de nature.",
  "hero.cta": "Réserver",
  "hero.scroll": "Continuer",

  "intro.eyebrow": "Bienvenue",
  "intro.title": "Les collines de l'Oltrepò Pavese",
  "intro.body1":
    "Petite maison d'hôtes familiale située dans les collines de l'Oltrepò Pavese, Mulimù vous accueille dans un espace serein et relaxant, où nous espérons que vous vous sentirez comme chez vous.",
  "intro.body2":
    "Ces lieux offrent une expérience unique, avec des panoramas qui changent au fil des saisons et une riche tradition viticole à découvrir.",
  "intro.stat1": "Chambres",
  "intro.stat1v": "2",
  "intro.stat2": "Voyageurs",
  "intro.stat2v": "jusqu'à 5",
  "intro.stat3": "Vue",
  "intro.stat3v": "collines et vignobles",

  "rooms.eyebrow": "Chambres",
  "rooms.title": "Explorez nos chambres",
  "rooms.body":
    "Réveillez-vous avec la superbe vue des collines couvertes de vignes. Nos chambres offrent un refuge tranquille, avec des lits confortables, un mobilier moderne et des pièces anciennes restaurées avec soin et dévouement.",
  "rooms.cta": "Explorer les chambres",
  "rooms.detail": "Détails",
  "rooms.gallery": "Galerie",
  "rooms.features": "Équipements",
  "rooms.back": "Toutes les chambres",
  "rooms.other": "L'autre chambre",
  "rooms.book": "Réserver",

  "services.eyebrow": "Expériences",
  "services.title": "Nos services",
  "services.body":
    "Sur demande, nous organisons des expériences pour découvrir l'Oltrepò en douceur.",
  "services.tasting.title": "Dégustations",
  "services.tasting.body":
    "Visites de caves et dégustations guidées de Pinot Noir, Bonarda et Riesling, chez de petits producteurs que nous connaissons personnellement.",
  "services.trek.title": "Randonnée",
  "services.trek.body":
    "Sentiers entre crêtes, forêts et villages de pierre, avec des itinéraires pour tous les rythmes et des cartes préparées par nous.",
  "services.massage.title": "Massages",
  "services.massage.body":
    "Soins relaxants à la maison, sur réservation, au retour d'une journée en plein air.",
  "services.cta": "Écrivez-nous pour organiser votre expérience",

  "place.eyebrow": "Le lieu",
  "place.title": "Oltrepò Pavese",
  "place.body":
    "Des pentes douces, des vignobles à perte de vue et des panoramas qui changent avec les saisons. Une terre de vin ancienne et encore authentique, à un peu plus d'une heure de Milan.",
  "place.p1.title": "Vin",
  "place.p1.body": "L'une des patries italiennes du Pinot Noir et des bulles méthode classique.",
  "place.p2.title": "Table",
  "place.p2.body": "Trattorias de collines, charcuteries, plats braisés et pâtes maison.",
  "place.p3.title": "Silence",
  "place.p3.body": "Routes tranquilles, hameaux de pierre et ciels étoilés.",

  "contact.eyebrow": "Contact",
  "contact.title": "Venez nous voir",
  "contact.body":
    "Écrivez-nous pour les disponibilités, les longs séjours ou pour organiser votre expérience dans l'Oltrepò. Nous répondons personnellement.",
  "contact.email": "Email",
  "contact.where": "Où nous sommes",
  "contact.whereValue": "Oltrepò Pavese, Lombardie, Italie",
  "contact.checkin": "Arrivée",
  "contact.checkinValue": "à partir de 15h00 — départ avant 10h30",
  "contact.write": "Écrivez-nous",

  "footer.tagline": "Maison d'hôtes familiale dans les collines de l'Oltrepò Pavese.",
  "footer.rights": "Tous droits réservés.",
  "footer.lang": "Langue",
};

const de: Dict = {
  "nav.home": "Start",
  "nav.story": "Unsere Geschichte",
  "nav.directions": "Anfahrt",
  "nav.rooms": "Zimmer",
  "nav.services": "Erlebnisse",
  "nav.place": "Die Region",
  "nav.struttura": "Das Haus",

  "struttura.title": "Unser Haus",
  "struttura.p1":
    "Unser Gästehaus befindet sich in einer historischen Villa aus dem 16. Jahrhundert, die zu Beginn des 20. Jahrhunderts erweitert und renoviert wurde und heute unter Bewahrung ihrer ursprünglichen Identität neu belebt ist. Umgeben von einem etwa 2.000 m² großen Garten blickt sie über die Hügel bis nach Golferenzo, Canevino und auf die Weinberge des Val Versa.",
  "struttura.p2":
    "Das Haus verfügt über fünf Schlafzimmer mit eigenem Bad für die Gäste sowie einen großen Salon mit Panoramablick. Im Erdgeschoss befinden sich der einladende Frühstücksraum und die Gemeinschaftsküche – für alle, die sich frei wie zu Hause fühlen möchten, mit der Aufmerksamkeit eines kleinen Charme-Hauses.",
  "struttura.p3":
    "Die Außenbereiche und Gemeinschaftsflächen wurden mit Bedacht gestaltet und bieten Ruhe, Komfort und den direkten Kontakt zur Natur, die das Anwesen umgibt.",
  "struttura.gallery": "Galerie",
  "nav.contact": "Kontakt",
  "nav.book": "Buchen",

  "about.title": "Unsere Geschichte",
  "about.subtitle": "Ein wenig mehr über uns…",
  "about.imageAlt": "Frühstück im Garten von Mulimù mit Pongo",
  "about.p1":
    "Inmitten der sanften Hügel und Weinberge des Oltrepò Pavese, in Montecalvo Versiggia, haben wir uns für ein neues Kapitel unseres Lebens entschieden. Nach vielen Jahren in Mailand verließen wir Ende 2023 die Stadt, um einem authentischeren Rhythmus näher zu sein – geprägt von Natur, Stille und echten Begegnungen.",
  "about.p2":
    "Diese Entscheidung ließ uns ein Projekt entwickeln, das unseren Werten näherkommt. So entstand unser Gästehaus: ein intimer, sorgfältig gestalteter Ort für alle, die innehalten und die Atmosphäre der Hügel des Oltrepò genießen möchten.",
  "about.p3":
    "Wir sind gesellige Menschen und lernen unsere Gäste gerne kennen, teilen Empfehlungen für die Region oder führen einfach ein Gespräch bei einem guten Glas Wein. Gleichzeitig respektieren wir die Zeit und den Freiraum jedes Einzelnen: Wer bei uns wohnt, kann auf Ruhe und Privatsphäre zählen.",
  "about.p4":
    "Pongo, unsere Deutsche Dogge, gehört zu unserem Alltag und teilt mit uns die Ruhe dieses Hauses zwischen den Weinbergen. Dazu kommt eine kleine Hühnerschar, die frische Eier für das Frühstück unserer Gäste liefert.",
  "about.valuesEyebrow": "Unsere Art, Gäste zu empfangen",
  "about.valuesTitle": "Einfachheit, mit aller Aufmerksamkeit, die sie verdient.",
  "about.value1.title": "Wie zu Hause fühlen",
  "about.value1.body":
    "Ein intimer, gepflegter und ungezwungener Ort, an dem jeder seinen eigenen Rhythmus findet.",
  "about.value2.title": "Echte Begegnungen",
  "about.value2.body":
    "Ehrliche Empfehlungen für die Region, ein Gespräch und die Freude am Teilen.",
  "about.value3.title": "Natürlicher Rhythmus",
  "about.value3.body":
    "Stille, Weinberge und Jahreszeiten: der wesentliche Luxus einer langsam erlebten Pause.",
  "about.homeEyebrow": "Das Haus zwischen den Weinbergen",
  "about.homeTitle": "Ein Aufenthalt mit Raum zum Atmen.",
  "about.homeBody":
    "Mulimù ist ein intimes Haus inmitten der Landschaft des Val Versa. Hier bestehen Gastfreundschaft und Privatsphäre ganz selbstverständlich nebeneinander – vom Frühstück bis zu den stillsten Abendstunden.",
  "about.homeImageAlt": "Das Mulimù-Haus in Montecalvo Versiggia",

  "directions.title": "So erreichen Sie uns",
  "directions.eyebrow": "Wo wir sind",
  "directions.addressTitle": "Im Herzen des Val Versa",
  "directions.body":
    "Mulimù liegt in Montecalvo Versiggia, zwischen Weinbergen, kleinen Dörfern und Panoramastraßen des Oltrepò Pavese. Öffnen Sie die vollständige Adresse in Ihrer Navigation, um direkt zum Gästehaus zu gelangen.",
  "directions.imageAlt": "Blick auf das Val Versa von Mulimù",
  "directions.maps": "In Google Maps öffnen",
  "directions.arrivalEyebrow": "Vor Ihrer Ankunft",
  "directions.arrivalTitle": "Wir helfen Ihnen gerne",
  "directions.arrivalBody":
    "Bei Fragen zur Anfahrt oder Ankunftszeit rufen Sie uns an oder schreiben Sie uns. Wir antworten persönlich mit allen hilfreichen Informationen.",

  "hero.eyebrow": "Gästehaus — Oltrepò Pavese",
  "hero.title": "Ihre Oase der Ruhe und Gelassenheit",
  "hero.subtitle": "Eine stilvolle Auszeit inmitten der Natur.",
  "hero.cta": "Jetzt buchen",
  "hero.scroll": "Weiter",

  "intro.eyebrow": "Willkommen",
  "intro.title": "Die Hügel des Oltrepò Pavese",
  "intro.body1":
    "Ein kleines familiengeführtes Gästehaus in den Hügeln des Oltrepò Pavese: Mulimù empfängt Sie in einer ruhigen, entspannten Umgebung, in der Sie sich wie zu Hause fühlen sollen.",
  "intro.body2":
    "Diese Orte bieten ein einzigartiges Erlebnis, mit Panoramen, die sich mit den Jahreszeiten wandeln, und einer reichen Weintradition zum Entdecken.",
  "intro.stat1": "Zimmer",
  "intro.stat1v": "2",
  "intro.stat2": "Gäste",
  "intro.stat2v": "bis zu 5",
  "intro.stat3": "Aussicht",
  "intro.stat3v": "Hügel und Weinberge",

  "rooms.eyebrow": "Zimmer",
  "rooms.title": "Entdecken Sie unsere Zimmer",
  "rooms.body":
    "Wachen Sie mit dem herrlichen Blick auf die weinbedeckten Hügel auf. Unsere Zimmer sind ein ruhiger Rückzugsort mit bequemen Betten, modernem Mobiliar und liebevoll restaurierten antiken Stücken.",
  "rooms.cta": "Zimmer ansehen",
  "rooms.detail": "Details",
  "rooms.gallery": "Galerie",
  "rooms.features": "Ausstattung",
  "rooms.back": "Alle Zimmer",
  "rooms.other": "Das andere Zimmer",
  "rooms.book": "Jetzt buchen",

  "services.eyebrow": "Erlebnisse",
  "services.title": "Unsere Services",
  "services.body": "Auf Anfrage organisieren wir Erlebnisse, um das Oltrepò in Ruhe zu entdecken.",
  "services.tasting.title": "Weinproben",
  "services.tasting.body":
    "Kellerbesuche und geführte Proben von Pinot Nero, Bonarda und Riesling bei kleinen Produzenten, die wir persönlich kennen.",
  "services.trek.title": "Wandern",
  "services.trek.body":
    "Wege über Kämme, durch Wälder und Steindörfer, mit Routen für jedes Tempo und Karten von uns.",
  "services.massage.title": "Massagen",
  "services.massage.body":
    "Entspannende Behandlungen im Haus, auf Voranmeldung, nach einem Tag im Freien.",
  "services.cta": "Schreiben Sie uns für Ihr Wunscherlebnis",

  "place.eyebrow": "Die Region",
  "place.title": "Oltrepò Pavese",
  "place.body":
    "Sanfte Hänge, Weinberge bis zum Horizont und Panoramen, die sich mit den Jahreszeiten wandeln. Ein altes, noch authentisches Weinland, gut eine Stunde von Mailand entfernt.",
  "place.p1.title": "Wein",
  "place.p1.body": "Eine der italienischen Heimaten des Pinot Nero und klassischer Schaumweine.",
  "place.p2.title": "Küche",
  "place.p2.body": "Trattorien in den Hügeln, Salumi, Schmorgerichte und handgemachte Pasta.",
  "place.p3.title": "Stille",
  "place.p3.body": "Ruhige Straßen, Steindörfer und Sternenhimmel.",

  "contact.eyebrow": "Kontakt",
  "contact.title": "Besuchen Sie uns",
  "contact.body":
    "Schreiben Sie uns für Verfügbarkeiten, längere Aufenthalte oder Ihr Erlebnis im Oltrepò. Wir antworten persönlich.",
  "contact.email": "E-Mail",
  "contact.where": "Wo wir sind",
  "contact.whereValue": "Oltrepò Pavese, Lombardei, Italien",
  "contact.checkin": "Check-in",
  "contact.checkinValue": "ab 15:00 Uhr — Check-out bis 10:30 Uhr",
  "contact.write": "Schreiben Sie uns",

  "footer.tagline": "Familiengeführtes Gästehaus in den Hügeln des Oltrepò Pavese.",
  "footer.rights": "Alle Rechte vorbehalten.",
  "footer.lang": "Sprache",
};

const nl: Dict = {
  "nav.home": "Home",
  "nav.rooms": "Kamers",
  "nav.story": "Ons verhaal",
  "nav.directions": "Route",
  "nav.services": "Ervaringen",
  "nav.place": "De streek",
  "nav.struttura": "Het huis",

  "struttura.title": "Ons Huis",
  "struttura.p1":
    "Onze guest house is gevestigd in een historische villa uit de 16e eeuw, later uitgebreid en gerenoveerd in het begin van de 20e eeuw, en vandaag tot nieuw leven gebracht met respect voor haar oorspronkelijke identiteit. Omringd door een tuin van circa 2.000 m² kijkt zij uit over de heuvels, met uitzicht op Golferenzo, Canevino en de wijngaarden van de Val Versa.",
  "struttura.p2":
    "Het huis bestaat uit vijf slaapkamers met eigen badkamer voor de gasten en een ruime salon met panoramisch uitzicht. Op de begane grond bevinden zich de gezellige ontbijtruimte en de gemeenschappelijke keuken, bedacht voor wie zich vrij wil voelen als thuis, maar met de zorg van een klein charmant verblijf.",
  "struttura.p3":
    "De buitenruimtes en gemeenschappelijke ruimtes zijn met zorg ingericht om rust, comfort en direct contact met de natuur rondom het pand te bieden.",
  "struttura.gallery": "Galerij",
  "nav.contact": "Contact",
  "nav.book": "Boeken",

  "about.title": "Ons Verhaal",
  "about.subtitle": "Iets meer over ons…",
  "about.imageAlt": "Ontbijt in de tuin van Mulimù met Pongo",
  "about.p1":
    "Tussen de zachte heuvels en wijngaarden van de Oltrepò Pavese, in Montecalvo Versiggia, kozen we voor een nieuw hoofdstuk in ons leven. Na jaren in Milaan verlieten we eind 2023 de stad voor een authentieker ritme, gevormd door natuur, stilte en echte ontmoetingen.",
  "about.p2":
    "Die keuze gaf ons ruimte om een project te bedenken dat dichter bij onze waarden ligt. Zo ontstond ons guest house: een intieme, verzorgde plek voor wie even wil pauzeren en de sfeer van de heuvels van de Oltrepò wil ervaren.",
  "about.p3":
    "We zijn sociale mensen en leren onze gasten graag kennen, delen tips over de streek of praten gewoon bij een goed glas wijn. Tegelijk respecteren we ieders tijd en ruimte: wie bij ons verblijft, kan rekenen op rust en privacy.",
  "about.p4":
    "Pongo, onze Duitse dog, hoort bij ons dagelijks leven en deelt met ons de rust van dit huis tussen de wijngaarden. Ook onze kippen horen erbij en zorgen voor verse eieren bij het ontbijt van onze gasten.",
  "about.valuesEyebrow": "Onze manier van ontvangen",
  "about.valuesTitle": "Eenvoud, met alle aandacht die ze verdient.",
  "about.value1.title": "Je thuis voelen",
  "about.value1.body":
    "Een intieme, verzorgde en informele plek waar elke gast zijn eigen ritme vindt.",
  "about.value2.title": "Echte verbinding",
  "about.value2.body":
    "Oprechte tips over de streek, een gesprek en het eenvoudige plezier van delen.",
  "about.value3.title": "Natuurlijk ritme",
  "about.value3.body":
    "Stilte, wijngaarden en seizoenen: de essentiële luxe van een rustige pauze.",
  "about.homeEyebrow": "Het huis tussen de wijngaarden",
  "about.homeTitle": "Een verblijf met ruimte om te ademen.",
  "about.homeBody":
    "Mulimù is een intiem huis midden in het landschap van de Val Versa. Hier gaan gastvrijheid en privacy vanzelfsprekend samen, van het ontbijt tot de stilste uren van de avond.",
  "about.homeImageAlt": "Het Mulimù-huis in Montecalvo Versiggia",

  "directions.title": "Zo bereik je ons",
  "directions.eyebrow": "Waar we zijn",
  "directions.addressTitle": "In het hart van Val Versa",
  "directions.body":
    "Mulimù ligt in Montecalvo Versiggia, tussen wijngaarden, kleine dorpen en panoramische wegen van de Oltrepò Pavese. Open het volledige adres in je navigatie om rechtstreeks bij het guest house aan te komen.",
  "directions.imageAlt": "Uitzicht over Val Versa vanaf Mulimù",
  "directions.maps": "Openen in Google Maps",
  "directions.arrivalEyebrow": "Voor je aankomst",
  "directions.arrivalTitle": "We helpen je graag",
  "directions.arrivalBody":
    "Heb je vragen over de route of je aankomsttijd, bel of schrijf ons dan. We antwoorden persoonlijk met alle praktische informatie.",

  "hero.eyebrow": "Guest house — Oltrepò Pavese",
  "hero.title": "Jouw oase van rust en ontspanning",
  "hero.subtitle": "Een verfijnde ontsnapping omringd door natuur.",
  "hero.cta": "Boek nu",
  "hero.scroll": "Verder",

  "intro.eyebrow": "Welkom",
  "intro.title": "De heuvels van de Oltrepò Pavese",
  "intro.body1":
    "Een klein familiaal guest house in de heuvels van de Oltrepò Pavese: Mulimù nodigt je uit in een serene en ontspannen omgeving, waar je je hopelijk thuis voelt.",
  "intro.body2":
    "Deze plek biedt een unieke ervaring, met panorama's die met de seizoenen veranderen en een rijke wijntraditie om te ontdekken.",
  "intro.stat1": "Kamers",
  "intro.stat1v": "2",
  "intro.stat2": "Gasten",
  "intro.stat2v": "tot 5",
  "intro.stat3": "Uitzicht",
  "intro.stat3v": "heuvels en wijngaarden",

  "rooms.eyebrow": "Kamers",
  "rooms.title": "Ontdek onze kamers",
  "rooms.body":
    "Word wakker met een prachtig uitzicht op de wijnheuvels. Onze kamers zijn een rustige plek met comfortabele bedden, modern meubilair en zorgvuldig gerestaureerde antieke stukken.",
  "rooms.cta": "Bekijk de kamers",
  "rooms.detail": "Details",
  "rooms.gallery": "Galerij",
  "rooms.features": "Voorzieningen",
  "rooms.back": "Alle kamers",
  "rooms.other": "De andere kamer",
  "rooms.book": "Nu boeken",

  "services.eyebrow": "Ervaringen",
  "services.title": "Onze diensten",
  "services.body":
    "Op aanvraag organiseren wij ervaringen om de Oltrepò in alle rust te ontdekken.",
  "services.tasting.title": "Wijndegustaties",
  "services.tasting.body":
    "Bezoeken aan wijnkelders en begeleide degustaties van Pinot Nero, Bonarda en Riesling bij kleine producenten die wij persoonlijk kennen.",
  "services.trek.title": "Wandelen",
  "services.trek.body":
    "Paden over bergkammen, door bossen en stenen dorpjes, met routes voor elk tempo en kaarten van ons.",
  "services.massage.title": "Massages",
  "services.massage.body":
    "Ontspannende behandelingen in huis, op reservering, na een dag in de buitenlucht.",
  "services.cta": "Schrijf ons voor jouw gewenste ervaring",

  "place.eyebrow": "De streek",
  "place.title": "Oltrepò Pavese",
  "place.body":
    "Zachte hellingen, wijngaarden tot aan de horizon en panorama's die met de seizoenen veranderen. Een oud en nog authentiek wijnland, ruim een uur van Milaan.",
  "place.p1.title": "Wijn",
  "place.p1.body":
    "Een van de Italiaanse bakermatten van Pinot Nero en klassieke mousserende wijnen.",
  "place.p2.title": "Keuken",
  "place.p2.body": "Trattoria's in de heuvels, salumi, stoofgerechten en verse pasta.",
  "place.p3.title": "Stilte",
  "place.p3.body": "Rustige wegen, stenen dorpjes en sterrenhemels.",

  "contact.eyebrow": "Contact",
  "contact.title": "Kom ons bezoeken",
  "contact.body":
    "Schrijf ons voor beschikbaarheid, langere verblijven of jouw ervaring in de Oltrepò. Wij antwoorden persoonlijk.",
  "contact.email": "E-mail",
  "contact.where": "Waar we zijn",
  "contact.whereValue": "Oltrepò Pavese, Lombardije, Italië",
  "contact.checkin": "Check-in",
  "contact.checkinValue": "vanaf 15:00 — check-out tot 10:30",
  "contact.write": "Schrijf ons",

  "footer.tagline": "Familiaal guest house in de heuvels van de Oltrepò Pavese.",
  "footer.rights": "Alle rechten voorbehouden.",
  "footer.lang": "Taal",
};

const DICTS: Record<Locale, Dict> = { it, en, fr, de, nl };

type I18nValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("it");

  useEffect(() => {
    const stored = window.localStorage.getItem("mulimu-locale") as Locale | null;
    if (stored && LOCALES.includes(stored)) {
      setLocaleState(stored);
      return;
    }
    const nav = window.navigator.language.slice(0, 2) as Locale;
    if (LOCALES.includes(nav)) setLocaleState(nav);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    window.localStorage.setItem("mulimu-locale", l);
  }, []);

  const t = useCallback((key: string) => DICTS[locale][key] ?? DICTS.it[key] ?? key, [locale]);

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}

export const SITE_URL = "https://mulimu.it";

export const CONTACT_EMAIL = "info@mulimu.it";
export const CONTACT_PHONE = "+39 378 011 1325";
export const CONTACT_PHONE_HREF = "+393780111325";

export const ADDRESS = {
  street: "Frazione Piane, 4",
  locality: "Montecalvo Versiggia (PV)",
  postalCode: "27047",
  country: "Italia",
} as const;

export const FULL_ADDRESS = `${ADDRESS.street}, ${ADDRESS.postalCode} ${ADDRESS.locality}, ${ADDRESS.country}`;

export const BOOKING_URL = "https://www.booking.com/hotel/it/mulimu-guesthouse.it.html";
export const MAP_COORDINATES = "44.9650836,9.2821449";
export const MAP_URL = "https://maps.app.goo.gl/dLGMmy5qdp8RV6C37";
export const MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(MAP_COORDINATES)}&z=16&output=embed`;

export const absoluteUrl = (path = "/") => new URL(path, SITE_URL).toString();

export const SITE_URL = "https://mulimu.it";

export const CONTACT_EMAIL = "info@mulimu.it";
export const CONTACT_PHONE = "+39 378 011 1325";
export const CONTACT_PHONE_HREF = "+393780111325";

export const ADDRESS = {
  street: "Frazione Piane, 4",
  locality: "Montecalvo Versiggia (PV)",
  country: "Italia",
} as const;

export const FULL_ADDRESS = `${ADDRESS.street}, ${ADDRESS.locality}, ${ADDRESS.country}`;

export const BOOKING_URL = "https://www.booking.com/hotel/it/mulimu-guesthouse.it.html";
export const MAP_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(FULL_ADDRESS)}`;

export const absoluteUrl = (path = "/") => new URL(path, SITE_URL).toString();

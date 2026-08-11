# Mulimù Guest House

Sito ufficiale di Mulimù, guest house a gestione familiare a Montecalvo Versiggia,
tra le colline e i vigneti dell’Oltrepò Pavese.

Il progetto usa TanStack Start, React 19, Tailwind CSS 4 e Nitro. Tutte le immagini
sono versionate nel repository e il sito non richiede servizi esterni o variabili
d’ambiente per essere eseguito.

## Requisiti

- Node.js 22 o successivo
- npm 10 o successivo

## Sviluppo locale

```bash
npm ci
npm run dev
```

L’applicazione sarà disponibile all’indirizzo mostrato da Vite, normalmente
`http://localhost:5173`.

## Verifica e build

```bash
npm run check
```

Il comando esegue type-check, lint e build di produzione. Per avviare soltanto la
build:

```bash
npm run build
```

L’output server e client viene generato nella cartella `.output`.

## Deploy su Vercel

1. Importare questo repository in Vercel.
2. Lasciare che Vercel rilevi automaticamente TanStack Start.
3. Non aggiungere variabili d’ambiente: il progetto non ne richiede.
4. Eseguire il deploy con il comando di build predefinito `npm run build`.

## Pagine principali

- `/` — Home
- `/about` — La nostra storia
- `/la-struttura` — La struttura
- `/rooms` — Le camere
- `/rooms/la-mansarda` e `/rooms/il-giardino` — Dettaglio camere
- `/dove-siamo` — Indirizzo e contatti

I contenuti dell’interfaccia sono disponibili in italiano, inglese, francese,
tedesco e olandese. L’italiano è la lingua predefinita.

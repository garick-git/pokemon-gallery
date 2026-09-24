# Pokémon Gallery

A responsive Pokémon gallery built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**, powered by the [PokéAPI](https://pokeapi.co/).

**Live demo:** [LIVE_VERCEL_URL](https://pokemon-gallery.site/)

![Pokémon Gallery screenshot](./public/screenshot.png)

## Features

- **Responsive grid:** 1 to 4 columns depending on screen size
- **Parallel data fetching:** the list endpoint only returns names and URLs, so the app fetches the list first, then loads every Pokémon's details at once with `Promise.all` instead of one at a time
- **Type safety:** `Pokemon` and `Stat` interfaces modeled on the real API response
- **Loading, error, and success states:** handled explicitly, so the user always knows what's happening
- **Color-coded stats:** HP, Attack, Defense, and Speed use familiar gaming color conventions
- **Accessibility:** descriptive alt text, `aria-live` for loading, `role="alert"` for errors, and `aria-expanded` on the collapsible summary panel

## Tech Stack

| Layer | Tools |
| --- | --- |
| Framework | Next.js (App Router), React |
| Language | TypeScript |
| Styling | Tailwind CSS, `next/font` (Fredoka) |
| Data | PokéAPI (REST) |
| Deployment | Vercel |

## Project Structure

```
app/
  layout.tsx              Root layout and font setup
  page.tsx                Data fetching, loading/error states, results grid
components/
  PokemonCard.tsx         Reusable card: sprite, name, ID, color-coded stats
  AssignmentSummary.tsx   Collapsible panel explaining build decisions
types.ts                  Pokemon and Stat interfaces
```

## Running Locally

```bash
git clone https://github.com/garick-git/pokemon-gallery.git
cd pokemon-gallery
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Author

**Garick Mendez**: [garickm.com](https://www.garickm.com) · [LinkedIn](https://www.linkedin.com/in/garick-mendez) · [GitHub](https://github.com/garick-git)
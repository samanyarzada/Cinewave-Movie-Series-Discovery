# Cinewave — Movie & Series Discovery

Cinewave is a polished, responsive React experience for discovering films and TV series. It was designed as a portfolio-ready front-end demo with a cinematic dark interface, thoughtful typography, micro-interactions, and a curated sample catalogue.

> **Demo note:** Cinewave is not a real streaming service. The player is an interactive UI demonstration and does not stream full-length movies or episodes.

## Preview features

- **Home:** Featured title, trending picks, recent releases, genre shortcuts, editorial recommendations, and watchlist CTA.
- **Movies & TV Series:** Dedicated catalogues with sorting, free-text search, genre filtering, year ranges, minimum ratings, and resettable filters.
- **Genre explorer:** Browse the library by genre and jump into genre-specific results.
- **Search:** Search titles, descriptions, cast, directors, genres, and release years.
- **Title details:** Poster and backdrop artwork, synopsis, cast, director, genres, ratings, title facts, similar titles, and a share action.
- **My Watchlist:** Add/remove titles and retain the list in browser `localStorage`.
- **Demo player:** Custom player UI with interactive play/pause, scrub bar, mute control, settings popover, and fullscreen toggle.
- **About & FAQ:** Product story, values, project notes, and demo clarifications.
- **Responsive navigation:** Desktop nav, mobile menu, keyboard-dismissable search dialog, and focus-visible states.
- **Portfolio touches:** Custom visual system, Google Fonts, SVG favicon, metadata, animations, empty states, 404 page, and reduced-motion support.

## Built with

- React
- Vite
- React Router
- Lucide React
- Modern CSS (Grid, Flexbox, custom properties, responsive breakpoints)
- `localStorage` for the watchlist

## Getting started

### Requirements

- Node.js 20.19+ or 22.12+ (recommended for current Vite versions)
- npm

### Install and run

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

### Production build

```bash
npm run build
npm run preview
```

The production-ready static site is generated in `dist/`.

## Project structure

```text
cinewave-project/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Brand.jsx
│   │   ├── Footer.jsx
│   │   ├── GenreTile.jsx
│   │   ├── Hero.jsx
│   │   ├── MovieCard.jsx
│   │   ├── MovieGrid.jsx
│   │   ├── Navbar.jsx
│   │   ├── PromoBand.jsx
│   │   └── SectionHeading.jsx
│   ├── context/
│   │   └── WatchlistContext.jsx
│   ├── data/
│   │   └── titles.js
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Catalog.jsx
│   │   ├── Details.jsx
│   │   ├── Genres.jsx
│   │   ├── Home.jsx
│   │   ├── NotFound.jsx
│   │   ├── Search.jsx
│   │   ├── Watch.jsx
│   │   └── Watchlist.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── .gitignore
├── index.html
├── package.json
└── README.md
```

## Routes

| Route | Description |
| --- | --- |
| `/` | Home |
| `/movies` | Movie catalogue |
| `/series` | TV series catalogue |
| `/genres` | Genre explorer |
| `/search?q=interstellar` | Search results |
| `/title/:id` | Title detail page |
| `/watch/:id` | Demo player |
| `/watchlist` | Saved titles |
| `/about` | About and FAQ |

## Customization

- **Catalogue data:** Edit `src/data/titles.js`. Add an item with a unique `id`, `type`, `title`, `year`, `rating`, `genres`, `poster`, `backdrop`, `description`, `director`, and `cast` fields.
- **Brand colours and layout:** Update CSS variables at the top of `src/styles.css`.
- **Featured title:** Set `featured: true` on a title in `src/data/titles.js`.
- **Trending titles:** Set `trending: true` for inclusion in trending/discovery sections.

Artwork currently loads from TMDB's public image CDN, and typography is loaded from Google Fonts. An internet connection is needed to load those remote assets. For a fully self-hosted deployment, download properly licensed assets and update the URLs.

## Deployment

This is a Vite SPA and can be deployed to GitHub Pages, Netlify, Vercel, or any static host. For GitHub Pages, configure the workflow/base path for your repository and ensure SPA routes fall back to `index.html`. For the simplest portfolio demo deployment, Netlify or Vercel will handle route fallback with minimal setup.

## Disclaimer

Cinewave is an independent portfolio/demo concept and is not affiliated with studios, distributors, TMDB, or any streaming brand. Film names, metadata, and remote artwork are used for illustrative demonstration purposes. The player does not provide full-length content.

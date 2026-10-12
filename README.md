# Playroom — Game Hub

A responsive single-page launcher for the game projects in this repository. The original game folders and their assets are kept in place; the root `index.html` provides the shared interface.

## Games

### Browser games
- **A Dark Room** — `/adarkroom/index.html`
- **Clumsy Bird** — `/clumsy-bird/index.html`
- **Hextris** — `/hextris/index.html`

These launch inside the page's built-in player. The Open tab and Fullscreen controls are available as fallbacks.

### Desktop source projects
- **Snowboarder** — `/Snowboarder`
- **Tux Vs Dragon** — `/TuxVsDragon`

These folders contain native source/build assets, not browser-ready builds, so the hub links to their repository files instead of pretending they can run in an iframe.

## Vercel deployment

This repository is static-first and does not need a build step for the existing browser games. Vercel serves the root page and the original game folders as static files. The `api/` folder contains a Node.js serverless function.

1. Import this GitHub repository into Vercel.
2. Select the `unified-game-hub` branch to preview this version, or merge it into your production branch when ready.
3. Keep the root directory set to `./`.
4. Use the default build settings; no framework preset or build command is required for the static site.
5. Deploy, then check `/api/health` to confirm the serverless function is responding.

## Local development

Install the Vercel CLI and run:

```bash
npm run dev
```

Then open the local URL shown by the CLI. To deploy to production from a linked Vercel project:

```bash
npm run deploy
```

The health endpoint is available at `/api/health`.

## Notes

- No database or environment variables are required for the current features.
- The serverless health endpoint is a basic runtime check, not a game API or database.
- Original game licenses and attribution files remain in each game's directory. Review those terms before redistributing or modifying the game sources.

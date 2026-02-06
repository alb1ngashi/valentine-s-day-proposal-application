# Cupid Ask

[cloudflarebutton]

## Overview

Cupid Ask is a modern full-stack web application built with React, TypeScript, and Cloudflare Workers. It features a responsive UI with dark/light theme support, API backend powered by Hono, and seamless integration for Cloudflare deployment. This template provides a production-ready starting point for building interactive apps with state-of-the-art tooling.

## Key Features

- **Modern React Stack**: React 18, React Router, Tanstack Query for data fetching
- **Beautiful UI**: Shadcn/UI components, Tailwind CSS, New York style design system
- **Theming**: Automatic dark/light mode with persistence
- **API Backend**: Hono routing on Cloudflare Workers with CORS, logging, and error handling
- **Type-Safe**: Full TypeScript support across frontend and backend
- **Responsive Design**: Mobile-first with sidebar layout support
- **Developer Experience**: Hot reload, error boundaries, client error reporting
- **Cloudflare Optimized**: Pages for static assets, Workers for dynamic APIs
- **Animations & Effects**: Framer Motion, Tailwind animations
- **Forms & Validation**: React Hook Form + Zod

## Tech Stack

### Frontend
- React 18, TypeScript, Vite
- Tailwind CSS, Shadcn/UI (full component library)
- React Router, Tanstack Query, Zustand, Immer
- Lucide React icons, Sonner toasts
- Framer Motion, Recharts

### Backend
- Hono (routing)
- Cloudflare Workers/Pages
- TypeScript, Workers Types

### Tools
- Bun (package manager)
- Wrangler (Cloudflare CLI)
- ESLint, TypeScript strict mode

## Quick Start

1. **Clone & Install**
   ```bash
   git clone <your-repo-url>
   cd cupid-ask-v1-ygqxkah0h1jbfxr4lmsar
   bun install
   ```

2. **Generate Worker Types** (for TypeScript autocomplete)
   ```bash
   bun run cf-typegen
   ```

3. **Development**
   ```bash
   bun dev
   ```
   - Frontend served at `http://localhost:3000`
   - Edit `src/pages/HomePage.tsx` for UI changes
   - Add API routes in `worker/userRoutes.ts`

## Development

### Frontend
- Hot reload enabled via Vite
- Routes in `src/main.tsx`
- Components in `src/components/` (use Shadcn primitives)
- Custom hooks in `src/hooks/`
- Tailwind config: `tailwind.config.js`

### Backend (Workers API)
- Add routes in `worker/userRoutes.ts` (e.g., `app.get('/api/example', ...)`)
- Core utils: `worker/core-utils.ts` (do not modify)
- `/api/health` and `/api/client-errors` endpoints available
- Type-safe `Env` interface

### Commands
| Script | Description |
|--------|-------------|
| `bun dev` | Start Vite dev server (frontend preview) |
| `bun run cf-typegen` | Generate Worker bindings types |
| `bun lint` | Run ESLint |
| `bun build` | Build for production |
| `bun preview` | Preview production build |
| `bun run deploy` | Build & deploy to Cloudflare |

**Note**: For full-stack local testing (frontend + API), use `wrangler dev` after `bun build` or deploy to Cloudflare.

## Customization

- **UI**: Replace `src/pages/HomePage.tsx`. Use `AppLayout` for sidebar apps.
- **API**: Extend `worker/userRoutes.ts`. Access `env.ASSETS` for static fetches.
- **Theme**: Toggle via `ThemeToggle`. Custom CSS vars in `src/index.css`.
- **Shadcn**: Add components via `npx shadcn@latest add <component>`.
- **Environment**: Edit `wrangler.jsonc` for Cloudflare config.

## Deployment

Deploy to Cloudflare Pages & Workers in one command:

```bash
bun run deploy
```

This builds static assets and deploys the Worker.

**Configure Deployment**:
1. Install Wrangler: `bun add -g wrangler`
2. Login: `wrangler login`
3. Set vars/secrets: `wrangler secret put <KEY>`
4. Deploy: `bun run deploy`

For CI/CD, use the Wrangler GitHub Action or direct deploy.

[cloudflarebutton]

## Contributing

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

MIT License. See [LICENSE](LICENSE) for details.
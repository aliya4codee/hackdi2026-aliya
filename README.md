# HackDI 2026: TanStack Start + Cloudflare D1 starter

A tiny, intentionally public task list for a workshop or hackathon starter. It demonstrates one complete full-stack path:

```text
React screen -> TanStack Start server function -> Cloudflare Worker binding -> D1 database
```

The application lives in `apps/web`; the repository root is an npm workspace so future hackathon projects can add more apps or shared packages without changing the setup.

> [!WARNING]
> This is a teaching app, not a production task manager. Anyone who knows the deployed URL can add, edit, complete, or delete tasks. There is no authentication, ownership, rate limiting, or secret data.

## What you need

- A [Git](https://git-scm.com/downloads) installation.
- [Node.js 22 LTS or newer](https://nodejs.org/). Node includes npm; check both with `node --version` and `npm --version`.
- A free [Cloudflare account](https://dash.cloudflare.com/sign-up). You do not need a credit card for this starter's expected free-tier use.
- A terminal and a code editor. [VS Code](https://code.visualstudio.com/) is a good beginner choice.

## 1. Clone and run locally

Replace `<repository-url>` with the GitHub or other Git-host URL shared by your instructor:

```bash
git clone <repository-url>
cd hackdi-2026-monorepo
npm install
```

This repository is an npm workspace. Run its everyday commands from the repository root:

```bash
npm run dev
npm run typecheck
npm run build
```

`npm run dev` starts the local Worker-powered development server. Open the URL it prints (normally `http://localhost:3000`). The first run needs the D1 setup in the next section because the app deliberately reads its database on the server.

### Checkpoint: what just happened?

`apps/web` is a TanStack Start React app. Vite runs it locally using Cloudflare's Worker runtime, so D1 bindings behave much like they will after deployment.

## 2. Create your own D1 database

Each participant should create a separate database. Choose a globally recognizable name such as `hackdi-tasks-your-name`.

First, log in through Wrangler (Cloudflare's command-line tool) and confirm which account is active:

```bash
npx --prefix apps/web wrangler login
npx --prefix apps/web wrangler whoami
```

Create the database:

```bash
npm run db:create -- hackdi-tasks-your-name
```

Wrangler prints a `database_name` and a UUID `database_id`. Open `apps/web/wrangler.jsonc` and replace all three teaching placeholders:

- `name`: use a unique Worker name, for example `hackdi-tasks-your-name`.
- `database_name`: the D1 database name you just created.
- `database_id`: the UUID Wrangler printed.

Keep the binding name as `DB` and keep `preview_database_id` as-is. The database ID is configuration, not a password; never put API tokens or other secrets in this file.

Generate the TypeScript declaration for the `DB` binding, then create the local SQLite schema:

```bash
npm run cf-typegen
npm run db:migrate:local
```

If Wrangler asks for confirmation, answer `y`. Local D1 data persists in `apps/web/.wrangler/`, which Git ignores. Now run `npm run dev`, add a task, refresh the browser, and confirm it is still there.

### Checkpoint: D1 migrations

`apps/web/migrations/0001_create_tasks.sql` defines the `tasks` table. `--local` applies it to the local D1 database used by development; it does not modify the database on Cloudflare.

## 3. Deploy to Cloudflare Workers

Apply exactly the same migration to your remote D1 database before deploying:

```bash
npm run db:migrate:remote
npm run deploy
```

The deploy command builds TanStack Start, uploads static assets, and deploys the server-side application as a Cloudflare Worker. Wrangler prints its public `workers.dev` URL. Open it and repeat the create, edit, complete, and delete checks.

To preview a production build locally before deployment, use:

```bash
npm run preview
```

### Checkpoint: server functions

The page route loads tasks with a TanStack Start server function. Creating, editing, toggling, and deleting tasks call other typed server functions. Those functions run in the Worker and access `env.DB`; the browser never receives Cloudflare credentials or direct database access.

## Useful commands

- `npm run dev` starts local development.
- `npm run typecheck` checks TypeScript without writing output.
- `npm run build` creates a production build.
- `npm run preview` runs the production build locally.
- `npm run cf-typegen` generates the `DB` Worker binding types.
- `npm run db:migrate:local` applies SQL migrations to local D1.
- `npm run db:migrate:remote` applies SQL migrations to remote D1.
- `npm run deploy` builds and deploys the Worker.

To make another migration, create it from the repository root and edit the generated SQL file:

```bash
npm run db:migration:create -- DB add-a-column
```

## Troubleshooting

- **`wrangler login` does not open a browser:** copy the printed URL into a browser where you are logged in to Cloudflare, then return to the terminal.
- **`DB` is missing or type checking fails:** confirm `wrangler.jsonc` has a D1 entry with `binding` set to `DB`, then run `npm run cf-typegen` again.
- **The local app says `no such table: tasks`:** run `npm run db:migrate:local`, stop the dev server, and start it again.
- **The deployed app says `no such table: tasks`:** run `npm run db:migrate:remote` and redeploy. Local and remote D1 databases are separate.
- **Port 3000 is already busy:** stop the other dev server, or run `npm run --workspace @hackdi/web dev -- --port 3001`.
- **Deploy rejects the Worker or D1 name:** use lowercase letters, digits, and hyphens; the name must be available in your account.

Read the official references when you want to go further:

- [TanStack Start on Cloudflare Workers](https://developers.cloudflare.com/workers/framework-guides/web-apps/tanstack-start/)
- [D1 migrations and Wrangler commands](https://developers.cloudflare.com/d1/wrangler-commands/)

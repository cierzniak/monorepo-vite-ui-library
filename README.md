# Monorepo with Vite-based UI library using SCSS

Monorepo (Turborepo) with Next.js, React and Vite apps & Vite-based UI library with SCSS.

## Repository structure
```
├── apps
│   ├── next
│   ├── react
│   └── vite
└── packages
    └── ui
```

## Development
Run all apps in development mode by installing dependencies and running dev:
```shell
yarn install --frozen-lockfile
yarn dev
```
then you can run all applications via links:
* **Next.js** [localhost:3000](http://localhost:3000/),
* **React** [localhost:3001](http://localhost:3001/),
* **Vite (React)** [localhost:3002](http://localhost:3002/),
* **Storybook for UI library** [localhost:6006](http://localhost:6006/).

## Production
All apps are production ready, install dependencies and run build procedure:
```shell
yarn install --frozen-lockfile
yarn build
```
then you can run all applications from directories:
* **Next.js**: `apps/next/.next` and `apps/next/package.json` (need Node.js runtime),
* **React**: `apps/react/dist` (webserver),
* **Vite (React)**: `apps/vite/dist` (webserver),
* **Storybook for UI library**: `packages/ui/dist-docs` (webserver).

---

# Turborepo starter

This is an official Yarn v1 starter turborepo.

## What's inside?

This turborepo uses [Yarn](https://classic.yarnpkg.com/lang/en/) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org) app
- `web`: another [Next.js](https://nextjs.org) app
- `ui`: a stub React component library shared by both `web` and `docs` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Setup

This repository is used in the `npx create-turbo` command, and selected when choosing which package manager you wish to use with your monorepo (Yarn).

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
yarn run build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
yarn run dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching (Beta)](https://turborepo.org/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching (Beta) you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Pipelines](https://turborepo.org/docs/core-concepts/pipelines)
- [Caching](https://turborepo.org/docs/core-concepts/caching)
- [Remote Caching (Beta)](https://turborepo.org/docs/core-concepts/remote-caching)
- [Scoped Tasks](https://turborepo.org/docs/core-concepts/scopes)
- [Configuration Options](https://turborepo.org/docs/reference/configuration)
- [CLI Usage](https://turborepo.org/docs/reference/command-line-reference)

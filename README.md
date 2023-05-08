# Sveltekit Sanity Starter

Everything you need to build a Sveltekit Project powered by an embedded [`Sanity Studio`](https://sanity.io), it includes TailwindCSS for fun.

## Creating a Sanity Project

https://www.sanity.io/docs/create-a-sanity-project

This part is a little bit clumsy as I'm writing this. I'm working on a better way to do this. For now, you'll need to create a new Sanity project and then copy the project ID into the `.env` file in the root of the project.

## Add Environment Variables

Change the name of the `.env.example` file to `.env` and add your Sanity Project ID to the file for VITE_SANITY_PROJECT_ID.

````bash

## Creating the project

Clone the repo or use the template button on Github. CD into the project and install the dependencies using the package manager of your choice. I'll be using `pnpm` for this example.

```bash
# install packages
pnpm install
````

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
# start the server
pnpm dev

# or start the server and open the app in a new browser tab
pnpm dev --open
```

## Building

To create a production version of your app:

```bash
pnpm build
```

You can preview the production build with `pnpm preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

# Sveltekit Sanity Starter

Everything you need to build a Sveltekit Project powered by an embedded [`Sanity Studio`](https://sanity.io), it includes TailwindCSS for fun.

## Creating the project

Clone the repo or use the template button on Github. CD into the project and install the dependencies using the package manager of your choice. I'll be using `pnpm` for this example.

```bash
# install packages
pnpm install
```

## Setup the Sanity Studio

https://www.sanity.io/docs/create-a-sanity-project

```bash
pnpm create sanity@latest init --env
```

This will:

1. Ask you to select or create a Sanity project and dataset
2. Output a `.env` file with some environment variables

- SANITY_PROJECT_ID="xxxxxx"
- SANITY_DATASET="production"

## Add Environment Variables

1. Copy the contents of the `.env.example` file to `.env` after the Sanity environment variables.
2. Replace the values for

- VITE_SANITY_PROJECT_ID="xxxxxx" with the SANITY_PROJECT_ID variable and delete the SANITY_PROJECT_ID variable.
- VITE_SANITY_DATASET="production" with the SANITY_DATASET variable and delete the SANITY_DATASET variable.

## Development

---

Once you've created a project and installed dependencies with you can run the development server locally to view the project.

---

```bash
# start the server
pnpm dev

# or start the server and open the app in a new browser tab
pnpm dev --open
```

## Sanity Studio

The Sanity Studio is embedded in the project and can be accessed at `/studio`.

Once you have logged into your studio look at Settings -> Greeting to see the default greeting. You can change this in the Sanity Studio and it will update the app.

You can build more schemas at `src/lib/sanity/schemas`.

## Building

To create a production version of your app:

```bash
pnpm build
```

You can preview the production build with `pnpm preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

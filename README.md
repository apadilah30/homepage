This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Deployment Guide

Below are several ways to deploy this application.

### 1) Docker

- Build the Docker image:

```bash
docker build -t portfolio-agus:latest .
```

- Run the container (default port 3000):

```bash
docker run --rm -p 3000:3000 portfolio-agus:latest
```

Note: this assumes the `Dockerfile` in the project root handles the build step and starts the app (e.g. with `npm run start`) for production.

### 2) Docker Compose

If you prefer `docker-compose` (a `docker-compose.yml` is included), run:

```bash
docker-compose up --build
```

Then open http://localhost:3000.

### 3) Deploy to Vercel (Next.js)

The easiest option for Next.js apps is Vercel. Connect your repository to Vercel or use the CLI:

```bash
npx vercel
```

Follow the prompts to select scope, project, and environment variables. Vercel will build the Next.js app automatically.

### 4) Environment Configuration

If the app requires production environment variables, create a `.env.production` file or set them on your hosting platform (Vercel, Docker, etc). Example:

```
NEXT_PUBLIC_API_URL=https://api.example.com
NODE_ENV=production
```

### 5) Using Nginx (optional)

A sample `nginx.conf` is provided for reverse proxy or load-balancer setups. Adjust as needed and run Nginx in front of the Node/Next.js application.

## Contact webhook & repository secrets

This project can forward contact form submissions to an external webhook. To enable it, set the following secrets in your GitHub repository (or environment variables on your server):

- `CONTACT_WEBHOOK`: URL to receive POST requests from the contact form (JSON payload).
- `CONTACT_WEBHOOK_SECRET` (optional): HMAC secret used to sign the payload. When set, requests will include the header `x-hub-signature-256: sha256=<hex>`.

Add secrets via the GitHub UI: Repository → `Settings` → `Secrets and variables` → `Actions` → `New repository secret`.

Or using the `gh` CLI (run inside the repository):

```bash
gh secret set CONTACT_WEBHOOK --body "https://hooks.example.com/contact"
gh secret set CONTACT_WEBHOOK_SECRET --body "$(cat ~/secrets/contact_webhook_secret)"
```

The contact endpoint is `POST /api/contact` and the payload looks like:

```json
{
	"name": "Name",
	"email": "name@example.com",
	"message": "Hello",
	"receivedAt": "2026-05-17T..."
}
```

If `CONTACT_WEBHOOK` is not set, the server will append submissions to `contacts.log` (useful for self-hosted deployments).


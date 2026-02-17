# Nguyen Beauty

A simple web app for viewing skincare and makeup routines as social-style posts. Built with Next.js, Tailwind CSS, and TypeScript.

## Prerequisites

You need **Node.js** installed on your machine. This gives you both `node` and `npm` (the package manager).

### Install Node.js

1. Go to [https://nodejs.org](https://nodejs.org)
2. Download the **LTS** version (recommended for most users)
3. Run the installer and accept the default settings
4. Restart your terminal after installation

Verify it worked by running:

```bash
node --version
npm --version
```

You should see version numbers printed (e.g. `v24.13.1` and `11.8.0`).

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/nguyen-beauty.git
cd nguyen-beauty
```

### 2. Install dependencies

```bash
npm install
```

This reads `package.json` and installs everything the app needs into a `node_modules/` folder. You only need to run this once (or again if dependencies change).

### 3. Run the development server

```bash
npm run dev
```

### 4. Open in your browser

Go to [http://localhost:3000](http://localhost:3000)

You should see the routine feed with 5 skincare/makeup routine cards. Click any card to see the full step-by-step routine.

Press `Ctrl + C` in the terminal to stop the server.

## Project Structure

```
src/
├── lib/
│   └── routines.ts              # Hardcoded routine data and TypeScript types
└── app/
    ├── layout.tsx               # Shared layout (header, page wrapper)
    ├── globals.css              # Global styles (Tailwind CSS)
    ├── page.tsx                 # Home page — routine feed
    └── routines/
        └── [id]/
            └── page.tsx         # Routine detail page
```

## Routes

| URL | Page |
|---|---|
| `/` | Home — feed of all routines |
| `/routines/[id]` | Detail page for a specific routine |

## Tech Stack

| Tool | Purpose |
|---|---|
| [Next.js](https://nextjs.org) 16 | React framework with App Router |
| [Tailwind CSS](https://tailwindcss.com) 4 | Utility-first CSS styling |
| [TypeScript](https://www.typescriptlang.org) | Type-safe JavaScript |

## Other Commands

```bash
npm run build    # Create a production build
npm run start    # Run the production build locally
npm run lint     # Check for code issues
```

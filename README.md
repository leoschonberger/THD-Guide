# THD-Guide

This project is aimed to help empower University of Oregon members to resolve tech issues on their own. It's a quick and easy to use front end for the existing UO service portal page.
Students can access this site by tapping their phone on one of the NFC tags located at print stations and at the Tech Help Desk in the Knight Library.

_This website is not currently in use at the University of Oregon._

## What is it?

This site provides a guide to quick links for Printing, Wifi, and Password reset resources.

It currently covers:

- Printing from UO computers + Personal Devices
- Connecting to the "UO Secure" Wifi network
- Resetting your DuckID and DuckWeb passwords

## What is the tech stack?

This project is built on the [T3 Stack](https://create.t3.gg/). It uses the following technologies:

- [TypeScript](https://www.typescriptlang.org) 5.6+
- [Next.js](https://nextjs.org) 15.0+
- [React](https://reactjs.org) 18.3+
- [Tailwind CSS](https://tailwindcss.com) 3.4+
- [tRPC](https://trpc.io) 11.0+
- [TanStack Query](https://tanstack.com/query) (React Query) 5.0+
- [Vercel](https://vercel.com) for deployment

## Want to contribute?

That's great! If you want to contribute or have feature requests, please feel free to pull this repo and submit a PR. If you have any questions, feel free to reach out either through GitHub.

## How do I build this?

### Prerequisites
- [Node.js](https://nodejs.org/) 18.0+ and npm

### Setup
1. Clone the repo
   ```bash
   git clone https://github.com/leoschonberger/THD-Guide.git
   cd THD-Guide
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for production
```bash
npm run build
npm start
```

### Other commands
- `npm run lint` - Run ESLint

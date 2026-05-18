# RentalCar

A frontend application for a car rental service, built with Next.js and TypeScript. Integrated with the GoIT public API (`https://car-rental-api.goit.study`).

- **Live demo:** https://rentalcar-eosin.vercel.app
- **Design:** [Figma](https://www.figma.com/design/A25LdVK3gZOPJaedrkTwWQ/Rental-Car)

## Tech Stack

- **Next.js 16** (App Router) + **TypeScript**
- **TanStack Query** — caching, `useInfiniteQuery` for paginated catalog, `useMutation` for booking
- **Axios** — HTTP client
- **React Hook Form** — form state and validation
- **react-select** — custom dropdowns for filters
- **react-number-format** — mileage input formatting
- **react-hot-toast** — toast notifications
- **react-spinners** — loading indicators
- **CSS Modules** — scoped styling
- **next/font** — optimized self-hosted fonts (Manrope, Inter)

## Features

- **Home page** with a full-screen hero section and a CTA button to the catalog.
- **Catalog page** with paginated cars list:
  - Backend filtering by brand, hourly price, and mileage range (From / To).
  - "Load more" pagination that preserves the active filters.
  - Each card has a "Read more" button that opens the car details in a new tab.
- **Car details page** with full information, photo, and a rental form.
- **Booking form** with validation (required name, valid email, optional comment) and toast notifications on submit.
- **SEO:** dynamic `<title>`, `<meta description>`, and Open Graph tags for every page.
- **Loaders** shown during async operations.

## Getting Started

Requires Node.js 18.18+.

\`\`\`bash
git clone https://github.com/Viktor-Yashchuk/rentalcar.git
cd rentalcar
npm install
\`\`\`

Create a `.env.local` file in the project root:

\`\`\`
NEXT_PUBLIC_API_URL=https://car-rental-api.goit.study
\`\`\`

## Available Scripts

| Command         | Description                  |
| --------------- | ---------------------------- |
| `npm run dev`   | Start the development server |
| `npm run build` | Build for production         |
| `npm run start` | Run the production build     |
| `npm run lint`  | Run ESLint                   |

The app will be available at http://localhost:3000.

## Project Structure

\`\`\`
app/
├── catalog/
│ ├── [carId]/
│ │ ├── page.tsx
│ │ ├── loading.tsx
│ │ └── not-found.tsx
│ ├── CatalogClient.tsx
│ └── page.tsx
├── layout.tsx
├── page.tsx
└── globals.css

components/ # Header, CarCard, CarDetails, Filters, CustomSelect, RentForm, Loader, TanStackProvider
hooks/ # useFilters
lib/api/ # axios instance and API functions
types/ # shared TypeScript interfaces
public/ # sprite.svg, Hero.webp, favicon, icons
\`\`\`

## Author

**Viktor Yashchuk** — [GitHub](https://github.com/Viktor-Yashchuk)

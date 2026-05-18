import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header/Header";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ['400', '500', '600','700'],
  display: 'swap',
  variable: '--font-manrope'
});

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['400'],
  display: 'swap',
  variable: '--second-family',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://rentalcar-eosin.vercel.app'),

  title: 'RentalCar | Car Rental Service',
  description: 'A platform for renting cars with ease and convenience',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'RentalCar | Car Rental Service',
    description: 'A platform for renting cars with ease and convenience',
    url: 'https://rentalcar-eosin.vercel.app',
    images: [
      {
        url: '/Hero.webp',
        width: 1200,
        height: 630,
        alt: 'RentalCar Hero Image',
      },
    ],
  },
};

export default function RootLayout({ children }:{children: React.ReactNode}) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <body>
        <TanStackProvider>
          <Header/>
          <main>
            {children}
          </main>
        </TanStackProvider>
      </body>
    </html>
  );
}

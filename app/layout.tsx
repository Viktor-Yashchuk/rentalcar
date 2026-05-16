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
  title: { default: 'RentalCar', template: '%s | RentalCar' },
  description: 'Оренда автомобілів - каталог, фільтри, миттєве бронювання.',
};

export default function RootLayout({ children }:{children: React.ReactNode}) {
  return (
    <html lang="uk" className={`${manrope.variable} ${inter.variable}`}>
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

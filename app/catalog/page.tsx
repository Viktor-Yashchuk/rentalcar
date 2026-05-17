import type { Metadata } from "next";
import { CatalogClient } from "./CatalogClient";

export const metadata: Metadata = {
    title: 'Catalog',
    description: 'Browse the car catalog — choose a car by brand, price, or mileage.',
};

export default function CatalogPage() {
    return <CatalogClient />
}
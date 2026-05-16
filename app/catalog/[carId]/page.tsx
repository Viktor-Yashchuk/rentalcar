import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCarById } from "@/lib/api/api";
import { CarDetails } from "../../../components/CarDetails/CarDetails";

interface PageProps {
    params: Promise<{ carId: string }>;
}

export async function generateMetadata({params}: PageProps): Promise<Metadata> {
    const { carId } = await params;
    try {
        const car = await getCarById(carId);
        return {
            title: `${car.brand} ${car.model}, ${car.year}`,
            description: car.description,
            openGraph: {
                title: `${car.brand} ${car.model}, ${car.year}`,
                description: car.description,
                images: car.img ? [{ url: car.img }] : undefined,
            },
        };
    } catch {
        return { title: 'Car details' };
    }
}

export default async function CarPage({ params }: PageProps) {
    const { carId } = await params;

    try {
        const car = await getCarById(carId);
        return <CarDetails car={car} />
    } catch {
        notFound();
    }
}
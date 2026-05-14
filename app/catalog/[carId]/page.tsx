interface CarPageProps {
    params: Promise<{carId: string}>
}

export default async function CarPage({ params }: CarPageProps) {
    const { carId } = await params;

    return (
            <h1>Info car: {carId}</h1>
    )
}
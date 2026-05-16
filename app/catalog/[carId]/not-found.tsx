import Link from "next/link";

export default function NotFoundCar() {
    return (
        <section style={{ padding: "96px 16px", textAlign: "center" }}>
            <h1>Car not found</h1>
            <p>This car may have already been rented, or the link is incorrect.</p>
            <Link href="/catalog">Return to catalog</Link>
        </section>
    );
}
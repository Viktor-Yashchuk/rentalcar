import Image from "next/image"
import styles from './CarCard.module.css'
import { Car } from "@/types/car"
import Link from "next/link";

export default function CarCard({ car }: { car: Car }) {
    const FALLBACK = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 250'><rect width='100%25' height='100%25' fill='%23f1f2f4'/></svg>";
    const mileage = car.mileage.toLocaleString('uk-UA');
    return (
        <article className={styles.cardItem}>
            <div className={styles.imgWrap}>
                <Image className={styles.cardImg}
                    src={car.img || FALLBACK}
                    alt={`photo ${car.brand} ${car.model}`}
                    // placeholder="blur"
                    fill
                    sizes="(max-width: 260px) 100vw, 280px">
                </Image>
            </div>
            <div className={styles.titleRow}>
                <h3 className={styles.cardTitle}>{car.brand} <span className={styles.cardModel}>{car.model}</span>, {car.year}</h3>
                <span className={styles.cardPrice}>${car.rentalPrice}</span>
            </div>
            <p className={styles.cardDescription}>
                <span>{car.location.city}</span>
                <span>{car.location.country}</span>
                <span>{car.type}</span>
                <span>{mileage} km</span>
            </p>
            <Link className={styles.cardBtn}
                href={`/catalog/${car.id}`}
                target="_blank"
                rel="noopener noreferrer">
                Read more
                </Link>
        </article>
    )
}
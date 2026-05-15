import Image from "next/image"
import styles from './CarCard.module.css'
import { Car } from "@/types/car"
import Link from "next/link";

export default function CarCard({ car }: { car: Car }) {
    const FALLBACK = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 250'><rect width='100%25' height='100%25' fill='%23f1f2f4'/></svg>";
    const formattedMileage = new Intl.NumberFormat('uk-UA').format(car.mileage);
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
                <p className={styles.cardTitle}>{car.brand} <span className={styles.cardModel}>{car.model}</span>, {car.year}
                </p>
                <span className={styles.cardPrice}>${car.rentalPrice}</span>
            </div>
            <p className={styles.cardDescription}>
                {car.location.city} | {car.location.country} | {car.type} | {formattedMileage} km
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
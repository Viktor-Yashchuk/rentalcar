import Image from "next/image";
import { Car } from "@/types/car";
import styles from './CarDetails.module.css';
import RentForm from "../RentForm/RentForm";


export function CarDetails({ car }: { car: Car }) {
    const [city, country] = [car.location.city, car.location.country];
    const mileage = car.mileage.toLocaleString('uk-UA');
    const specs = [
        { label: 'Year', value: car.year, icon: 'icon-calendar' },
        { label: 'Type', value: car.type, icon: 'icon-car' },
        { label: 'Fuel Consumption', value: car.fuelConsumption, icon: 'icon-fuel-pump' },
        { label: 'Engine', value: car.engine, icon: 'icon-gear' },
        { label: 'Mileage', value: `${mileage} km`, icon: 'icon-road' },
        
    ]

    return (
        <section className='container'>
            <article className={styles.layout}>
                <div className={styles.media}>
                    <Image
                        src={car.img}
                        alt={`${car.brand} ${car.model}`}
                        width={640}
                        height={512}
                        className={styles.image}
                        unoptimized
                    />
                    <RentForm carId={car.id} />
                </div>

                <div className={styles.info}>
                    <h1>{car.brand} {car.model}, {car.year}<span>Article: {car.stockNumber}</span></h1>
                    <p>{city}, {country}</p>
                    <p className={styles.price}>${car.rentalPrice}</p>
                    <p>{car.description}</p>
                    <section className={styles.blockWrap}>
                        <h2>Rental Conditions:</h2>
                        <ul className={styles.conditionList}>
                            {car.rentalConditions.map((condition) => (
                                <li key={condition}>
                                    <svg className={styles.checkIcon} viewBox="0 0 32 32" width={16}><use href="/sprite.svg#icon-check-circle" /></svg>
                                    <span>{condition}</span>
                                </li>
                            ))}
                        </ul>
                    </section>
                    <section className={styles.blockWrap}>
                        <h2>Car Specifications:</h2>
                        <ul className={styles.specsList}>
                            {specs.map(({ label, value, icon }) => (
                                <li key={label}>
                                    <svg viewBox="0 0 32 32" width={16}><use href={`/sprite.svg#${icon}`} /></svg>
                                    <span>{label}: {value}</span>
                                </li>
                            ))}
                        </ul>
                    </section>
                    <section className={styles.blockWrap}>
                        <h2>Features</h2>
                        <ul className={styles.featuresList}>
                            {car.features.map((feature) => (
                                <li key={feature}>
                                    <svg className={styles.checkIcon} viewBox="0 0 32 32" width={16}><use href="/sprite.svg#icon-check-circle" /></svg>
                                    <span>{feature}</span>
                                </li>
                        ))}
                        </ul>
                    </section>
                </div>
            </article>
        </section>
    );
}
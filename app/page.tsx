import Image from 'next/image'
import styles from './page.module.css'
import Hero from '@/public/Hero.webp'
import Link from 'next/link'

export default function HomePage() {
  return (
    <section className={styles.heroSection}>
        <Image className={styles.heroBackground}
          src={Hero}
          alt='Car photo on the main page'
        fill
        priority
          placeholder='blur'
        />
        <div className={`container ${styles.heroContainer}`}>
          <h1 className={styles.heroTitle}>Find your perfect rental car</h1>
          <p className={styles.heroDescription}>Reliable and budget-friendly rentals for any journey</p>
          <Link className={styles.heroBtn} href='/catalog'>View Catalog</Link>
        </div>
      </section>
  )
}


// import { getAllCars, getCarsFilters } from "@/lib/api/api";

// export default async function HomePage() {
//   const data = await getAllCars({ brand: "BMW", price: 80, perPage: 12 });
//     console.log(data.cars.length, data.totalCars);
// console.log(data.cars.map(c => `${c.brand} ${c.model} – $${c.rentalPrice}`));
  // const filters = await getCarsFilters();
  // console.log("FEATURES:", JSON.stringify(cars.cars[0].features, null, 2));
  // console.log("LOCATION:", JSON.stringify(cars.cars[0].location, null, 2));
  // console.log("rentalConditions:", JSON.stringify(cars.cars[0].rentalConditions, null, 2));
  
//   return (
//         <section className={styles.heroSection}>
//             <Image className={styles.heroBackground}
//               src={Hero}
//               alt='Фото автомобіля на головній сторінці'
//             fill
//             priority
//               placeholder='blur'
//             />
//             <div className={`container ${styles.heroContainer}`}>
//               <h1 className={styles.heroTitle}>Find your perfect rental car</h1>
//               <p className={styles.heroDescription}>Reliable and budget-friendly rentals for any journey</p>
//               <Link className={styles.heroBtn} href='/catalog'>View Catalog</Link>
//             </div>
//           </section>
//       );
// }
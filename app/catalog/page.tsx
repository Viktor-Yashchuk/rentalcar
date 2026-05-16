// export default function CatalogPage() {
//     return (
//         <section>
//             <h1>Catalog</h1>
//         </section>
//     )
// }


// import { getAllCars } from "@/lib/api/api";
// import styles from "./page.module.css";
// import CarCard from "@/components/CarCard/CarCard";

// export default async function CatalogPage() {
//   const data = await getAllCars({ perPage: 12 });

//   return (
//     <section className="container">
//       <ul className={styles.grid}>
//         {data.cars.map((car) => (
//           <li key={car.id}>
//             <CarCard car={car} />
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// }

import type { Metadata } from "next";
import { CatalogClient } from "./CatalogClient";

export const metadata: Metadata = {
    title: 'Catalog',
    description: 'Browse the car catalog — choose a car by brand, price, or mileage.',
};

export default function CatalogPage() {
    return <CatalogClient />
}
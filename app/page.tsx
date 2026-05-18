import Image from 'next/image'
import styles from './page.module.css'
import Hero from '@/public/Hero.webp'
import Link from 'next/link'

export default function HomePage() {
  return (
    <section className={styles.heroSection}>
        <Image className={styles.heroBackground}
          src={Hero}
          alt='Modern car rides at a road during sunset'
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
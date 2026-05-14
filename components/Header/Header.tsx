'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from './Header.module.css'

export function Header() {
    const pathname = usePathname();
    const isActive = (href: string) => href === '/' ? pathname === '/' : pathname.startsWith(href);

    return (
        <header className={`container ${styles.header}`}>
            <Link href='/' className={styles.logoLink}>
                <svg className={styles.logo} viewBox="0 0 204 32" aria-label="RentalCar logo">
                    <use href="/sprite.svg#icon-rental-car"></use>
            </svg>
            </Link>
            <nav className={styles.navHeader}>
                <Link href='/' className={`${styles.navLink} ${isActive('/')?styles.navLinkActive:''}`}>Home</Link>
                <Link href='/catalog' className={`${styles.navLink} ${isActive('/catalog')?styles.navLinkActive:''}`}>Catalog</Link>
            </nav>
        </header>
)
}
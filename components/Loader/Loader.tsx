import styles from "./Loader.module.css";

interface LoaderProps {
  label?: string;
  fullPage?: boolean;
}

export function Loader({ label = "Loading...", fullPage = false }: LoaderProps) {
    return (
        <div
            className={`${styles.wrapper} ${fullPage ? styles.fullPage : ""}`}
            role="status"
            aria-live="polite"
        >
            <span className={styles.spinner} aria-hidden="true" />
            <span className={styles.label}>{label}</span>
        </div>
    );
}
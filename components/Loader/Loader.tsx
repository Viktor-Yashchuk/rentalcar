import { HashLoader } from "react-spinners";
import styles from "./Loader.module.css";

interface LoaderProps {
    fullPage?: boolean;
    label?: string;
}

export function Loader({ fullPage = false, label }: LoaderProps) {
    return (
        <div className={`${styles.wrapper} ${fullPage ? styles.fullPage : ""}`}>
            <HashLoader color="var(--light-blue)" size={60} />
            {label && <p className={styles.label}>{label}</p>}
        </div>
    );
}
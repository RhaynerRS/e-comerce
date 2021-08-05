import ProductCard from "../components/ProductCard";
import styles from '../styles/products.module.scss'

export default function pecas() {
    return (<body className={styles.productsContainer}><ul className={styles.ul}>
        <ProductCard /><ProductCard /><ProductCard /><ProductCard /><ProductCard /><ProductCard /><ProductCard />
    </ul></body>)
}
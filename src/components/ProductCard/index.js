import styles from './styles.module.scss';
export default function ProductCard() {
    return (
        <li className={styles.li}>
            <div className={styles.item}>
                <a href='pecas/id'>
                    <img src='/produto.png' />
                </a>
                <div className={styles.info}>
                    <h3>
                        $prod_nome</h3>
                    <p>R$ $prod_preco</p>
                </div>
            </div>
        </li>
    )
}
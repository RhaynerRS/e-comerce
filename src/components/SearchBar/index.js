import styles from './styles.module.scss';
import menu from '../../utils/menu';
export default function SeachBar() {
    return (
        <div className={styles.mySearch} id="search"><input type="text" placeholder="Search..." />
            <div className={styles.text}>
                <div>
                    <a className={styles.click}href='#' >Masculino</a>
                    <a className={styles.click}href='#' >Fenino</a>
                    <a className={styles.click}href='#' >Unisex</a>
                </div>
                <div><a onClick={menu} className={styles.click} >FILTROS</a></div>
            </div>
        </div>
    )
}
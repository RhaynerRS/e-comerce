import styles from './styles.module.scss';
import menu from '../../utils/menu';
export default function SeachBar() {
    return (
        <div className={styles.mySearch} id="search"><input type="text" placeholder="Search..." />
            <div className={styles.text}>
                <div>

                </div>
                <div><a onClick={menu} className={styles.click} >FILTROS</a></div>
            </div>
        </div>
    )
}
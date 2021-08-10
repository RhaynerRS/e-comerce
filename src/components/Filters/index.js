import menu from '../../utils/menu';
import styles from './styles.module.scss';

export default function Filters(props) {

    return (
        <div id="filter" className={styles.menu}>
            <div>
                <a onClick={menu} className={styles.fechar}>FECHAR</a>
            </div>
            <form>
                <fieldset >
                    <legend><span>Tipo de Produto</span></legend>
                    <p id="text">Camisetas</p>
                    
                    <p>Ecobags</p>
                </fieldset>
            </form>
        </div>
    )
}
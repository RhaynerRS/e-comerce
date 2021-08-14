import menu from '../../utils/menu.js';
import styles from './styles.module.scss';


export default function Filters(props) {

    return (
        <div id="filter" className={styles.menu}>
            <div className={styles.subMenu}>
                <a onClick={()=>props.erase()} className={styles.fechar}>Limpar</a>
                <a onClick={menu} className={styles.fechar}>FECHAR</a>
            </div>
            <form>
                <fieldset >
                    <legend><span>Tipo de Produto</span></legend>
                    <a id="camisas" onClick={()=>props.func(event.target.id)}>Camisetas</a>
                    <a id="ecobags" onClick={()=>{props.func(event.target.id)}}>Ecobags</a>
                </fieldset>
            </form>
        </div>
    )
}
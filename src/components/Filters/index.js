import menu from '../../utils/menu.js';
import styles from './styles.module.scss';


export default function Filters(props) {

    return (
        <div id="filter" className={styles.menu}>
            <div className={styles.subMenu}>
                <a onClick={() => props.erase()} className={styles.fechar}>Limpar</a>
                <button onClick={menu} className={styles.fechar}><svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" alt="Remover Item" title="Remover Item" className="snipcart__icon--darker snipcart__icon--medium snipcart__icon--angled snipcart__icon"><path d="M33.23 30.77H48v2.46H33.23V48h-2.46V33.23H16v-2.46h14.77V16h2.46v14.77z" ></path></svg></button>
            </div>
            <form>
                <fieldset >
                    <legend><span>Tipo de Produto</span></legend>
                    <a id="camisas" onClick={() => props.func(event.target.id)}>Camisetas</a>
                    <a id="ecobags" onClick={() => { props.func(event.target.id) }}>Ecobags</a>
                    <a id="Moletons" onClick={() => { props.func(event.target.id) }}>Moletons</a>
                </fieldset>
            </form>
        </div>
    )
}
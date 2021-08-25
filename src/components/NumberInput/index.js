import styles from './styles.module.scss';
export default function NumberInput(props) {
    const qtd = props.quanti
    return (<input className={styles.numberInput} type="number" min="1" max="10" defaultValue="1" name="product_qty" id="numbere" onChange={qtd} />)
}
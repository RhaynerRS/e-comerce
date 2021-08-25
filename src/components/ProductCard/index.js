
export default function ProductCard(props) {
    return (
        <li className={styles.li}>
            <div className={styles.item}>
                <a href={`pecas/${props.id}`}>
                    <img src={props.image} />
                </a>
                <div className={styles.info}>
                    <h3>{props.name}</h3>
                    <p>R$ {props.price}</p>
                </div>
            </div>
        </li>
    )
}
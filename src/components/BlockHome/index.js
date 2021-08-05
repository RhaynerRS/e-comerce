import styles from './styles.module.scss';
import Image from "next/image"

export default function BlockHome(props) {

    return (
        <section className={styles.container} style={{ background: `var(${props.color})`, }} id={props.name}>
            <div className={styles.corpo}>
                {props.alter == true ?
                    (<><div className={styles.foto}>
                        <img src="homepageImage.png" />
                    </div>
                        <div className={styles.texto}>
                            <h1>{props.title}</h1>
                            <a>{props.text}</a>
                        </div></>)
                    :
                    (<><div className={styles.texto}>
                        <h1>{props.title}</h1>
                        <a>{props.text}</a>
                    </div>
                        <div className={styles.foto}>
                            <img src="homepageImage.png" />
                        </div></>)}
            </div>
        </section>)
}
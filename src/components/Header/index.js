import { Link, animateScroll as scroll } from "react-scroll";
import styles from './styles.module.scss';
import {useEffect,useState} from "react"
import { faUser,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Header(props) {
    return (

        <header className={styles.headerContainer}>
            {props.url==""||props.url=="#home"||props.url=="#sobre"||props.url=="#contatos"?(
            <Link activeClass="active" to="home" spy={true} smooth={true} duration={500} className={styles.Link} ignoreCancelEvents={true}><img src="\logo.png" alt="papel_de_pano" /></Link>
            ):(<a href="/"><img src="\logo.png" alt="papel_de_pano" /></a>)}

           <nav><a href="/pecas">peças</a>

            {props.url==""||props.url=="#sobre"||props.url=="#contatos"?(
                <><Link activeClass="active" to="sobre" spy={true} smooth={true} duration={500} className={styles.Link} ignoreCancelEvents={true}>sobre</Link>
                <Link activeClass="active" to="contatos" href="/" spy={true} smooth={true} duration={500} className={styles.Link} ignoreCancelEvents={true} >contate-nos</Link></>
            ):(<><a href="/#sobre">sobre</a>
            <a href="/#contatos">contate-nos</a></>)}
            <FontAwesomeIcon icon={faShoppingCart} />
            <FontAwesomeIcon icon={faUser} />
                </nav>
        </header>
    )
}
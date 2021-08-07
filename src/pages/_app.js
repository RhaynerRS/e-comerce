import React from 'react'
import styles from '../styles/app.module.scss'
import '../styles/globals.scss'
import { Header } from "../components/Header"
import {useEffect,useState} from "react"
import { faUser,faShoppingCart } from '@fortawesome/free-solid-svg-icons'

function MyApp({ Component, pageProps }) {
    const [url,setUrl] =useState("/") 

    useEffect(() => { setUrl (window.location.href.split("/")[3])},)
    return (
        <div className={styles.wrapper}>
            <Header url={url} user={faUser}/>
            <main>
                <Component {...pageProps} />
            </main>
        </div>
    )
}

export default MyApp;
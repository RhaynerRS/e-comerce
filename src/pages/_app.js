import React from 'react'
import styles from '../styles/app.module.scss'
import '../styles/globals.scss'
import { Header } from "../components/Header"
import {useEffect,useState} from "react"

function MyApp({ Component, pageProps }) {
    const [url,setUrl] =useState("/") 

    useEffect(() => { setUrl (window.location.href.split("/")[3])},)
    return (
        <div className={styles.wrapper}>
            <main>
                <Header url={url}/>
                <Component {...pageProps} />
            </main>
        </div>
    )
}

export default MyApp;
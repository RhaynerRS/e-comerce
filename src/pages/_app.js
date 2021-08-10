import React from 'react'
import styles from '../styles/app.module.scss'
import '../styles/globals.scss'
import { Header } from "../components/Header"
import {useEffect,useState} from "react"
import { Helmet } from 'react-helmet'
import Favicon from "react-favicon"

function MyApp({ Component, pageProps }) {
    const [url,setUrl] =useState("/") 

    useEffect(() => { setUrl (window.location.href.split("/")[3])},)
    return (
        <div className={styles.wrapper}>
            <Favicon url="/logo.png" /> 
            <Helmet>
                <title>Papel de Pano</title>
            </Helmet>
            <main>
                <Header url={url}/>
                <Component {...pageProps} />
            </main>
        </div>
    )
}

export default MyApp;
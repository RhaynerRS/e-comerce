import React from 'react'
import styles from '../styles/app.module.scss'
import '../styles/globals.scss'
import { Header } from "../components/Header"
import { useEffect, useState } from "react"
import { Helmet } from 'react-helmet'
import Favicon from "react-favicon"
import isNode from 'is-node'
function MyApp({ Component, pageProps }) {


    const [url, setUrl] = useState("/")

    useEffect(() => { setUrl(window.location.href.split("/")[3]) },)
    return (
        <div className={styles.wrapper}>
            <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.css" />
            <Favicon url="/logo.png" />
            <Helmet>
                <title>Papel de Pano</title>
            </Helmet>
            <main>
                <Header url={url} />
                <Component {...pageProps} />
            </main>
            <script
                async
                src="https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.js">
            </script>
            <div
                id="snipcart"
                data-config-modal-style="side"
                data-api-key="YzI2ODQ5ZGEtODRiMC00Yzg5LTg3NTctOTU2MTEwZWJiNjkzNjM3NjQ5MTkyMjAyMzYyOTEw"
                hidden>
            </div>
        </div>
    )
}

export default MyApp;
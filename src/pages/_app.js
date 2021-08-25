import React from 'react'
import styles from '../styles/app.module.scss'
import '../styles/globals.scss'
import '../styles/snipcart.scss'
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
                <billing section="bottom">
                    <fieldset class="snipcart-form__set">
                        <div class="snipcart-form__field">
                            <snipcart-label class="snipcart__font--tiny" for="CPF">

                            </snipcart-label>
                            <snipcart-input name="cpf"></snipcart-input>
                        </div>
                    </fieldset>
                </billing>
            </div >
            <script src="js/jquery-331.min.js"></script>
            <script src="js\bootstrap-337.min.js"></script>
        </div >
    )
}

export default MyApp;
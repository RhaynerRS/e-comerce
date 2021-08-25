import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="pt-BR">
                <Head>
                    <link rel="preconnect" href="https://app.snipcart.com" />
                    <link rel="preconnect" href="https://cdn.snipcart.com" />
                    <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.css" />
                    <link rel="stylesheet" href="styles/bootstrap-337.min.css" />
                </Head>
                <body>

                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>Sport Dating</title>
      <link rel="icon" href="/favicon.ico" />

      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta property="og:title" content="Sport Dating" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="http://localhost/" />
      <meta property="og:image" content="favicon.png" />
      <meta property="og:site_name" content="Sport Dating" />
      <meta property="og:description" content="Application pour trouver des partenaires de sport" />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp

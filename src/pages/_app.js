import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,500,700|Montserrat:300,500,700|Poppins:300,500,700"
        />
        <title>Gifty - Share your love, share your gift</title>
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

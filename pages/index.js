import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home - The MyStore</title>
        <html lang='en'/>
        <meta name="description" content="Products for wellness, beauty, and home essentials offered exclusively through The MyStore. Shop our brands at discounted prices and enjoy free shipping." />
        <meta property='og:title' content='The MyStore'/>
        <meta property='og:sitename' content='https://mystore10.netlify.app/'/>
        <meta property='og:description' content='Products for wellness, beauty, and home essentials offered exclusively through The MyStore. Shop our brands at discounted prices and enjoy free shipping.' />
        <meta property='og:type' content='website'/>
        <link rel="canonical" href="https://mystore10.netlify.app/"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1 className={styles.title} >The MyStore - Your Favourite Brands Now Online</h1>
        <p className={styles.text} >Products for wellness, beauty, and home essentials offered exclusively through The MyStore. Shop our brands at discounted prices and enjoy free shipping.</p>
        <Link href='/products' >
          <a className={styles.btn} >Explore Our Products</a>
        </Link>
      </div>

    </div>
  )
}

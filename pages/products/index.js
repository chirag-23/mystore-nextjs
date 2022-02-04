import Link from 'next/link';
import Head from 'next/head'
import React from 'react';
import styles from '../../styles/Home.module.css'

export const index = () => {
  const array = [1,2,3,4,5,6,7,8,9,10];

  return <div>
      <Head>
        <title>Products - The MyStore</title>
        <html lang='en'/>
        <meta name="description" content="Products for wellness, beauty, and home essentials offered exclusively through The MyStore. Shop our brands at discounted prices and enjoy free shipping." />
        <link rel="canonical" href="https://mystore10.netlify.app/products" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title} >Our Products - MyStore</h1>
      <div className={styles.names} >
      {
        array.map(productID => (
            <Link href={'/products/'+ productID } key={productID}>
                <a>{'Product ' + productID}</a>
            </Link>
        ))
      }
      </div>
  </div>;
};

export default index;
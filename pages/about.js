import styles from '../styles/Home.module.css'
import Head from 'next/head'

const about = () => {
  return <div>
      <Head>
        <title>About - The MyStore</title>
        <html lang='en'/>
        <meta name="description" content="Details about our partners, products and revenue of The MyStore" />
        <link rel="canonical" href="https://mystore10.netlify.app/about" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title} >The MyStore - About, Brands and Products</h1>
      <p className={styles.text} >About MyStore - description </p>
      <p className={styles.text} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
  </div>;
};

export default about;

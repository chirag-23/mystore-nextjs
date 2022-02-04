import React from 'react';
import Head from 'next/head'
import styles from '../../styles/Home.module.css'

const Product = ({ productID, title }) => {
  return <div>
    <Head>
        <title>{title} - The MyStore</title>
        <html lang='en'/>
        <meta name="description" content="Products for wellness, beauty, and home essentials offered exclusively through The MyStore. Shop our brands at discounted prices and enjoy free shipping." />
        <link rel="canonical" href={"https:mystore10.netlify.app/products/" + {productID} }/>
        <link rel="icon" href="/favicon.ico" />

        <meta property='og:title' content={`${title} - MyStore`}/>
        <meta property='og:sitename' content='https://mystore10.netlify.app/'/>
        <meta property='og:type' content='website'/>
    </Head>
    <h1 className={styles.title} >{title} By The MyStore</h1>
    <p className={styles.text} >Product Id = {productID}</p>
    <p className={styles.text} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
  </div>;
};
export default Product;

export async function getStaticProps({ params = {} } = {}){
  return{
    props: {
      productID: params.product,
      title: `Product ${params.product}`
    }
  }
}

export async function getStaticPaths(){
  const paths = [...new Array(10)].map((i,index) => {
    return{
      params: {
        product: `${index + 1}`
      }
    }
  });

  return{
    paths,
    fallback: false,
  }

}
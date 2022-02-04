import Link from 'next/link'
import Head from 'next/head'


const NotFound = () => {
  return (
    <div className="not-found">
      <Head>
        <title>404 - Page Not Found</title>
        <html lang='en'/>
        <meta name="description" content="Error:404 Page is not Found"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Oops...</h1>
      <h2>That page cannot be found :(</h2>
      <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
    </div>
  );
}
 
export default NotFound;
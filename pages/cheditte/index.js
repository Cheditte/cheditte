import Link from 'next/link'
import Head from 'next/head'

const cheditte = () => {
  return (
    <>
      <Head>
        <title>Cheditte | Cheditte List</title>
        <meta name="keywords" content="cheditte" />
      </Head>
      <div>
        <h1>Cheditte List</h1>
        <Link href="/">
          <a>Back to Homepage</a>
        </Link>
      </div>
    </>
  )
}

export default cheditte

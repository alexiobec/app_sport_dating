import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Cours Mines Nancy 2021</title>
        <meta name="description" content="Exercices de cours" />
      </Head>

      <main className="container-fluid">
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2">
            <h1>Sport Dating</h1>

  

            <h2>Page de connexion</h2>

            <ul>
              <li><Link href="exercices/forum"><a>Forum</a></Link></li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home

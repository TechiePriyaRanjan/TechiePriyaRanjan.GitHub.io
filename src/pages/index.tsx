import styles from '@/styles/Home.module.css'
import { Nunito } from '@next/font/google'
import Head from 'next/head'

const nunito = Nunito({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Priya Ranjan Dubey || Website</title>
        <meta name="description" content="Portfolio website of Priya Ranjan Dubey | techiepriyaranjan" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={nunito.className}>
          <p>
            !Just another portfolio website coming soon @12 Feb 2023.
          </p>
        </div>
      </main>
    </>
  )
}

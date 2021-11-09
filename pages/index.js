import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'

const Page = () => {
  const [name, setName] = useState('...')

  useEffect(() => {
    (async () => {
      const nameData = await (await fetch('/api/name')).json()
      setName(nameData.name)
    })()
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Hello world</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello {name}!!!
        </h1>
      </main>

      <footer className={styles.footer}>
        &copy; <a href="https://mph.am">Martin Pham</a>
      </footer>
    </div>
  )
}

export default Page
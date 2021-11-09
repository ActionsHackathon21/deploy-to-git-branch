import Head from 'next/head'
import Image from 'next/image'
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
        <title>Sample App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello {name}!!!
        </h1>
      </main>

      <footer className={styles.footer}>
        &copy; Martin Pham
      </footer>
    </div>
  )
}

export default Page
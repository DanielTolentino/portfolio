import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'


/* const name = 'Daniel Tolentino' */
export const siteTitle = 'Daniel Tolentino Portfolio'
export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Simple Portfolio Website"
        />
        
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
                      
          </>
        ) : (
          <>
           
          </>
        )}
      </header>
      <main>{children}</main>

    </div>
  )
}
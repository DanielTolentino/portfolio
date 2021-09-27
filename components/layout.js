import Head from 'next/head'
import styles from './layout.module.css'

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
import Head from "next/head";
import styles from "./layout.module.css";
import NavBar from "./navbar/navbar";
export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <meta name="og:title" content="Solution Pool" />
      </Head>
      <NavBar></NavBar>
      <main>{children}</main>
    </div>
  );
}

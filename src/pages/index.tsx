import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useSession } from "next-auth/react";
import Header from "@/component/Header";
import SideMenu from "@/component/SideMenu";
import Dashboard from "./dashboard";
import Login from "@/component/Login";

export default function Home() {
  const { data: session } = useSession();
  return (
    <>
      <Head>
        <title>Data Dashboard</title>
        <meta name="description" content="Data Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />
        {session && (
          <>
            <SideMenu />
            <Dashboard />
          </>
        )}
        <Login />
      </main>
    </>
  );
}

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import Navigation from '@/components/navigation'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [counts, setCounts] = useState(0);

  function handleClick() {
    setCounts(counts + 1);
    console.log(counts);
  }

  return (
    <>
      <Head>
        <Navigation />
      </Head>
      <main>
      </main>
    </>
  )
}

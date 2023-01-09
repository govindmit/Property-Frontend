import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Welcome from './welcome'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
    
    <Head>
        <link rel="icon" href="/logo.png" />
      </Head>
    <Welcome/>
    </div>
  )
}

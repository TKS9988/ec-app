import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import { Recommend,Header,SetMenu } from '../components'
import Kv from '../assets/images/kv.png'
import styles from '../styles/Top.module.scss'

export default function Home() {
  return (
    <div>
      <Header />
      <div className={styles.kv}>
        <div className={styles.left}>
          <h1>Tbilisi&nbsp;berger</h1>
        </div>
        <div className={styles.right} style={{ position: 'relative', width: '50%', height: '40vw' }}>
          <Image src={Kv} alt="kv" layout="fill" objectFit="contain" priority={true} />
        </div>
      </div>
      <Recommend />
      <SetMenu />
    </div>
  )
}
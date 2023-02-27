import Link from 'next/link'
import styles from '../../styles/Home.module.css'
// import Recommend from '../../components/Recommend'

export default function Recommend() {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h2 className={styles.title}>
                    Recommend
                    <span>人気商品</span>
                </h2>
                {/* <Recommend /> */}
            </main>
        </div>
    )  
}
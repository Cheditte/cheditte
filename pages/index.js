import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <>
      <Head>
        <title>Cheditte | Home</title>
        <meta name="keywords" content="cheditte" />
      </Head>
      <div className={styles.container}>
        <div className={styles.title}>HomePage</div>
        <p className={styles.text}>
          Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır
          metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat
          numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı
          1500'lerden beri endüstri standardı sahte metinler olarak
          kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış,
          aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır.
          1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının
          yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum
          sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.
        </p>
        <p className={styles.text}>
          Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır
          metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat
          numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı
          1500'lerden beri endüstri standardı sahte metinler olarak
          kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış,
          aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır.
          1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının
          yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum
          sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.
        </p>
        <Link href="/cheditte">
          <a className={styles.btn}>See Cheditte List</a>
        </Link>
      </div>
    </>
  )
}
export default Home

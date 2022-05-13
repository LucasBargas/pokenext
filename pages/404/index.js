import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/404.module.scss';
import notFoundImg from '../../public/images/404.png';

const NotFound = () => {
  return (
    <>
      <Head>
        <title>Lucas Bargas | PokeNext | Página não encontrada</title>
      </Head>

      <section>
        <div className="container">
          <div className={styles.notFoundArea}>
            <h1>Sentimos muito, página não encontrada!</h1>

            <figure>
              <Image src={notFoundImg} width='180' height='180' alt='Pikachu não encontrou a página' />
            </figure>
          </div>
        </div>
      </section>
    </>
  )
}

export default NotFound;

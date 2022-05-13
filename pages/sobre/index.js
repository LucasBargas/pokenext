import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/About.module.scss';
import aboutImage from '../../public/images/charizard.png';

const About = () => {
  return (
    <>
      <Head>
        <title>Lucas Bargas | PokeNext | Sobre</title>
      </Head>
      <section className={styles.about}>
        <div className='container'>
          <h1>Sobre o PokeNext</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente atque, vitae voluptates maxime rerum at ipsum autem id qui eaque eveniet non eos sit pariatur aliquid deserunt.</p>

          <figure>
            <Image src={aboutImage} height='300' width='300' alt='Charizard'></Image>
          </figure>
        </div>
      </section>
    </>
  )
}

export default About;

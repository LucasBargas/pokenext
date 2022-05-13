import '../styles/globals.scss';
import Head from 'next/head';
import Header from '../layout/Header/Header';
import Footer from '../layout/Footer/Footer';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Lucas Bargas | PokeNext</title>
      </Head>
      
      <div className='appArea'>
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default MyApp;

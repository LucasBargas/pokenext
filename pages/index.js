import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import pokeImg from '../public/images/pokeball.png';
import Card from '../components/Card/Card';

export const getStaticProps = async () => {
  const maxPokemons = 251;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${maxPokemons}`);
  const { results } = await res.json();

  results.forEach((item, index) => item.id = index + 1);

  return {
    props: {
      pokemons: results,
    }
  }
}

const Home = ({ pokemons }) => {
  return (
    <section>
      <div className="container">
        <div className={styles.titleContainer}>
          <h1>
            Poke
            <span>Next</span>
          </h1>
          <Image src={pokeImg} width='50' height='50' alt='PokeNext' />
        </div>

        <div className={styles.pokemonsContainer}>
          {pokemons.map(pokemon => (
            <Card key={pokemon.id} pokemon={pokemon} /> 
          ))}
        </div>
      </div>
    </section>
  )
}

export default Home;

import styles from '../../styles/Pokemon.module.scss';
import Image from 'next/image';

export const getStaticPaths = async () => {
  const maxPokemons = 251;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${maxPokemons}`);
  const { results } = await res.json();

  const paths = results.map((pokemon, index) => {
    return {
      params: { pokemonId: (index + 1).toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.pokemonId;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();

  return {
    props: {
      pokemon: data
    }
  }
}

const Pokemon = ({ pokemon }) => {
  console.log(pokemon)
  return (
    <section>
      <div className="container">
        <div className={styles.pokemonDetailsContainer}>
          <div className={styles.pokemonName}>
            <h1>{pokemon.name}</h1>
          </div>

          <figure>
            <Image 
              src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`} 
              width='200' 
              height='200' 
              alt={pokemon.name} 
            />
          </figure>

          <div className={styles.pokemonId}>
            <h2>Número:</h2>
            <p>#{pokemon.id}</p>
          </div>

          <div className={styles.pokemonType}>
            <h2>Tipo:</h2>
            <div>
              {pokemon.types.map(({ type }) => (
                <span 
                  className={`${styles['type' + type.name]}`} 
                  key={type.name}
                >
                  {type.name}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.pokemonPhysical}>
            <div>
              <h2>Altura:</h2>
              <p>{pokemon.height * 10} cm</p>
            </div>

            <div>
              <h2>Peso:</h2>
              <p>{pokemon.weight / 10} kg</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pokemon;

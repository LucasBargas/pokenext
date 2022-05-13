import Image from 'next/image';
import Link from 'next/link';
import styles from './Card.module.scss';

const Card = ({ pokemon }) => {
  return (
    <div className={styles.pokemonCard}>
      <figure>
        <Image 
          src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`} 
          width='120' 
          height='120' 
          alt={pokemon.name} 
        />
      </figure>

      <div className={styles.pokemonInfos}>
        <div className={styles.pokemonFlag}>#{pokemon.id}</div>
        <h2>{pokemon.name}</h2>
      </div>
      
      <div className={styles.pokemonDetails}>
        <Link href={`/pokemon/${pokemon.id}`}>
          <a>Detalhes</a>
        </Link>
      </div>
    </div> 
  )
}

export default Card;

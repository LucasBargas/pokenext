import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.scss';
import logo from '../../public/images/pokeball.png';
import { useRouter } from 'next/router';

const navLinks = [
  { title: 'Home', path: '/' },
  { title: 'Sobre', path: '/sobre' },
];

const Header = () => {
  const { pathname } = useRouter();

  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.headerArea}>
          <Link href='/'>
            <a className={styles.headerLogo}>
              <Image src={logo} width='30' height='30' alt='PokeNext Logo' />
              <h1>PokeNext</h1>
            </a>
          </Link>
          
          <nav className={styles.headerNav}>
            <ul>
              {navLinks.map(({ title, path }) => (
                <li key={title}>
                  <Link href={path}>
                    <a className={pathname === path ? 'activeLink' : ''}>{title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header;

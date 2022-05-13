import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <p><span>PokeNext</span> &copy; 2021</p>
      </div>
    </footer>
  )
}

export default Footer;

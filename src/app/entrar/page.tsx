import styles from './login.module.scss';
import Link from 'next/link';

export default function Home() {


  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h2>Entrar</h2>
        <div className={styles.inputGroup}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password">Senha:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Logar</button>
        <Link href={"/"}>Voltar</Link>
      </form>

      <video  autoPlay loop>
      <source src="/animation.mp4" type="video/mp4"/>
      Your browser does not support the video tag.
    </video>
    </div>
  );
}
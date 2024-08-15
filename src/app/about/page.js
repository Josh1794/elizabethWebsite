import styles from './about.module.css';

export default function AboutPage() {
  return (
    <div className={styles.layout}>
      <h1 className={styles.aboutTitle}>About</h1>
      <p className={styles.aboutBody}>Verbage Here</p>
    </div>
  );
}

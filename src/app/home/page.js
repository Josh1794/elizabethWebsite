import styles from './home.module.css';

export default function HomePage() {
  return (
    <div className={styles.layout}>
      <h1 className={styles.homeTitle}>Making your special day a breeze</h1>
      <p className={styles.homeSubTitle}>
        We are here to help your day go as smoothly as possible. We take the
        stress out of your special day allowing you to fully enjoy the moment.
      </p>
    </div>
  );
}

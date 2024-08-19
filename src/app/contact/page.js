import styles from './contact.module.css';

export default function ContactPage() {
  return (
    <div className={styles.layout}>
      <h1 className={styles.contactTitle}>Contact</h1>
      <div className={styles.contactSection}>
        <p className={styles.contactBody}>Email:</p>
        <a
          className={styles.contactBodyLink}
          href='mailto: elizabeth.treimanis.events@gmail.com'
        >
          elizabeth.treimanis.events@gmail.com
        </a>
      </div>
    </div>
  );
}

import Link from 'next/link';
import styles from './contact.module.css';

export default function ContactPage() {
  return (
    <div className={styles.layout}>
      <h1 className={styles.contactTitle}>Contact</h1>
      <p className={styles.contactBody}>
        Feel free to reach out to me with any questions you might have or to
        plan a meeting.
      </p>
      <div className={styles.contactSection}>
        <p className={styles.contactEmail}>Email:</p>
        <Link
          className={styles.contactBodyLink}
          href='mailto: elizabeth.treimanis.events@gmail.com'
        >
          elizabeth.treimanis.events@gmail.com
        </Link>
      </div>
    </div>
  );
}

import styles from './about.module.css';

export default function AboutPage() {
  return (
    <div className={styles.layout}>
      <h1 className={styles.aboutTitle}>About</h1>
      <p className={styles.aboutBody}>
        Sometimes making your special day come together can be overwhelming,
        that's where I come in. This is your one-stop shop for all things
        wedding planning. Whether you need day-of, month-of, or even total
        wedding planning, I'm here for you on your special day. I spent several
        years working at luxury brands like La Mer and Burberry as an executive
        assistant, planning work parties, events, and travel. However, I fell in
        love with wedding planning when planning my own wedding.
      </p>
      <p className={styles.aboutBody}>
        Now I want to bring all the expertise I've gained to your wedding,
        making sure everything goes smoothly.
      </p>
    </div>
  );
}

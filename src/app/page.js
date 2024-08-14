import Image from 'next/image';
import styles from './page.module.css';
import HomePage from './homeSection/page';
import ContactPage from './contactSection/page';
import AboutPage from './aboutSection/page';
import ServicesPage from './servicesSection/page';

export default function Home() {
  return (
    <div className={styles.layout}>
      <div className={styles.navigation}>
        <p>Home</p>
        <p>About</p>
        <p>Services</p>
        <p>Contact</p>
      </div>
      <div className={styles.body}>
        <HomePage />
        <AboutPage />
        <ServicesPage />
        <ContactPage />
      </div>
    </div>
  );
}

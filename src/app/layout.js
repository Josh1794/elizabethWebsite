import { Open_Sans } from 'next/font/google';
import styles from './page.module.css';
import './globals.css';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const inter = Open_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'Elizabeth Treimanis Events',
  description: 'Elizabeth Treimanis Events website',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className={styles.layout}>
          <div className={styles.navigation}>
            <h3 className={styles.navigationTitle}>Elizabeth Treimanis</h3>
            <Link href='/home'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/services'>Services</Link>
            <Link href='/contact'>Contact</Link>
          </div>
          <div className={styles.body}>{children}</div>
        </div>
      </body>
    </html>
  );
}

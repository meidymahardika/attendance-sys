// app/components/MainHeader.tsx
import Link from 'next/link';
import Image from 'next/image';
import { FaBell } from 'react-icons/fa';
import styles from './MainHeader.module.css';

export default function MainHeader() {
  return (
    <header className={styles.header}>
      <Link href="/home">
        <Image
          src="/logo-telkomakses.png"
          alt="Telkom Akses Logo"
          width={150}
          height={30}
        />
      </Link>
      <FaBell />
    </header>
  );
}
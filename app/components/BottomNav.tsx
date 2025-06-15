// app/components/BottomNav.tsx

"use client"; // Diperlukan untuk menggunakan usePathname

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaFingerprint, FaUser } from "react-icons/fa";
import styles from "./BottomNav.module.css"; // Kita akan buat file CSS ini sebentar lagi

export default function BottomNav() {
  const pathname = usePathname(); // Hook untuk mendapatkan path URL saat ini

  return (
    <footer className={styles.bottomNav}>
      <Link href="/home" className={`${styles.navItem} ${pathname === '/home' ? styles.active : ''}`}>
        <FaHome />
        <span>Home</span>
      </Link>
      <Link href="/absent" className={`${styles.navItem} ${pathname === '/absent' ? styles.active : ''}`}>
        <FaFingerprint />
        <span>Absent</span>
      </Link>
      {/* Link Profile ini akan 404 untuk sementara, sampai halamannya dibuat */}
      <Link href="/profile" className={`${styles.navItem} ${pathname === '/profile' ? styles.active : ''}`}>
        <FaUser />
        <span>Profile</span>
      </Link>
    </footer>
  );
}
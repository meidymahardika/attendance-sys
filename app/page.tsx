// app/page.tsx

"use client"; // <-- TAMBAHKAN BARIS INI DI PALING ATAS

import Image from "next/image";
import styles from "./page.module.css";
import { FaUser, FaLock } from "react-icons/fa";
import { useRouter } from "next/navigation"; // <-- IMPORT useRouter

export default function LoginPage() {
  const router = useRouter(); // <-- INISIALISASI ROUTER

  // Fungsi yang akan dijalankan saat tombol login diklik
  const handleLogin = () => {
    // Untuk aplikasi nyata, di sini ada validasi username & password
    // Untuk sekarang, kita langsung pindah halaman
    router.push("/home");
  };

  return (
    <main className={styles.main}>
      <section className={styles.imageSection}>
        <Image
          src="/ilustrasi-login.png"
          alt="Ilustrasi Analis Data"
          width={300}
          height={300}
          priority
        />
      </section>

      <section className={styles.formSection}>
        <div className={styles.inputWrapper}>
          <FaUser className={styles.inputIcon} />
          <input
            type="text"
            placeholder="Username"
            className={styles.inputField}
          />
        </div>

        <div className={styles.inputWrapper}>
          <FaLock className={styles.inputIcon} />
          <input
            type="password"
            placeholder="Password"
            className={styles.inputField}
          />
        </div>

        {/* GANTI TOMBOL INI */}
        <button className={styles.loginButton} onClick={handleLogin}>
          Login
        </button>
      </section>
    </main>
  );
}
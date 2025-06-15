// app/absent/page.tsx

import Image from "next/image";
import Link from "next/link"; // PASTIKAN BARIS INI ADA
import styles from "./absent.module.css";
import BottomNav from "../components/BottomNav";

export default function AbsentPage() {
  return (
    <>
      <main className={styles.container}>
        <h1 className={styles.title}>Dimanakah Anda bekerja saat ini?</h1>

        {/* PASTIKAN SETIAP OPSI DIBUNGKUS OLEH <Link> */}
        <Link href="/absent/detail" className={styles.optionCard}>
          <Image
            src="/ilustrasi-wfo.png"
            alt="Work From Office"
            width={150}
            height={150}
          />
          <p className={styles.optionLabel}>WFO</p>
        </Link>

        {/* PASTIKAN SETIAP OPSI DIBUNGKUS OLEH <Link> */}
        <Link href="/absent/detail" className={styles.optionCard}>
          <Image
            src="/ilustrasi-wfh.png"
            alt="Work From Home"
            width={150}
            height={150}
          />
          <p className={styles.optionLabel}>WFH</p>
        </Link>

        {/* PASTIKAN SETIAP OPSI DIBUNGKUS OLEH <Link> */}
        <Link href="/absent/detail" className={styles.optionCard}>
          <Image
            src="/ilustrasi-wfs.png"
            alt="Work From School"
            width={150}
            height={150}
          />
          <p className={styles.optionLabel}>WFS</p>
        </Link>
      </main>

      <BottomNav />
    </>
  );
}
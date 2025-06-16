"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import styles from "./style.module.css";
import { FaArrowLeft, FaSearch, FaTimes } from "react-icons/fa";

export default function AlkerPage() {
  const router = useRouter();
  const params = useParams();
  const typeParam = Array.isArray(params.type) ? params.type[0] : params.type;
  const title = typeParam === "daily" ? "Daily Absence" : "Monthly Absence";

  const [checkboxes, setCheckboxes] = useState({
    kondisiBaik: false,
    snTerlihat: false,
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [agreementChecked, setAgreementChecked] = useState(false);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setCheckboxes((prev) => ({ ...prev, [name]: checked }));
  };

  const isSubmitDisabled = !checkboxes.kondisiBaik || !checkboxes.snTerlihat || !agreementChecked;

  return (
    <div className={styles.container}>
      {/* Bagian Atas dengan lengkungan */}
      <div className={styles.topSection}>
        <header className={styles.header}>
          <FaArrowLeft className={styles.backIcon} onClick={() => router.back()} />
          <h1>{title}</h1>
        </header>
        <div className={styles.progressInfo}>
          <h2>Progress Checking Alker</h2>
          <p>
            <span>0</span>/0
          </p>
          <p>Checked/total</p>
        </div>
      </div>
      {/* Bagian Bawah (konten) */}
      <main className={styles.bottomSection}>
        <div className={styles.card}>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              name="kondisiBaik"
              checked={checkboxes.kondisiBaik}
              onChange={handleCheckboxChange}
            />
            Semua barang dalam kondisi baik
          </label>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              name="snTerlihat"
              checked={checkboxes.snTerlihat}
              onChange={handleCheckboxChange}
            />
            Semua SN terlihat
          </label>
        </div>
        <div className={styles.searchContainer}>
          <FaSearch />
          <input
            type="text"
            placeholder="Serial number atau nama barang"
            className={styles.searchInput}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && <FaTimes className={styles.clearIcon} onClick={() => setSearchTerm("")} />}
        </div>
        <div className={styles.notFoundContainer}>
          <Image src="/ilustrasi-data-not-found.png" alt="Data not found" width={200} height={200} />
          <p className={styles.notFoundText}>Data not found.</p>
          <p className={styles.notFoundSubtext}>Please wait a moment and try again.</p>
        </div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.card}>
          <label className={`${styles.checkboxLabel} ${styles.agreementLabel}`}>
            <input
              type="checkbox"
              checked={agreementChecked}
              onChange={(e) => setAgreementChecked(e.target.checked)}
            />
            <span>
              *Saya menyetujui bahwa informasi yang saya berikan adalah benar, jika diketahui informasi yang saya berikan adalah salah maka saya siap menerima konsekuensi
            </span>
          </label>
        </div>
        <button className={styles.submitButton} disabled={isSubmitDisabled}>
          Submit
        </button>
      </footer>
    </div>
  );
}

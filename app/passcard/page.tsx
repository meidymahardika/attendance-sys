// app/passcard/page.tsx

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./passcard.module.css";
import BottomNav from "../components/BottomNav";
import { FaArrowLeft, FaSearch, FaInfoCircle } from "react-icons/fa";

export default function PasscardPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className={styles.pageWrapper}>
      <header className={styles.header}>
        <FaArrowLeft className={styles.backIcon} onClick={() => router.back()} />
        <h1>Passcard</h1>
      </header>

      <main className={styles.mainContent}>
        <div className={styles.searchContainer}>
          <div className={styles.searchBar}>
            <FaSearch className={styles.searchIcon} />
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Search teknisi by NIK"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaInfoCircle className={styles.infoIcon} />
          </div>
        </div>

        <div className={styles.messageContainer}>
          <p>Technician not found.</p>
          <p>Please search the correct NIK</p>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
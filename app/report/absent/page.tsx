// app/report/absent/page.tsx

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./report.module.css";
import { FaArrowLeft, FaCalendarAlt } from "react-icons/fa";

export default function ReportAbsentPage() {
  const router = useRouter();
  
  // State untuk filter (bisa dikembangkan nanti)
  const [startDate, setStartDate] = useState("20-4-2025");
  const [endDate, setEndDate] = useState("25-4-2025");
  const [description, setDescription] = useState("Mobile");

  return (
    <div className={styles.container}>
      {/* Header Halaman */}
      <header className={styles.header}>
        <FaArrowLeft className={styles.backIcon} onClick={() => router.back()} />
        <h1>Report Absent</h1>
      </header>

      {/* Bagian Filter */}
      <section className={styles.filterSection}>
        <div className={styles.filterHeader}>
          <label>Date</label>
          <span>NIK 12345678</span>
        </div>
        <div className={styles.dateInputs}>
          <div className={styles.dateInput}>
            <span>{startDate}</span>
            <FaCalendarAlt />
          </div>
          <span>-</span>
          <div className={styles.dateInput}>
            <span>{endDate}</span>
            <FaCalendarAlt />
          </div>
        </div>

        <div className={styles.descriptionFilter}>
          <label>Description</label>
          <select 
            className={styles.descriptionDropdown}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          >
            <option>Mobile</option>
            <option>Web</option>
            <option>Lainnya</option>
          </select>
        </div>
        
        <button className={styles.filterButton}>Filter</button>
      </section>

      {/* Header Tabel */}
      <section className={styles.tableHeader}>
        <span>No.</span>
        <span>Date</span>
        <span>In</span>
        <span>Out</span>
        <span>Desc</span>
      </section>

      {/* Body Tabel */}
      <main className={styles.tableBody}>
        <p>Tidak ada data untuk ditampilkan.</p>
      </main>
    </div>
  );
}
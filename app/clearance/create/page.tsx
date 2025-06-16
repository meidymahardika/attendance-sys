// app/clearance/create/page.tsx
"use client";
import { useRouter } from 'next/navigation';
import styles from './style.module.css';
import { FaArrowLeft, FaCalendarAlt, FaPaperclip } from 'react-icons/fa';

export default function CreateSubmissionPage() {
  const router = useRouter();
  return (
    <div className={styles.pageWrapper}>
      <header className={styles.header}>
        <FaArrowLeft className={styles.backIcon} onClick={() => router.back()} />
        <h1>Create a submission</h1>
      </header>
      <main className={styles.mainContent}>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label>Jenis izin</label>
            <select>
              <option>Pilih jenis izin</option>
              <option>Sakit</option>
              <option>Izin</option>
              <option>Cuti</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label>Dari tanggal</label>
            <div className={styles.inputWithIcon}><input type="date" placeholder="Masukkan tanggal" /><FaCalendarAlt /></div>
          </div>
          <div className={styles.formGroup}>
            <label>Sampai tanggal</label>
            <div className={styles.inputWithIcon}><input type="date" placeholder="Masukkan tanggal" /><FaCalendarAlt /></div>
          </div>
          <div className={styles.formGroup}>
            <label>Alasan</label>
            <textarea rows={4}></textarea>
          </div>
          <div className={styles.formGroup}>
            <label>Bukti izin</label>
            <div className={styles.inputWithIcon}><input type="file" /><FaPaperclip /></div>
          </div>
          <button type="submit" className={styles.submitButton}>Submit</button>
        </form>
      </main>
    </div>
  );
}
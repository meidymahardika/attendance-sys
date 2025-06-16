// app/clearance/create/page.tsx
"use client";
import { useRouter } from 'next/navigation';
import styles from './style.module.css';
import { FaArrowLeft, FaCalendarAlt, FaPaperclip } from 'react-icons/fa';
import { postClearance } from '@/service/clearance/clearanceService';
import React, { useState, useRef } from 'react';

export default function CreateSubmissionPage() {
  const router = useRouter();
  const [jenisIzin, setJenisIzin] = useState("");
  const [dariTanggal, setDariTanggal] = useState("");
  const [sampaiTanggal, setSampaiTanggal] = useState("");
  const [alasan, setAlasan] = useState("");
  const [loading, setLoading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  // Submit handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Pakai FormData untuk file upload
    const formData = new FormData();
    formData.append("jenis_izin", jenisIzin);
    formData.append("dari_tanggal", dariTanggal);
    formData.append("sampai_tanggal", sampaiTanggal);
    formData.append("alasan", alasan);

    if (fileRef.current && fileRef.current.files && fileRef.current.files[0]) {
      formData.append("bukti_izin", fileRef.current.files[0]);
    }

    try {
      await postClearance(formData);
      alert("Berhasil mengajukan izin!");
      router.back();
    } catch (err) {
      alert("Gagal mengajukan izin!");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <header className={styles.header}>
        <FaArrowLeft className={styles.backIcon} onClick={() => router.back()} />
        <h1>Create a submission</h1>
      </header>
      <main className={styles.mainContent}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label>Jenis izin</label>
            <select value={jenisIzin} onChange={e => setJenisIzin(e.target.value)} required>
              <option value="">Pilih jenis izin</option>
              <option value="Sakit">Sakit</option>
              <option value="Izin">Izin</option>
              <option value="Cuti">Cuti</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label>Dari tanggal</label>
            <div className={styles.inputWithIcon}>
              <input
                type="date"
                value={dariTanggal}
                onChange={e => setDariTanggal(e.target.value)}
                required
              />
              <FaCalendarAlt />
            </div>
          </div>
          <div className={styles.formGroup}>
            <label>Sampai tanggal</label>
            <div className={styles.inputWithIcon}>
              <input
                type="date"
                value={sampaiTanggal}
                onChange={e => setSampaiTanggal(e.target.value)}
                required
              />
              <FaCalendarAlt />
            </div>
          </div>
          <div className={styles.formGroup}>
            <label>Alasan</label>
            <textarea
              rows={4}
              value={alasan}
              onChange={e => setAlasan(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>Bukti izin</label>
            <div className={styles.inputWithIcon}>
              <input type="file" ref={fileRef} accept="image/*,application/pdf" />
              <FaPaperclip />
            </div>
          </div>
          <button type="submit" className={styles.submitButton} disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </main>
    </div>
  );
}

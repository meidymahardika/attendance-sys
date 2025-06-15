// app/absent/detail/page.tsx

"use client";

import { useState } from "react";
import Image from "next/image"; // Import Image
import styles from "./detail.module.css";
import BottomNav from "../../components/BottomNav";

export default function AbsentDetailPage() {
  // === STATE MANAGEMENT ===
  // State untuk menyimpan feeling (sama seperti sebelumnya)
  const [selectedFeeling, setSelectedFeeling] = useState<string | null>(null);

  // STATE BARU: Menyimpan daftar gejala yang dipilih (bisa lebih dari satu)
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);

  // STATE BARU: Menyimpan teks dari input "Gejala lainnya"
  const [otherSymptom, setOtherSymptom] = useState<string>("");

  // === DATA ===
  const feelingOptions = [
    { emoji: "😄", label: "Sehat" },
    { emoji: "😞", label: "Kurang Sehat" },
    { emoji: "😷", label: "Sakit" },
  ];

  const symptomOptions = [
    { label: "Demam", icon: "/icon-demam.png" },
    { label: "Batuk Kering", icon: "/icon-batuk.png" },
    { label: "Diare", icon: "/icon-diare.png" },
    { label: "Kehilangan indra penciuman / perasa", icon: "/icon-penciuman.png" },
    { label: "Sakit Tenggorokan", icon: "/icon-tenggorokan.png" },
  ];

  // === LOGIC HANDLERS ===
  // Fungsi untuk menangani klik pada gejala (bisa memilih/batal memilih)
  const handleSymptomClick = (symptomLabel: string) => {
    // Cek apakah gejala sudah ada di dalam array
    if (selectedSymptoms.includes(symptomLabel)) {
      // Jika sudah ada, hapus dari array
      setSelectedSymptoms(prev => prev.filter(s => s !== symptomLabel));
    } else {
      // Jika belum ada, tambahkan ke dalam array
      setSelectedSymptoms(prev => [...prev, symptomLabel]);
    }
  };

  // Logika untuk mengaktifkan/menonaktifkan tombol Absen
  const isButtonDisabled = () => {
    if (!selectedFeeling) return true; // Selalu disable jika feeling belum dipilih
    if (selectedFeeling === "Sehat") return false; // Selalu enable jika memilih Sehat
    if (selectedFeeling === "Kurang Sehat" || selectedFeeling === "Sakit") {
      // Jika kurang sehat/sakit, enable HANYA JIKA ada gejala dipilih ATAU ada teks di input
      return selectedSymptoms.length === 0 && otherSymptom.trim() === "";
    }
    return true;
  };

  // === RENDER ===
  return (
    <>
      <main className={styles.container}>
        {/* Stepper (tidak berubah) */}
        <div className={styles.stepper}>
          {/* ... kode stepper tetap sama ... */}
          <div className={styles.stepperLabelsTop}><span>Absen Masuk</span><span>Absen 2 Siang</span></div><div className={styles.stepperTrack}><div className={styles.stepperLine}></div><div className={styles.stepperNode}></div><div className={styles.stepperNode}></div><div className={styles.stepperNode}></div><div className={styles.stepperNode}></div></div><div className={styles.stepperLabelsBottom}><span>Absen 10 Pagi</span><span>Absen Pulang</span></div>
        </div>

        {/* Kartu Pilihan Feeling (tidak berubah) */}
        <div className={styles.feelingCard}>
          <h2 className={styles.feelingTitle}>Bagaimana feeling Anda hari ini?</h2>
          <div className={styles.feelingOptions}>
            {feelingOptions.map((option) => (
              <div key={option.label} className={`${styles.feelingItem} ${selectedFeeling === option.label ? styles.selected : ""}`} onClick={() => setSelectedFeeling(option.label)}>
                <p>{option.emoji}</p>
                <span>{option.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* KARTU KONDISI BARU - Muncul secara kondisional */}
        {(selectedFeeling === "Kurang Sehat" || selectedFeeling === "Sakit") && (
          <div className={styles.symptomCard}>
            <h2 className={styles.feelingTitle}>Bagaimana kondisi Anda saat ini?</h2>
            <div className={styles.symptomGrid}>
              {symptomOptions.map((symptom) => (
                <div key={symptom.label} className={`${styles.symptomItem} ${selectedSymptoms.includes(symptom.label) ? styles.selectedSymptom : ""}`} onClick={() => handleSymptomClick(symptom.label)}>
                  <div className={styles.symptomIconWrapper}>
                    <Image src={symptom.icon} alt={symptom.label} width={60} height={60} />
                  </div>
                  <span>{symptom.label}</span>
                </div>
              ))}
            </div>
            <input
              type="text"
              className={styles.otherSymptomInput}
              placeholder="Gejala lainnya ..."
              value={otherSymptom}
              onChange={(e) => setOtherSymptom(e.target.value)}
            />
          </div>
        )}

        {/* Tombol Absen dengan logika baru */}
        <button className={styles.absenButton} disabled={isButtonDisabled()}>
          Absen
        </button>
      </main>

      <BottomNav />
    </>
  );
}
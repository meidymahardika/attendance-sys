// app/home/page.tsx

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./home.module.css";
import {
  FaBell,
  FaUserCog,
  FaIdCard,
  FaFileUpload,
  FaRegChartBar,
  FaMapMarkedAlt,
  FaSitemap,
  FaCalendarAlt,
} from "react-icons/fa";
// Menggunakan path relatif sesuai kode Anda untuk menghindari error alias
import BottomNav from "../components/BottomNav";
import BottomSheet from "../components/BottomSheet";

export default function HomePage() {
  // State untuk setiap modal
  const [isHumanCapitalModalOpen, setIsHumanCapitalModalOpen] = useState(false);
  const [isPasscardModalOpen, setIsPasscardModalOpen] = useState(false);
  const [isSupplyChainModalOpen, setIsSupplyChainModalOpen] = useState(false);

  // Data tombol tetap sama, onClick untuk Submit Clearance tidak akan terpakai
  const actionButtons = [
    { label: "Human Capital", icon: <FaUserCog />, onClick: () => setIsHumanCapitalModalOpen(true) },
    { label: "Passcard", icon: <FaIdCard />, onClick: () => setIsPasscardModalOpen(true) },
    { label: "Supply Chain", icon: <FaSitemap />, onClick: () => setIsSupplyChainModalOpen(true) },
    { label: "Submit Clearance", icon: <FaFileUpload />, onClick: () => {} }
  ];

  return (
    <>
      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <Image
            src="/logo-telkomakses.png"
            alt="Telkom Akses Logo"
            width={150}
            height={30}
          />
          <FaBell />
        </header>

        {/* Konten Utama */}
        <main className={styles.mainContent}>
          <div className={styles.placeholderBox}></div>
          <div className={styles.infoCard}>
            <FaBell />
            <div className={styles.infoCardText}>
              <p>Selamat dini hari rekan!</p>
              <p>Jangan lupa untuk absen masuk sebelum pulang</p>
            </div>
          </div>

          {/* --- PERUBAHAN UTAMA DI SINI --- */}
          {/* Grid Aksi yang Di-generate dari Array dengan Logika Kondisional */}
          <div className={styles.actionGrid}>
            {actionButtons.map((button, index) => {
              // Konten tombol (ikon dan teks) yang sama untuk semua
              const buttonContent = (
                <>
                  <div className={styles.iconWrapper}>{button.icon}</div>
                  <span>{button.label}</span>
                </>
              );

              // Jika labelnya 'Submit Clearance', bungkus dengan komponen Link
              if (button.label === 'Submit Clearance') {
                return (
                  <Link href="/clearance" key={index} className={styles.actionButton}>
                    {buttonContent}
                  </Link>
                );
              }

              // Untuk tombol lainnya, gunakan div dengan onClick untuk membuka modal
              return (
                <div key={index} className={styles.actionButton} onClick={button.onClick}>
                  {buttonContent}
                </div>
              );
            })}
          </div>
        </main>
      </div>
      
      <BottomNav />

      {/* Modal untuk Human Capital */}
      <BottomSheet isOpen={isHumanCapitalModalOpen} onClose={() => setIsHumanCapitalModalOpen(false)}>
        <div className={styles.modalContentWrapper}>
          <h2 className={styles.modalTitle}>Absent</h2>
          <div className={styles.modalActionGrid}>
            <Link href="/report/absent" className={styles.modalActionButton}>
              <div className={styles.modalIconWrapper}><FaRegChartBar /></div>
              <span>Report Absent</span>
            </Link>
            <div className={styles.modalActionButton}>
              <div className={styles.modalIconWrapper}><FaMapMarkedAlt /></div>
              <span>Office Location</span>
            </div>
          </div>
        </div>
      </BottomSheet>

      {/* Modal untuk Passcard */}
      <BottomSheet isOpen={isPasscardModalOpen} onClose={() => setIsPasscardModalOpen(false)}>
        <div className={styles.modalContentWrapper}>
          <h2 className={styles.modalTitle}>Passcard</h2>
          <div className={styles.modalActionGrid}>
            <Link href="/passcard" className={styles.modalActionButton}>
              <div className={styles.modalIconWrapper}><FaIdCard /></div>
              <span>Passcard</span>
            </Link>
          </div>
        </div>
      </BottomSheet>

      {/* Modal untuk Supply Chain */}
      <BottomSheet isOpen={isSupplyChainModalOpen} onClose={() => setIsSupplyChainModalOpen(false)}>
        <div className={styles.modalContentWrapper}>
          <h2 className={styles.modalTitle}>Alker</h2>
          <div className={styles.modalActionGrid}>
            <Link href="/alker/daily" className={styles.modalActionButton}>
              <div className={styles.modalIconWrapper}>
                <FaCalendarAlt className={styles.calendarIconBase} />
                <span className={styles.calendarText}>MON</span>
              </div>
              <span>Daily Absences</span>
            </Link>
            <Link href="/alker/monthly" className={styles.modalActionButton}>
              <div className={styles.modalIconWrapper}>
                <FaCalendarAlt className={styles.calendarIconBase} />
                <span className={styles.calendarText}>AUG</span>
              </div>
              <span>Monthly Absences</span>
            </Link>
          </div>
        </div>
      </BottomSheet>
    </>
  );
}
// app/profile/page.tsx

import styles from "./profile.module.css";
import BottomNav from "../components/BottomNav"; // Pakai alias: "@/components/BottomNav" lebih baik
import {
  FaSignOutAlt,
  FaVenusMars,
  FaBirthdayCake,
  FaPrayingHands,
  FaIdBadge,
  FaBuilding,
  FaEnvelope,
  FaUsers,
} from "react-icons/fa";

export default function ProfilePage() {
  const profileDetails = [
    { icon: <FaVenusMars />, label: "Perempuan" },
    { icon: <FaBirthdayCake />, label: "Jumat, 13 Juni 2025" }, // Menggunakan tanggal besok :)
    { icon: <FaPrayingHands />, label: "null" },
    { icon: <FaIdBadge />, label: "null" },
    { icon: <FaBuilding />, label: "alamat" },
    { icon: <FaEnvelope />, label: "email" },
    { icon: <FaUsers />, label: "team?" },
  ];

  return (
    <>
      <main className={styles.container}>
        {/* Bagian Atas Berwarna Biru */}
        <div className={styles.topSection}>
          <FaSignOutAlt className={styles.logoutIcon} />
          <div className={styles.profileHeader}>
            <div className={styles.profilePic}></div>
            <div className={styles.profileInfo}>
              <p className={styles.profileId}>12345678</p>
              <h1 className={styles.profileName}>Nama</h1>
              <p className={styles.profilePosition}>Jabatan</p>
            </div>
          </div>
        </div>

        {/* Bagian Bawah Berwarna Putih */}
        <div className={styles.bottomSection}>
          <ul className={styles.detailsList}>
            {profileDetails.map((detail, index) => (
              <li key={index} className={styles.detailItem}>
                <div className={styles.detailIcon}>{detail.icon}</div>
                <span>{detail.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </main>

      <BottomNav />
    </>
  );
}
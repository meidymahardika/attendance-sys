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
import Link from 'next/link';

export default function ProfilePage() {
  const profileDetails = [
    { icon: <FaVenusMars />, label: "Perempuan" },
    { icon: <FaBirthdayCake />, label: "13 Juni 2003" }, // Menggunakan tanggal besok :)
    { icon: <FaPrayingHands />, label: "Lorem ipsum dolor sit amet" },
    { icon: <FaIdBadge />, label: "+628796543" },
    { icon: <FaBuilding />, label: "Jakarta, Indonesia" },
    { icon: <FaEnvelope />, label: "janedoe@mail.com" },
    { icon: <FaUsers />, label: "Staff" },
  ];

  return (
    <>
      <main className={styles.container}>
        {/* Bagian Atas Berwarna Biru */}
        <div className={styles.topSection}>
          <Link href={`/`}>
            <FaSignOutAlt className={styles.logoutIcon} />
          </Link>
          <div className={styles.profileHeader}>
            <div className={styles.profilePic}></div>
            <div className={styles.profileInfo}>
              <p className={styles.profileId}>12345678</p>
              <h1 className={styles.profileName}>Jane Doe</h1>
              <p className={styles.profilePosition}>Software Engineer</p>
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
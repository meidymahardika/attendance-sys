// app/clearance/page.tsx

import Link from 'next/link';
import styles from './style.module.css';
import { FaPlus } from 'react-icons/fa';
// Impor untuk komponen-komponen yang kita gunakan
import BottomNav from '../components/BottomNav';      // <-- Pastikan ini juga ada
import MainHeader from '../components/MainHeader';    // <-- TAMBAHKAN BARIS INI

// Data dummy untuk daftar submission
const submissions = [
  { id: 1, type: 'Sakit', reason: 'Alasan sakit', status: 'Approved', date: '17 April 2025' },
  { id: 2, type: 'Dinas', reason: 'Alasan Dinas', status: 'Rejected', date: '20 April 2025' },
  { id: 3, type: 'Cuti', reason: 'Alasan Cuti', status: 'On Progress', date: '20 April 2025' },
];

export default function ClearancePage() {
  const getStatusClass = (status: string) => {
    if (status === 'Approved') return styles.approved;
    if (status === 'Rejected') return styles.rejected;
    return styles.onProgress;
  };

  return (
    <div className={styles.pageWrapper}>
      <MainHeader />
      <main className={styles.mainContent}>
        <Link href="/clearance/create" className={styles.createButton}>
          <FaPlus /> Create a submission
        </Link>

        <div className={styles.submissionList}>
          {submissions.map((item) => (
            <Link href={`/clearance/${item.id}`} key={item.id} className={styles.submissionItem}>
              <div className={styles.itemInfo}>
                <p className={styles.itemDate}>{item.date}</p>
                <h3 className={styles.itemType}>{item.type}</h3>
                <p className={styles.itemReason}>{item.reason}</p>
              </div>
              <div className={`${styles.statusBadge} ${getStatusClass(item.status)}`}>
                {item.status}
              </div>
            </Link>
          ))}
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
"use client";
import { useRouter, useParams } from 'next/navigation';
import styles from './style.module.css';
import { FaArrowLeft } from 'react-icons/fa';

// Data dummy yang sama seperti di halaman list
const submissions = [
  { id: 1, type: 'Sakit', reason: 'Alasan sakit...', status: 'Approved', date: '17 April 2025', izinDate: '17 April 2025 - 19 April 2025', bukti: 'nama\nusia\nsakitnya apa\ndll, gmn doc' },
  { id: 2, type: 'Dinas', reason: 'Alasan Dinas', status: 'Rejected', date: '20 April 2025', izinDate: '20 April 2025', bukti: 'Surat Tugas' },
  { id: 3, type: 'Cuti', reason: 'Alasan Cuti', status: 'On Progress', date: '20 April 2025', izinDate: '20 April 2025 - 22 April 2025', bukti: 'Form Cuti' },
];

export default function DetailPage() {
  const router = useRouter();
  const params = useParams();
  const idParam = Array.isArray(params.id) ? params.id[0] : params.id;
  const submission = submissions.find(s => s.id === parseInt(idParam || "0"));

  if (!submission) {
    return <div>Data tidak ditemukan</div>;
  }
  
  const getStatusClass = (status: string) => {
    if (status === 'Approved') return styles.approved;
    if (status === 'Rejected') return styles.rejected;
    return styles.onProgress;
  };

  return (
    <div className={styles.pageWrapper}>
      <header className={styles.header}>
        <FaArrowLeft className={styles.backIcon} onClick={() => router.back()} />
        <h1>Detail Izin</h1>
      </header>
      <main className={styles.mainContent}>
        <div className={`${styles.statusBadge} ${getStatusClass(submission.status)}`}>
          {submission.status}
        </div>
        <h2 className={styles.title}>{submission.type}</h2>
        <div className={styles.detailSection}>
          <div className={styles.detailItem}>
            <p className={styles.detailLabel}>Tanggal Pengajuan</p>
            <p className={styles.detailValue}>{submission.date}</p>
          </div>
          <div className={styles.detailItem}>
            <p className={styles.detailLabel}>Tanggal Izin</p>
            <p className={styles.detailValue}>{submission.izinDate}</p>
          </div>
          <div className={styles.detailItem}>
            <p className={styles.detailLabel}>Alasan</p>
            <p className={styles.detailValue}>{submission.reason}</p>
          </div>
          <div className={styles.detailItem}>
            <p className={styles.detailLabel}>Bukti</p>
            <p className={`${styles.detailValue} ${styles.bukti}`}>{submission.bukti}</p>
          </div>
        </div>
      </main>
    </div>
  )
}

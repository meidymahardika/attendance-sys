"use client";
import { useRouter, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './style.module.css';
import { FaArrowLeft } from 'react-icons/fa';
import { getClearanceById } from '@/service/clearance/clearanceService';

interface Submission {
  id: number;
  status?: string;
  jenis?: string;        
  tanggal_pengajuan?: string;    
  tanggal_izin?: string; 
  alasan?: string;   
}

export default function DetailPage() {
  const router = useRouter();
  const params = useParams();
  const idParam = Array.isArray(params.id) ? params.id[0] : params.id;

  const [submission, setSubmission] = useState<Submission | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!idParam) return;
    setLoading(true);
    getClearanceById(idParam)
      .then((res) => {
        // Ubah mapping jika field di API beda (lihat di bawah)
        setSubmission({
          id: res.data.id,
          status: res.data.status,
          jenis: res.data.jenis,
          tanggal_pengajuan: res.data.tanggal_pengajuan,
          tanggal_mulai: res.data.tanggal_mulai,
          tanggal_akhir: res.data.tanggal_akhir,
          alasan: res.data.alasan,
          tanggal_izin: `${res.data.tanggal_mulai} s/d ${res.data.tanggal_akhir}`,
          ...res.data
        });
      })
      .catch(() => setError("Gagal mengambil data"))
      .finally(() => setLoading(false));
  }, [idParam]);

  const getStatusClass = (status: string) => {
    if (status === 'approved') return styles.approved;
    if (status === 'rejected') return styles.rejected;
    return styles.onProgress;
  };

  if (loading) return <div className={styles.pageWrapper}><p>Loading...</p></div>;
  if (error) return <div className={styles.pageWrapper}><p>{error}</p></div>;
  if (!submission) return <div className={styles.pageWrapper}><p>Data tidak ditemukan</p></div>;

  return (
    <div className={styles.pageWrapper}>
      <header className={styles.header}>
        <FaArrowLeft className={styles.backIcon} onClick={() => router.back()} />
        <h1>Detail Izin</h1>
      </header>
      <main className={styles.mainContent}>
        <div className={`${styles.statusBadge} ${getStatusClass(submission.status || '')}`} style={{ width: '100%', textAlign: 'center' }}>
          {submission.status}
        </div>
        <h2 className={styles.title}>{submission.jenis}</h2>
        <div className={styles.detailSection}>
          <div className={styles.detailItem}>
            <p className={styles.detailLabel}>Tanggal Pengajuan</p>
            <p className={styles.detailValue}>{submission.tanggal_pengajuan}</p>
          </div>
          <div className={styles.detailItem}>
            <p className={styles.detailLabel}>Tanggal Izin</p>
            <p className={styles.detailValue}>{submission.tanggal_izin}</p>
          </div>
          <div className={styles.detailItem}>
            <p className={styles.detailLabel}>Alasan</p>
            <p className={styles.detailValue}>{submission.alasan}</p>
          </div>
          {/* <div className={styles.detailItem}>
            <p className={styles.detailLabel}>Bukti</p>
            <p className={`${styles.detailValue} ${styles.bukti}`}>{submission.bukti}</p>
            Bisa tambahkan preview/download link jika ini file
          </div> */}
        </div>
      </main>
    </div>
  );
}

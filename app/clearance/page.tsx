'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './style.module.css';
import { FaPlus } from 'react-icons/fa';
import BottomNav from '../components/BottomNav';
import MainHeader from '../components/MainHeader';
import { getClearance } from '@/service/clearance/clearanceService';

// Tipe data, sesuaikan dengan struktur data dari API kamu
interface Submission {
  id: number;
  type: string;
  reason: string;
  status: string;
  date: string;
}

export default function ClearancePage() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getStatusClass = (status: string) => {
    if (status === 'Approved') return styles.approved;
    if (status === 'Rejected') return styles.rejected;
    return styles.onProgress;
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getClearance();
        if (Array.isArray(data)) {
          setSubmissions(data);
        } else if (data && data.data) {
          // Jika API kamu balas dalam { data: [...] }
          setSubmissions(data.data);
        } else {
          setError('Data not found');
        }
      } catch (err) {
        setError('Failed to fetch clearance data');
        console.log(err);
        
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.pageWrapper}>
      <MainHeader />
      <main className={styles.mainContent}>
        <Link href="/clearance/create" className={styles.createButton}>
          <FaPlus /> Create a submission
        </Link>

        <div className={styles.submissionList}>
          {loading && <p>Loading...</p>}
          {error && <p className={styles.errorMsg}>{error}</p>}
          {!loading && !error && submissions.length === 0 && <p>No submission found.</p>}

          {!loading && !error && submissions.map((item) => (
            <Link href={`/clearance/${item.id}`} key={item.id} className={styles.submissionItem}>
              <div className={styles.itemInfo}>
                <p className={styles.itemDate}>{item.tanggal_pengajuan}</p>
                <h3 className={styles.itemType}>{item.jenis}</h3>
                <p className={styles.itemReason}>{item.alasan}</p>
              </div>
              <div className={`${styles.statusBadge} ${getStatusClass(item.status)}`} style={{ backgroundColor: item.status === 'rejected' ? '#E33B3B' : item.status === 'pending' ? '#727272' : '#5DC647' }}>
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

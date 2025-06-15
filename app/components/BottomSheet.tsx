// app/components/BottomSheet.tsx

"use client";

import { ReactNode } from 'react';
import styles from './BottomSheet.module.css';

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function BottomSheet({ isOpen, onClose, children }: BottomSheetProps) {
  if (!isOpen) {
    return null;
  }

  return (
    // Backdrop gelap yang bisa diklik untuk menutup
    <div className={styles.backdrop} onClick={onClose}>
      {/* Konten modal putih */}
      <div
        className={styles.sheet}
        // Menghentikan event klik agar tidak "bocor" ke backdrop dan menutup modal
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
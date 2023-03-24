import Link from "next/link";
import React from "react";
import styles from "../../styles/layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.layoutContainer}>
      <div className={styles.menuContainer}>
        <li>
          <Link href="/"> Home </Link>
        </li>
        <li>
          <Link href="/khe"> About </Link>
        </li>
        <li>
          <Link href="/blog"> Blog </Link>
        </li>
      </div>
      {children}
    </div>
  );
}

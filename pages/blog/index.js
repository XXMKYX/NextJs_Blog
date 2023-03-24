import React from "react";
import Link from "next/link";
import styles from "../../styles/blog.module.css";

export default function index() {
  return (
    <div className={styles.container}>
      <h1> My Blog</h1>
      <div>
        <h2> PostList: </h2>
        <div className={styles.list}>
          <ul>
            <li>
              {/* legacyBehavior permite contener <a> en <Link> */}
              <Link legacyBehavior href="blog/post_01">
                <a>First Post</a>
              </Link>
            </li>
            <li>
              {/* legacyBehavior permite contener <a> en <Link> */}
              <Link legacyBehavior href="blog/post_02">
                <a>Second Post</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

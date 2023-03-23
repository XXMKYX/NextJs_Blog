import React from "react";
import Link from "next/link";

export default function index() {
  return (
    <div>
      <h1> My Blog</h1>
      <div>
        <h2> PostList </h2>
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
  );
}

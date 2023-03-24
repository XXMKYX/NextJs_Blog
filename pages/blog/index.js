import React from "react";
import Link from "next/link";
import styles from "../../styles/blog.module.css";

export default function index({ posts }) {
  return (
    <div className={styles.container}>
      <h1> My Blog</h1>
      <br></br>
      <div>
        <h2> Local Post: </h2>
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
      <div>
        <h2>API Post:</h2>
        <div className={styles.list}>
          <ul>
            {/* Mapeo de los props recibidos (La Api) */}
            {posts.map((post, i) => (
              <li key={i}>
                <Link legacyBehavior href={`blog/${post.url}`}>
                  <a>{post.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
//Solicitud HTTP
export async function getStaticProps() {
  const data = await fetch("http://localhost:3000/api/hello");
  const jsondata = await data.json();
  //retorna los datos de la api como props
  return {
    props: { posts: jsondata },
  };
}

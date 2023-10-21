import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "../styles/navBar.module.scss";
export default function NavBar() {
  const router = useRouter();

  return (
    <div className={styles.navBar}>
      <Link
        className={router.pathname == "/" ? styles.activeLink : ""}
        href="/">
        Home
      </Link>
      <Link
        className={router.pathname == "/projects" ? styles.activeLink : ""}
        href="/projects">
        Projects
      </Link>
      <a
        className={styles.cvBtn}
        target="_blank"
        rel="noreferrer"
        href="https://drive.google.com/file/d/1drO6O7ADary74RJAAhoyD3rCz1gdQhgh/view?usp=sharing">
        Resume
      </a>
    </div>
  );
}

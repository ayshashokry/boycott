import Head from "next/head";
import AboutMe from "../components/AboutMe";
import styles from "../styles/Home.module.scss";
import Projects from "./projects";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>BoyCott-مقاطعة</title>
      </Head>

      <div className={styles.main}>
        <div className={styles.introHeader}>
          <h4>Hi, my name is</h4>
          <h1>Aysha Shokry Abdelfatah</h1>
          <p>
            I am a software engineer specializing in developing websites and web
            applications by using web technologies. I love to create beautiful
            and performant products with delightful user experiences.
          </p>
        </div>
        {/* About Me */}
        <AboutMe />

        {/* Projects */}
        <Projects homePage />
      </div>
    </div>
  );
}

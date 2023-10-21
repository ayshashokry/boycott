import React from "react";
import { Row, Col } from "antd";
import styles from "../styles/aboutMe.module.scss";
import Image from "next/image";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiSass, DiJavascript1, DiReact } from "react-icons/di";
import { SiTypescript, SiNextdotjs } from "react-icons/si";
import homeStyles from "../styles/Home.module.scss";
export default function AboutMe() {
  const skills = [
    {
      name: "HTML5",
      icon: <AiFillHtml5 />,
    },
    {
      name: "CSS3",
      icon: <DiCss3 />,
    },
    {
      name: "SASS",
      icon: <DiSass />,
    },
    {
      name: "JavaScript",
      icon: <DiJavascript1 />,
    },    {
      name: "Type-Script",
      icon: <SiTypescript />,
    },

    {
      name: "ReactJs",
      icon: <DiReact />,
    },
    {
      name: "NextJs",
      icon: <SiNextdotjs />,
    },

  ];
  return (
    <div className={styles.aboutSection}>
      <h4 className={homeStyles.mainTitle}>About me</h4>
      <Row>
        <Col sm={{ span: 24 }} md={{ span: 18 }} lg={{ span: 12 }}>
          <p>
            Hello! My name is <strong>Aysha</strong> and I enjoy creating things
            that live on the internet. My interest in web development started
            back in 2018 after graduating from
            <strong> the faculty of computers and information </strong>
            then I decided to be a web developer and attended a web diploma to
            improve my skills.
          </p>
          <p>
            My main focus these days is improving my skills and building
            accessible, inclusive websites for a variety of clients.
          </p>
          <p>
            I am Seeking to work in multinational companies to have the
            opportunity to gain experience.
          </p>
        </Col>
        <Col
          style={{ textAlign: "center", width: "100%" }}
          sm={{ span: 24 }}
          md={{ span: 18 }}
          lg={{ span: 12 }}>
          <div className={styles.imgParent}>
            <img
              className={styles.userImg}
              src="https://lh4.googleusercontent.com/fEq9UjgXZvoWk-28EestxC9PHNyr7AxekHD_jsC-5O81sWjq6jDdQvtn8ZhOfovdh_8=w2400"
              alt="Aysha's image"
              height={400}
            />
          </div>
        </Col>
      </Row>
      <h4 style={{ paddingTop: "90px" }} className={homeStyles.mainTitle}>
        Technical skills
      </h4>
      <ul className={styles.skillsList}>
        {skills.map((s, index) => (
          <li key={index}>
            <span>{s.icon}</span> {s.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

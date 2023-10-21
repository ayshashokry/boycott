import { FiGithub, FiLinkedin } from "react-icons/fi";
import styles from "../styles/generalStyles.module.scss";

export default function SocialIcons() {
  const links = [
    {
      link: "https://www.linkedin.com/in/aysha-shokry-504303101/",
      icon: <FiLinkedin />,
    },
    {
      link: "https://github.com/ayshashokry",
      icon: <FiGithub />,
    },
  ];
  return (
    <ul className={styles.socialIcons}>
      {links.map((l, index) => (
        <li key={index}>
          <a href={l.link} target="_blank" rel="noreferrer">
            {l.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}

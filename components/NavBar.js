import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "../styles/navBar.module.scss";
import { useTranslation } from "react-i18next";
import { Button } from "antd";
import Image from "next/image";

import palestine from "../assets/images/palestineICON.png";
export default function NavBar() {
  const router = useRouter();
  const { t, i18n } = useTranslation("data");
  const toggleCurrentLang = () => {
    if (i18n.language === "en") {
      i18n.changeLanguage("ar");
    } else {
      i18n.changeLanguage("en");
    }
  };
  return (
    <div className={styles.navBar}>
      <p className={styles.navLinkAbout}>
        {" "}
        <Link
          className={router.pathname == "/ourStory" ? styles.activeLink : ""}
          href="/ourStory"
        >
          عن قضيتنا
        </Link>
      </p>
      <div className={styles.freePalestine}>
        <h4>ستظل فلسطين أرض عربية فلسطينية</h4>{" "}
      </div>
      {/* <Button onClick={toggleCurrentLang}>
         {i18n.language == "ar" ? (
          "En"
        ) : (
          <>
            <Image style={{ width: "15px", height: "15px" }} src={palestine} />
            العربية
          </>
        )} 
      </Button> */}
    </div>
  );
}

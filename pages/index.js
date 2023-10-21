import Head from "next/head";
import AboutMe from "../components/AboutMe";
import styles from "../styles/Home.module.scss";
import Projects from "./projects";
import "../i18n";
import { useTranslation } from "react-i18next";
import DropDownTypes from "../components/DropDownTypes";
import { useState } from "react";
import data from "../data/getData";
import ProductCard from "../components/ProductCard";
import { Col, Row } from "antd";
export default function Home() {
  const { t } = useTranslation("data");
  const [selectedValue, setSelectedType] = useState(
    t("boycottTypes.resturant")
  );
  const [dataSelected, setDataSelected] = useState("resturants");
  const handleSelectType = (value, e) => {
    setSelectedType(e.value);
    setDataSelected(e.title);
  };
  const [types] = useState([
    { id: 1, value: t("boycottTypes.resturant"), title: "resturants" },
    { id: 2, value: t("boycottTypes.clean"), title: "clean" },
    { id: 3, value: t("boycottTypes.sweets"), title: "sweets" },
    // { id: 4, value: t("boycottTypes.companies"), title: "companies" },
    { id: 5, value: t("boycottTypes.drinks"), title: "drinks" },
    { id: 6, value: t("boycottTypes.cosmetics"), title: "cosmetics" },
    { id: 7, value: t("boycottTypes.dairyProducts"), title: "dairyProducts" },
    { id: 8, value: t("boycottTypes.chocklate"), title: "chocklate" },
    { id: 9, value: t("boycottTypes.snacks"), title: "snacks" },
  ]);

  let dataToMap = data()[dataSelected];
  return (
    <div className={styles.container}>
      <Head>
        <title>BoyCott-مقاطعة</title>
      </Head>
      {console.log(dataToMap?.productsEx)}
      <div className={styles.main}>
        <div className={styles.introHeader}>
          {/* {t("title")} */}

          <DropDownTypes
            selectedValue={selectedValue}
            handleSelectType={handleSelectType}
            types={types}
          />
          <Row gutter={[16, 16]} className={styles.cardsParent}>
            {dataToMap?.length > 0 &&
              dataToMap?.map((p, idx) => (
                <Col md={{ span: 6 }} sm={{ span: 24 }}>
                  {" "}
                  <ProductCard classN={styles.productCard} product={p} />
                </Col>
              ))}
          </Row>
        </div>
      </div>
    </div>
  );
}

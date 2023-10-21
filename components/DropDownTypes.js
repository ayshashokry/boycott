import { Form, Select } from "antd";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function DropDownTypes(props) {
  const { t } = useTranslation("data");

  return (
    <Form className="typeForm" layout="vertical">
      {/* <Form.Item label={t("boycottTypes.boyType")}> */}
      <Select
        value={props.selectedValue}
        onChange={props.handleSelectType}
        placeholder={t("boycottTypes.boyType")}
      >
        {props.types?.map((t, idx) => (
          <Select.Option title={t.title} value={t.value} id={t.id}>
            {t.value}
          </Select.Option>
        ))}
      </Select>
      {/* </Form.Item> */}
    </Form>
  );
}

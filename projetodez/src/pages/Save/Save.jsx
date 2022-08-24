import React from "react";
import S from "./Save.module.css";
import { FiUserCheck } from "react-icons/fi"

const Save = () => {

  return (
    <div className={S.container}>
      <h3 className={S.save}>Cadastro Salvo!</h3>
      <FiUserCheck size="40px" color="#FFF000"/>
    </div>
  );
};

export default Save;
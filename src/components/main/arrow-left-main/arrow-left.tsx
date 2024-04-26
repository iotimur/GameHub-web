import React from "react";

import a from "./arrow-left.module.css";

const arrow_leftClassName = "arrow-left";

import { arrow_left } from "../../../../assets/Images_main";

export const ArrowLeft = (props) => {
  return (
    <img className={a[arrow_leftClassName]} src={arrow_left} alt="arrow_left" />
  );
};

import React from "react";

import a from "./arrow-right.module.css";

const arrow_rightClassName = "arrow-right";

import { arrow_right } from "../../../../assets/Images_main";

export const ArrowRight = (props) => {
  return (
    <img
      className={a[arrow_rightClassName]}
      src={arrow_right}
      alt="arrow_right"
    />
  );
};

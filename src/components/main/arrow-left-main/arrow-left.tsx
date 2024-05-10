import React from "react";

import { arrow_left } from "../../../../assets/Images_main";

import { ArrowLeftMain } from "./arrow-left.styled";

export const ArrowLeft = (props) => {
  return <ArrowLeftMain src={arrow_left} alt="arrow_left" id={props.id} />;
};

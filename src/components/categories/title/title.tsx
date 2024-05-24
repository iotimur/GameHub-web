import React from "react";

import { TitleMain } from "./title.styled";

export const Title = (props) => {
  return (
    <TitleMain>
      <h2>{props.text}</h2>
    </TitleMain>
  );
};

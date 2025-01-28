import React from "react";

import { TitleCategory, TitleRectangle } from "./title.styled";

export const Title = (props) => {
  return (
    <div>
      <TitleRectangle>
        <TitleCategory>{props.text}</TitleCategory>
      </TitleRectangle>

    </div>
  );
};

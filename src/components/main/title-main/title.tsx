import React from "react";

import t from "./title.module.css";

export const Title = (props) => {
  return (
    <div className={t.title}>
      <h2>{props.text}</h2>
    </div>
  );
};

import React from "react";
import Page from "../page/page";

const Leaders = ({ sortOption,Games}) => {
  return (
    <div>
      <Page title="Лидеры продаж" games={Games} sortOption={sortOption}/>
    </div>
  );
};

export default Leaders;
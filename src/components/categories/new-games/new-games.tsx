import React from "react";
import Page from "../page/page";

const NewGames = ({ sortOption,Games }) => {
  return (
    <div>
      <Page title="Новинки" games={Games} sortOption={sortOption} />
    </div>
  );
};

export default NewGames;

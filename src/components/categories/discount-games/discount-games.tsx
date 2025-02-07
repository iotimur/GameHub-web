import React from "react";
import Page from "../page/page";


const DiscountGames = ({ sortOption,Games}) => {
  return (
    <div>
       <Page title="Скидки" games={Games} sortOption={sortOption}/>
    </div>
  );
};


export default DiscountGames;
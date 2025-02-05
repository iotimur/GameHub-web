import React from "react";
import FavouritesComponent from "../components/favourites/favourites";
import { CommonMain, ContainerMain} from "../components/main/main-container/main.styled";

const Favourites = () => {
  return (
    <>
      <CommonMain>
        <ContainerMain>
          <FavouritesComponent />
        </ContainerMain>
      </CommonMain>
    </>
  );
};

export default Favourites;

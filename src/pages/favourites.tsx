import React from "react";
import FavouritesComponent from "../components/favourites/favourites";
import { CommonMain, ContainerMain, PageContainer } from "../components/main/main-container/main.styled";
import { CategoriesMain } from "../components/categories/categories.styled";

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

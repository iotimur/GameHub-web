import React from "react";
import FavouritesComponent from "../components/favourites/favourites";
import { CommonMain, ContainerMain, PageContainer } from "../components/main/main-container/main.styled";
import { CategoriesMain } from "../components/categories/categories.styled";

const Favourites = () => {
  return (
    <>
      <PageContainer>
        {/* <CommonMain>
          <ContainerMain> */}
            <CategoriesMain>
            <FavouritesComponent />
            </CategoriesMain>
          {/* </ContainerMain>
        </CommonMain> */}
      </PageContainer>
    </>
  );
};

export default Favourites;

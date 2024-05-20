import React from "react";

import { ContainerMain, CardsMain } from "./main.styled";

import { Search } from "../search-line";
import { Title } from "../title-main";
import { GalleryTopSail } from "../gallery-top-sail";
import { GalleryCategories } from "../gallery-caregories";
import { GalleryNews } from "../gallery-news";
import LinkMain from "../link-main/link-main";

const MainContent = () => {
  return (
    <ContainerMain>
      <LinkMain />

      <main>
        <Search />
        <Title text="Лидеры продаж" />

        <CardsMain>
          <GalleryTopSail></GalleryTopSail>
        </CardsMain>

        <Title text="Категории" />

        <CardsMain>
          <GalleryCategories></GalleryCategories>
        </CardsMain>

        <Title text="Новости" />

        <CardsMain>
          <GalleryNews></GalleryNews>
        </CardsMain>
      </main>
      <script src="./move-arrows.js"></script>
    </ContainerMain>
  );
};

export default MainContent;

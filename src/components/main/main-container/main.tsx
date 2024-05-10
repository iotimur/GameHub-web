import React from "react";

import m from "./main.module.css";

import { ContainerMain, CardsMain, GalleryMain } from "./main.styled";

import { Search } from "../search-line";
import { Title } from "../title-main";
import { ArrowLeft } from "../arrow-left-main";
import { ArrowRight } from "../arrow-right-main";
import { CardTopSail } from "../card-main-top-sail";
import { CardCategories } from "../card-main-categories";
import { CardNews } from "../card-main-news";
import LinkMain from "../link-main/link-main";

// import "./move-arrows.js";

import {
  img_top_1,
  img_top_2,
  img_top_3,
  img_top_4,
  img_categories_1,
  img_categories_2,
  img_categories_3,
  img_categories_4,
  img_news_1,
  img_news_2,
} from "../../../../assets/Images_main";

const MainContent = () => {
  // useEffect(() => {
  //   // Логика скрипта move-arrows.js может быть выполнена здесь
  // }, []);
  return (
    <ContainerMain>
      <LinkMain />

      <main>
        <Search />
        <Title text="Лидеры продаж" />

        <CardsMain>
          <ArrowLeft id="leftBtn" />
          <GalleryMain>
            <CardTopSail img={img_top_1} price="$10" />
            <CardTopSail img={img_top_2} price="$12" />
            <CardTopSail img={img_top_3} price="$11" />
            <CardTopSail img={img_top_4} price="$15" />
            <CardTopSail img={img_top_1} price="$10" />
            <CardTopSail img={img_top_1} price="$10" />
            <CardTopSail img={img_top_1} price="$10" />
            <CardTopSail img={img_top_1} price="$10" />
          </GalleryMain>
          <ArrowRight id="rightBtn" />
        </CardsMain>

        <Title text="Категории" />

        <CardsMain>
          <ArrowLeft id="leftBtn_categories" />
          <CardCategories img={img_categories_1} text="гонки" />
          <CardCategories img={img_categories_2} text="глубокий сюжет" />
          <CardCategories img={img_categories_3} text="симуляторы" />
          <CardCategories img={img_categories_4} text="открытый мир" />
          <ArrowRight id="rightBtn_categories" />
        </CardsMain>

        <Title text="Новости" />

        <CardsMain>
          <ArrowLeft id="leftBtn_news" />
          <CardNews
            img={img_news_1}
            text="Разработчики Delta Force: Hawk Ops представили крупномасштабный
                режим Havoc Warfare"
          />
          <CardNews
            img={img_news_2}
            text="Разработчики Delta Force: Hawk Ops представили крупномасштабный
                режим Havoc Warfare"
          />
          <ArrowRight id="rightBtn_news" />
        </CardsMain>
      </main>
      <script src="./move-arrows.js"></script>
    </ContainerMain>
  );
};

export default MainContent;

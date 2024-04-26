import React from "react";

import m from "./main.module.css";

import { Search } from "../search-line";
import { Title } from "../title-main";
import { ArrowLeft } from "../arrow-left-main";
import { ArrowRight } from "../arrow-right-main";
import { CardTopSail } from "../card-main-top-sail";
import { CardCategories } from "../card-main-categories";
import { CardNews } from "../card-main-news";
import LinkMain from "../link-main/link-main";

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
  return (
    <div className={m.container}>
      <LinkMain />

      <main>
        <Search />
        <Title text="Лидеры продаж" />

        <div className={m.cards}>
          <ArrowLeft />
          <CardTopSail img={img_top_1} price="$10" />
          <CardTopSail img={img_top_2} price="$12" />
          <CardTopSail img={img_top_3} price="$11" />
          <CardTopSail img={img_top_4} price="$15" />
          <ArrowRight />
        </div>

        <Title text="Категории" />

        <div className={m.cards}>
          <ArrowLeft />
          <CardCategories img={img_categories_1} text="гонки" />
          <CardCategories img={img_categories_2} text="глубокий сюжет" />
          <CardCategories img={img_categories_3} text="симуляторы" />
          <CardCategories img={img_categories_4} text="открытый мир" />
          <ArrowRight />
        </div>

        <Title text="Новости" />

        <div className={m.cards}>
          <ArrowLeft />
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
          <ArrowRight />
        </div>
      </main>
    </div>
  );
};

export default MainContent;

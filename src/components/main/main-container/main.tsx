import React, { useEffect, useState } from "react";
import { URLs } from "../../../_data_/urls";

import { ContainerMain, CardsMain, CommonMain } from "./main.styled";

import { Search } from "../search-line";
import { Title } from "../title-main";
import { GalleryTopSail } from "../gallery-top-sail";
import { GalleryCategories } from "../gallery-caregories";
import { GalleryNews } from "../gallery-news";
import LinkMain from "../link-main/link-main";

import {
  img_top_1,
  img_top_2,
  img_top_3,
  img_top_4,
  img_top_5,
  img_top_6,
  img_top_7,
  img_top_8,
  img_categories_1,
  img_categories_2,
  img_categories_3,
  img_categories_4,
  img_categories_5,
  img_categories_6,
  img_categories_7,
  img_categories_8,
  img_news_1,
  img_news_2,
  img_news_3,
  img_news_4,
} from "../../../assets/Images_main";

const imagesTopSail = {
  game1: img_top_1,
  game2: img_top_2,
  game3: img_top_3,
  game4: img_top_4,
  game5: img_top_5,
  game6: img_top_6,
  game7: img_top_7,
  game8: img_top_8,
};

const imagesCategories = {
  category1: img_categories_1,
  category2: img_categories_2,
  category3: img_categories_3,
  category4: img_categories_4,
  category5: img_categories_5,
  category6: img_categories_6,
  category7: img_categories_7,
  category8: img_categories_8,
};

const imagesNews = {
  news1: img_news_1,
  news2: img_news_2,
  news3: img_news_3,
  news4: img_news_4,
};

const MainContent = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`${URLs.api.main}/data`)
      .then((response) => response.json())
      .then((data) => {
        setData(data.data);
      });
  }, []);

  if (!data) return null;
  console.log(111, imagesTopSail);
  return (
    <CommonMain>
      <ContainerMain>
        <LinkMain />

        <main>
          <Search />
          <Title text="Лидеры продаж" />

          <CardsMain>
            <GalleryTopSail
              data={data.topSail}
              img={imagesTopSail}
            ></GalleryTopSail>
          </CardsMain>

          <Title text="Категории" />

          <CardsMain>
            <GalleryCategories
              data={data.categories}
              img={imagesCategories}
            ></GalleryCategories>
          </CardsMain>

          <Title text="Новости" />

          <CardsMain>
            <GalleryNews data={data.news} img={imagesNews}></GalleryNews>
          </CardsMain>
        </main>
      </ContainerMain>
    </CommonMain>
  );
};

export default MainContent;

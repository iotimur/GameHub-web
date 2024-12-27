import React, { useEffect, useState } from "react";
import { URLs } from "../../../_data_/urls";
// import data from "../../../../stubs/json/home-page-data/success.json";
import * as images from "../../../assets/Images_main"

import { ContainerMain, CardsMain, CommonMain } from "./main.styled";

import * as getHomeSelectors from "../../../_data_/selectors/home-page";
import { useDispatch, useSelector } from "react-redux";
import { mainApi } from "../../../_data_/service/main-api";

import { Search } from "../search-line";
import { Title } from "../title-main";
import { GalleryTopSail } from "../gallery-top-sail";
import { GalleryCategories } from "../gallery-caregories";
import { GalleryNews } from "../gallery-news";
import LinkMain from "../link-main/link-main";


const MainContent = () => {
  const { isFetching, isLoading, data, error } = mainApi.useHomePageQuery();

  if(isFetching) {
    return <div>Loading</div>
    }
  
    if(error) {
      return <div>Error parser</div>
    }
  
    if(!data) {
      return <div>Something was wrong</div>
    }
  
    console.log(isFetching, isLoading, data, error);

    // Генерация объекта изображений на основе JSON данных
  const generateImages = (data) =>
    data.reduce((acc, item) => {
      acc[item.image] = images[item.imgPath]; // Связываем имена с импортированными изображениями
      return acc;
    }, {});

  const imagesTopSail = generateImages(data.topSail);
  const imagesCategories = generateImages(data.categories);
  const imagesNews = generateImages(data.news)

  return (
    <CommonMain>
      <ContainerMain>
        <LinkMain />

        <main>
          <Search />
          <Title text="Лидеры продаж" />

          <CardsMain>
            <GalleryTopSail data={data.topSail} img={imagesTopSail}></GalleryTopSail>
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

import React from "react";
import * as images from "../../../assets/Images_main";
import { useTranslation } from 'react-i18next';

import {
  ContainerMain,
  CardsMain,
  CommonMain,
  LottieWrapper,
  AnimationContainer,
  StyledText,
} from "./main.styled";

import { mainApi } from "../../../_data_/service/main-api";

import { Search } from "../search-line";
import { Title } from "../title-main";
import { GalleryTopSail } from "../gallery-top-sail";
import { GalleryCategories } from "../gallery-caregories";
import { GalleryNews } from "../gallery-news";
import LinkMain from "../link-main/link-main";
import Lottie from "lottie-react"; // Импортируем для анимаций
import somethingWrong from "../../../assets/Images_main/something_wrong_cat.json"; // что-то пошло не так
import errorAnimation from "../../../assets/Images_main/error_dog.json"; // Анимация ошибки

import { getFeatures } from '@brojs/cli';

const MainContent = () => {
  const getGameHubFeatures = () => getFeatures('gamehub');
  const display_search_line = !!getGameHubFeatures()?.['home-search-games'] || false;
  console.log("Отображение поиска", display_search_line)

  const { t } = useTranslation();
  const { isFetching, isLoading, data, error } = mainApi.useHomePageQuery();

  console.log(isFetching, isLoading, data, error);

  // Если идет загрузка, показываем анимацию загрузки или текст
  if (isFetching || isLoading) {
    return (
      <AnimationContainer style={{ textAlign: "center" }}>
        <LottieWrapper>
          <Lottie animationData={somethingWrong} />
        </LottieWrapper>
        <StyledText>{t('main_loading')}</StyledText>
      </AnimationContainer>
    );
  }

  // Если ошибка при запросе данных, показываем анимацию ошибки
  if (error) {
    return (
      <AnimationContainer style={{ textAlign: "center" }}>
        <LottieWrapper>
          <Lottie animationData={errorAnimation} />
        </LottieWrapper>
        <StyledText>{t('main_error')}</StyledText>
      </AnimationContainer>
    );
  }

  // Если данные пустые, показываем анимацию для пустых данных
  if (!data || !data.topSail || data.topSail.length === 0) {
    return (
      <AnimationContainer style={{ textAlign: "center" }}>
        <LottieWrapper>
          <Lottie animationData={somethingWrong} />
        </LottieWrapper>
        <StyledText>{t('main_empty')}</StyledText>
      </AnimationContainer>
    );
  }

  // Генерация объекта изображений на основе JSON данных
  const generateImages = (data) =>
    data.reduce((acc, item) => {
      acc[item.image] = images[item.imgPath]; // Связываем имена с импортированными изображениями
      return acc;
    }, {});

  const imagesTopSail = generateImages(data.topSail);
  const imagesCategories = generateImages(data.categories);
  const imagesNews = generateImages(data.news);

  return (
    <CommonMain>
      <ContainerMain>
        <LinkMain />

        <main>
          {display_search_line && (<Search />)}
          <Title text={t("main_sales_leaders")} />

          <CardsMain>
            <GalleryTopSail
              data={data.topSail}
              img={imagesTopSail}
            ></GalleryTopSail>
          </CardsMain>

          <Title text={t("main_categories")} />

          <CardsMain>
            <GalleryCategories
              data={data.categories}
              img={imagesCategories}
            ></GalleryCategories>
          </CardsMain>

          <Title text={t("main_news")} />

          <CardsMain>
            <GalleryNews data={data.news} img={imagesNews}></GalleryNews>
          </CardsMain>
        </main>
      </ContainerMain>
    </CommonMain>
  );
};

export default MainContent;

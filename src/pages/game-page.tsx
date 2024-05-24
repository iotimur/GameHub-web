import React, { useState } from 'react';
import { ErrorBoundary } from "../components/error-boundary";
import Header from "../components/main/header/header";
import { Footer } from '../components/footer/footer';
import PriceBlock from '../components/game-page/price-block/price-block';
import GameInfo from '../components/game-page/game-info/game-info';
import Trailer from '../components/game-page/trailer/trailer';
import Gallery from '../components/game-page/gallery-scroll/gallery-scroll';
import { AboutGame } from '../components/game-page/about-game/about-game';
import RatingBlock from '../components/game-page/rating-block/rating-block';
import SystemRequirements from '../components/game-page/system-requirements/system-requirements';
import CommentsSection from '../components/game-page/comments-section/comment-section';
import Modal from '../components/game-page/modal/modal'; // Предполагается, что у вас есть компонент Modal

import * as Styled from '../components/game-page/game-page.styled';

const comments = [
  { username: 'Пользователь1', text: 'Текст комментария 1' },
  { username: 'Пользователь2', text: 'Текст комментария 2' },
  { username: 'Пользователь3', text: 'Текст комментария 3' },
  { username: 'Пользователь4', text: 'Текст комментария 4' },
];

const GamePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); // Предполагается, что у вас есть переменная для хранения URL выбранного изображения

  // Функция для открытия модального окна с изображением
  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  // Функция для закрытия модального окна
  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <Styled.Body>
      <ErrorBoundary>
        <Header />
        <Styled.Main>
          <Styled.Header2>
            <h1>Elden Ring</h1>
          </Styled.Header2>
          <Styled.GroupTrGameInfo>
            <Trailer />
            <GameInfo />
          </Styled.GroupTrGameInfo>
          <Gallery openModal={openModal} />
          <PriceBlock />
          <Styled.GroupRatingAboutGame>
            <AboutGame />
            <RatingBlock />
          </Styled.GroupRatingAboutGame>
          <SystemRequirements />
          <CommentsSection comments={comments} />
        </Styled.Main>
      </ErrorBoundary>
      <Footer />
      {isModalOpen && <Modal imageUrl={selectedImage} onClose={closeModal} />}
    </Styled.Body>
  );
};

export default GamePage;

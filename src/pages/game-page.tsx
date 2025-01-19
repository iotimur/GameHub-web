import React, { useState, useEffect } from "react";
import { ErrorBoundary } from "../components/error-boundary";
import Header from "../components/main/header/header";
import { Footer } from "../components/footer/footer";
import PriceBlock from "../components/game-page/price-block/price-block";
import GameInfo from "../components/game-page/game-info/game-info";
import Trailer from "../components/game-page/trailer/trailer";
import Gallery from "../components/game-page/gallery-scroll/gallery-scroll";
import { AboutGame } from "../components/game-page/about-game/about-game";
import RatingBlock from "../components/game-page/rating-block/rating-block";
import SystemRequirements from "../components/game-page/system-requirements/system-requirements";
import CommentsSection from "../components/game-page/comments-section/comment-section";
import Modal from "../components/game-page/modal/modal";
import commentsData from "../../stubs/json/gamepage/success.json"; 
import { mainApi } from "../_data_/service/main-api"; // Импорт API

import * as Styled from "../components/game-page/game-page.styled";

const GamePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const { data, isFetching, error } = mainApi.useCommentsPageQuery();

  if (isFetching) return <div>Loading...</div>;
  if (error) return <div>Error loading comments</div>;


  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

 
  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <Styled.PageContainerGP>
      <ErrorBoundary>
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
          <CommentsSection comments={data?.comments || []} />

        </Styled.Main>
      </ErrorBoundary>
      {isModalOpen && <Modal imageUrl={selectedImage} onClose={closeModal} />}
    </Styled.PageContainerGP>
  );
};

export default GamePage;

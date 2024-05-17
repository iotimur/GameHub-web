import React from 'react';
import { ErrorBoundary } from "../components/error-boundary";
import Header from "../components/main/header/header";
import { Footer } from '../components/footer/footer';
import PriceBlock from '../components/game_page/price-block/price-block';
import GameInfo from '../components/game_page/game-info/game-info';
import Trailer from '../components/game_page/trailer/trailer';
import Gallery from '../components/game_page/gallery-scroll/gallery-scroll';
import { AboutGame } from '../components/game_page/about-game/about-game';
import RatingBlock from '../components/game_page/rating-block/rating-block';
import SystemRequirements from '../components/game_page/system-requirements/system-requirements';
import CommentsSection from '../components/game_page/comments-section/comment-section';

import * as Styled from '../components/game_page/game-page.styled';

const comments = [
  { username: 'Пользователь1', text: 'Текст комментария 1' },
  { username: 'Пользователь2', text: 'Текст комментария 2' },
  { username: 'Пользователь3', text: 'Текст комментария 3' },
  { username: 'Пользователь4', text: 'Текст комментария 4' },
];

const GamePage = () => {
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
          <Gallery />
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
    </Styled.Body>
  );
};

export default GamePage;

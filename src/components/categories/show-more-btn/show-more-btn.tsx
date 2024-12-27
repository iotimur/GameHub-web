import React from 'react';
import { ShowMoreBtn } from './show-more-btn.styled';

interface ShowMoreButtonProps {
  onClick: () => void;
  isExpanded: boolean;
}

const ShowMoreButton: React.FC<ShowMoreButtonProps> = ({ onClick, isExpanded }) => {
  return (
    <ShowMoreBtn onClick={onClick}>Показать больше</ShowMoreBtn>
  );
};

export default ShowMoreButton;
import React from 'react';
import { ShowMoreBtn } from './show-more-btn.styled';

interface ShowMoreButtonProps {
  onClick: () => void;
  isExpanded: boolean;
}

const ShowMoreButton: React.FC<ShowMoreButtonProps> = ({ onClick, isExpanded }) => {
  return (
    <ShowMoreBtn onClick={onClick}>
      {isExpanded ? 'Показать меньше' : 'Показать больше'}
    </ShowMoreBtn>
  );
};

export default ShowMoreButton;
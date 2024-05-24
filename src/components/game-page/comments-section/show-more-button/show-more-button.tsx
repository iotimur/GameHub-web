// ShowMoreButton.tsx
import React from 'react';
import { ShowMoreButtonStyle } from './show-more-button.styled';

interface ShowMoreButtonProps {
  onClick: () => void;
  isExpanded: boolean;
}

const ShowMoreButton: React.FC<ShowMoreButtonProps> = ({ onClick, isExpanded }) => {
  return (
    <ShowMoreButtonStyle onClick={onClick}>
      {isExpanded ? 'Показать меньше' : 'Показать больше'}
    </ShowMoreButtonStyle>
  );
};

export default ShowMoreButton;

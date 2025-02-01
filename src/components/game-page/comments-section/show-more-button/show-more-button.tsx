// ShowMoreButton.tsx
import React from 'react';
import { ShowMoreButtonStyle } from './show-more-button.styled';
import { useTranslation } from 'react-i18next';

interface ShowMoreButtonProps {
  onClick: () => void;
  isExpanded: boolean;
}

const ShowMoreButton: React.FC<ShowMoreButtonProps> = ({ onClick, isExpanded }) => {
  const { t } = useTranslation();
  return (
    <ShowMoreButtonStyle onClick={onClick}>
      {isExpanded ? t('comments_show_less') : t('comments_show_more')}
    </ShowMoreButtonStyle>
  );
};

export default ShowMoreButton;

import React from 'react';
import { useTranslation } from 'react-i18next';

import { AboutGameContainerStyled, TitleStyled, SubtitleStyled, TextStyled } from './about-game.styled';

export function AboutGame() {
    const { t } = useTranslation();

    return (
        <AboutGameContainerStyled>
            <TitleStyled>{t('aboutGame.title')}</TitleStyled>
            <SubtitleStyled>{t('aboutGame.subtitle1')}</SubtitleStyled>
            <TextStyled>{t('aboutGame.text1')}</TextStyled>

            <SubtitleStyled>{t('aboutGame.subtitle2')}</SubtitleStyled>
            <TextStyled>{t('aboutGame.text2')}</TextStyled>

            <SubtitleStyled>{t('aboutGame.subtitle3')}</SubtitleStyled>
            <TextStyled>{t('aboutGame.text3')}</TextStyled>

            <SubtitleStyled>{t('aboutGame.subtitle4')}</SubtitleStyled>
            <TextStyled>{t('aboutGame.text4')}</TextStyled>

            <SubtitleStyled>{t('aboutGame.subtitle5')}</SubtitleStyled>
            <TextStyled>{t('aboutGame.text5')}</TextStyled>
        </AboutGameContainerStyled>
    );
}


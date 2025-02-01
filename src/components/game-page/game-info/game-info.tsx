import React from 'react';
import { useTranslation } from 'react-i18next';
import { GameInfoContainer, GameInfoText } from './game-info.styled';

const GameInfo = () => {
    const { t } = useTranslation();

    return (
        <GameInfoContainer>
            <GameInfoText>
                <ul>
                    <li><strong>{t('gameInfo.genre')}:</strong> {t('gameInfo.genreValue')}</li>
                    <li><strong>{t('gameInfo.language')}:</strong> {t('gameInfo.languageValue')}</li>
                    <li><strong>{t('gameInfo.releaseDate')}:</strong> {t('gameInfo.releaseDateValue')}</li>
                    <li><strong>{t('gameInfo.publisher')}:</strong> {t('gameInfo.publisherValue')}</li>
                    <li><strong>{t('gameInfo.developer')}:</strong> {t('gameInfo.developerValue')}</li>
                    <li><strong>{t('gameInfo.features')}:</strong></li>
                    <ul>
                        <li>{t('gameInfo.feature1')}</li>
                        <li>{t('gameInfo.feature2')}</li>
                        <li>{t('gameInfo.feature3')}</li>
                        <li>{t('gameInfo.feature4')}</li>
                    </ul>
                    <li><strong>{t('gameInfo.region')}:</strong> {t('gameInfo.regionValue')}</li>
                </ul>
            </GameInfoText>
        </GameInfoContainer>
    );
};

export default GameInfo;

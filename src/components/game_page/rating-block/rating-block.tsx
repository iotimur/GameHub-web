// RatingBlock.tsx

import React from 'react';
import { 
     
    RatingBlock as StyledRatingBlock, // Изменение имени импорта
    RatingBlockAge, 
    RatingBlockAgeSquare, 
    RatingBlockAgeSquareText, 
    RatingBlockAgeText,
    RatingBlockGamestar,
    RatingBlockGamestarSquare,
    RatingBlockGamestarSquareText,
    RatingBlockGamestarText,
    RatingBlockMetacritic,
    RatingBlockMetacriticSquare,
    RatingBlockMetacriticSquareText,
    RatingBlockMetacriticText,
    RatingBlockOpencritic,
    RatingBlockOpencriticSquare,
    RatingBlockOpencriticSquareText,
    RatingBlockOpencriticText
} from './rating-block.styled';

const RatingBlock: React.FC = () => {
    return (
        
            <StyledRatingBlock> {/* Использование импортированного компонента с изменённым именем */}
                <RatingBlockAge>
                    <RatingBlockAgeSquare>
                        <RatingBlockAgeSquareText>16+</RatingBlockAgeSquareText>
                    </RatingBlockAgeSquare>
                    <RatingBlockAgeText>ДЛЯ ДЕТЕЙ СТАРШЕ 16 ЛЕТ</RatingBlockAgeText>
                </RatingBlockAge>

                <RatingBlockGamestar>
                    <RatingBlockGamestarSquare>
                        <RatingBlockGamestarSquareText>93</RatingBlockGamestarSquareText>
                    </RatingBlockGamestarSquare>
                    <RatingBlockGamestarText>GameStar</RatingBlockGamestarText>
                </RatingBlockGamestar>

                <RatingBlockMetacritic>
                    <RatingBlockMetacriticSquare>
                        <RatingBlockMetacriticSquareText>94</RatingBlockMetacriticSquareText>
                    </RatingBlockMetacriticSquare>
                    <RatingBlockMetacriticText>metacritic</RatingBlockMetacriticText>
                </RatingBlockMetacritic>

                <RatingBlockOpencritic>
                    <RatingBlockOpencriticSquare>
                        <RatingBlockOpencriticSquareText>92</RatingBlockOpencriticSquareText>
                    </RatingBlockOpencriticSquare>
                    <RatingBlockOpencriticText>OpenCritic</RatingBlockOpencriticText>
                </RatingBlockOpencritic>
            </StyledRatingBlock>
      
    );
};

export default RatingBlock;

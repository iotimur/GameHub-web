import React from 'react';
import { StyledCategories } from './main-categories.styled';
import Leaders from '../leaders/leaders';
import FilterSorting from '../sorting/sorting';
import NewGames from '../new-games/new-games';
import DiscountGames from '../discount-games/discount-games';

const MainCategories = () => {
    return (
        <StyledCategories>
            <FilterSorting />
            <Leaders />
            <NewGames />
            <DiscountGames />
        </StyledCategories >
    );
};

export default MainCategories;
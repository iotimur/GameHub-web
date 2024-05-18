import React, { useState } from 'react';
import { StyledCategories } from './main-categories.styled';
import Leaders from '../leaders/leaders';
import FilterSorting from '../sorting/sorting';
import NewGames from '../new-games/new-games';
import DiscountGames from '../discount-games/discount-games';

const MainCategories = () => {
    const [sortOption, setSortOption] = useState('');

    const handleSort = (option) => {
        setSortOption(option);
    };
    return (
        <StyledCategories>
            <FilterSorting onSort={handleSort} />
            <Leaders sortOption={sortOption} />
            <NewGames sortOption={sortOption} />
            <DiscountGames sortOption={sortOption} />
        </StyledCategories >
    );
};

export default MainCategories;
import React, { useState } from 'react';

import Leaders from '../leaders/leaders';
import FilterSorting from '../sorting/sorting';
import NewGames from '../new-games/new-games';
import DiscountGames from '../discount-games/discount-games';
import { CategoriesBody, CategoriesMain } from './main-categories.styled';

const MainCategories = () => {
    const [sortOption, setSortOption] = useState('');

    const handleSort = (option) => {
        setSortOption(option);
    };
    return (
        <CategoriesBody>
            <CategoriesMain>
                <FilterSorting onSort={handleSort} />
                <Leaders sortOption={sortOption} />
                <NewGames sortOption={sortOption} />
                <DiscountGames sortOption={sortOption} />
            </CategoriesMain>
        </CategoriesBody>
    );
};

export default MainCategories;
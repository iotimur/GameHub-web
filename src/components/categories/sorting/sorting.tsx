import React from 'react';

import { switch_ } from '../../../../assets/images'
import { SortingString, Sorting, Switch } from './sorting.styled';
import { BigSeparator } from '../leaders/leaders.styled';
const FilterSorting = () => {
    return (
        <div>
            <BigSeparator />
            <BigSeparator />
            <SortingString>Сортировать по</SortingString>
            <Sorting>
                <Switch src={switch_} />
            </Sorting>
        </div>
    );
};

export default FilterSorting;
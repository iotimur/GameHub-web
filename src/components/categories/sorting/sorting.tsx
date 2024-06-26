import React, { useState } from 'react';
import {
    SortingString,
    Sorting,
    SortingButton,
    DropdownItem,
    Dropdown
} from './sorting.styled';

const FilterSorting = ({ onSort }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setIsDropdownOpen(false);
        onSort(option);
    };
    return (
        <div>
            <SortingString>Сортировать по</SortingString>
            <SortingButton onClick={toggleDropdown}>
                <Sorting>{selectedOption}</Sorting>
                {isDropdownOpen && (
                    <Dropdown>
                        <DropdownItem onClick={() => handleOptionSelect('по цене max')}>по цене max</DropdownItem>
                        <DropdownItem onClick={() => handleOptionSelect('по цене min')}>по цене min</DropdownItem>
                    </Dropdown>
                )}
            </SortingButton>
        </div>
    );
};
export default FilterSorting;
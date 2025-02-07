import React, { useState } from 'react';
import {
    SortingString,
    SortingSpan,
    SortingButton,
    DropdownItem,
    Dropdown,
    All
} from './sorting.styled';
import { ContainerMain } from './sorting.styled';

// const FilterSorting = ({ onSort }) => {
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//     const [selectedOption, setSelectedOption] = useState('');

//     const toggleDropdown = () => {
//         setIsDropdownOpen(!isDropdownOpen);
//     };

//     const handleOptionSelect = (option) => {
//         setSelectedOption(option);
//         setIsDropdownOpen(false);
//         onSort(option);
//     };
//     return (
//         <div>
//             <All>
//             <SortingString>Сортировать по</SortingString>
//             <SortingButton onClick={toggleDropdown}>
//                 <Sorting>{selectedOption}</Sorting>
//                 {isDropdownOpen && (
//                     <Dropdown>
//                         <DropdownItem onClick={() => handleOptionSelect('По цене max')}>По цене max</DropdownItem>
//                         <DropdownItem onClick={() => handleOptionSelect('По цене min')}>По цене min</DropdownItem>
//                     </Dropdown>
//                 )}
//             </SortingButton>
//             </All>
//         </div>
//     );
// };
// export default FilterSorting;


const Sorting = ({ onSort, selectedOption, isDropdownOpen, toggleDropdown }) => {
    const handleOptionSelect = (option) => {
        onSort(option); // Используем onSort для передачи выбранной опции
        toggleDropdown(); // Закрываем выпадающий список после выбора
    };
    return (
        <div>
                <All>
            <ContainerMain>

                    <SortingString>Сортировать по</SortingString>
                    <SortingButton onClick={toggleDropdown}>
                        <SortingSpan>{selectedOption}</SortingSpan>
                        {isDropdownOpen && (
                            <Dropdown>
                                <DropdownItem onClick={() => handleOptionSelect('По цене max')}>По цене max</DropdownItem>
                                <DropdownItem onClick={() => handleOptionSelect('По цене min')}>По цене min</DropdownItem>
                            </Dropdown>
                        )}
                    </SortingButton>
            </ContainerMain>

                </All>
        </div>
    );
};

export default Sorting;
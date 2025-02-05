import React, { useState } from 'react';
import {
    String,
    SortingButton,
    DropdownItem,
    Dropdown
} from './filter.styles';
import { ContainerMain } from '../sorting/sorting.styled';

// const Filter = ({ isLeaders, isNewGames, isDiscountGames, onFilter }) => {
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//     const toggleDropdown = () => {
//         setIsDropdownOpen(prev => !prev);
//     };
//     const toggleLeaders = () => {
//         onFilter('leaders', !isLeaders);
//     };
//     const toggleNewGames = () => {
//         onFilter('newGames', !isNewGames);
//     };
//     const toggleDiscountGames = () => {
//         onFilter('discountGames', !isDiscountGames);
//     };

//     return (
//         <div>
//             <SortingButton onClick={toggleDropdown}>
//                 <String>Фильтр</String>
//                 {isDropdownOpen && (
//                     <Dropdown>
//                         <label>
//                             <DropdownItem>
//                                 <input
//                                     type="checkbox"
//                                     checked={isLeaders}
//                                     onChange={toggleLeaders}
//                                 />
//                                 Лидеры
//                             </DropdownItem>
//                         </label>
//                         <label>
//                             <DropdownItem>
//                                 <input
//                                     type="checkbox"
//                                     checked={isNewGames}
//                                     onChange={toggleNewGames}
//                                 />
//                                 Новинки
//                             </DropdownItem>
//                         </label>
//                         <label>
//                             <DropdownItem>
//                                 <input
//                                     type="checkbox"
//                                     checked={isDiscountGames}
//                                     onChange={toggleDiscountGames}
//                                 />
//                                 Скидки
//                             </DropdownItem>
//                         </label>
//                     </Dropdown>
//                 )}
//             </SortingButton>
//         </div>
//     );
// };
// export default Filter;


const Filter = ({ isLeaders, isNewGames, isDiscountGames, onFilter, isDropdownOpen, toggleDropdown }) => {
    const toggleLeaders = () => {
        onFilter('leaders', !isLeaders);
    };
    const toggleNewGames = () => {
        onFilter('newGames', !isNewGames);
    };
    const toggleDiscountGames = () => {
        onFilter('discountGames', !isDiscountGames);
    };

    return (
        <div>
            <ContainerMain>
            <SortingButton onClick={toggleDropdown}>
                <String>Фильтр</String>
                {isDropdownOpen && (
                    <Dropdown>
                        <label>
                            <DropdownItem>
                                <input
                                    type="checkbox"
                                    checked={isLeaders}
                                    onChange={toggleLeaders}
                                />
                                Лидеры
                            </DropdownItem>
                        </label>
                        <label>
                            <DropdownItem>
                                <input
                                    type="checkbox"
                                    checked={isNewGames}
                                    onChange={toggleNewGames}
                                />
                                Новинки
                            </DropdownItem>
                        </label>
                        <label>
                            <DropdownItem>
                                <input
                                    type="checkbox"
                                    checked={isDiscountGames}
                                    onChange={toggleDiscountGames}
                                />
                                Скидки
                            </DropdownItem>
                        </label>
                    </Dropdown>
                )}
            </SortingButton>
            </ContainerMain>
        </div>
    );
};

export default Filter;

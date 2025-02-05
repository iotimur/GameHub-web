import React, { useState } from "react";
import { CommonMain, ContainerMain} from "../components/main/main-container/main.styled";
import Sorting from "../components/categories/sorting/sorting";
import Leaders from "../components/categories/leaders/leaders";
import NewGames from "../components/categories/new-games/new-games";
import DiscountGames from "../components/categories/discount-games/discount-games";
import Filter from "../components/categories/filter/filter";

const Categories = () => {
    const [sortOption, setSortOption] = useState("");
    const [isLeaders, setIsLeaders] = useState(true);
    const [isNewGames, setIsNewGames] = useState(true);
    const [isDiscountGames, setIsDiscountGames] = useState(true);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isSortingDropdownOpen, setIsSortingDropdownOpen] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const [selectedOption, setSelectedOption] = useState('');

    const handleSort = (option) => {
        setSortOption(option);
        setSelectedOption(option);
    };
    const handleFilter = (category, visible) => {
        switch (category) {
            case 'leaders':
                setIsLeaders(visible);
                break;
            case 'newGames':
                setIsNewGames(visible);
                break;
            case 'discountGames':
                setIsDiscountGames(visible);
                break;
            default:
                break;
        }
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(prev => !prev);
    };
    const toggleSortingDropdown = () => {
        setIsSortingDropdownOpen(prev => !prev);
    };


    return (
        <>
            <CommonMain>
                <ContainerMain>
                    <Filter
                        isLeaders={isLeaders}
                        isNewGames={isNewGames}
                        isDiscountGames={isDiscountGames}
                        onFilter={handleFilter}
                        isDropdownOpen={isDropdownOpen}
                        toggleDropdown={toggleDropdown}
                    />
                    <Sorting
                        onSort={handleSort}
                        selectedOption={selectedOption}
                        isDropdownOpen={isSortingDropdownOpen}
                        toggleDropdown={toggleSortingDropdown}
                    />
                    {isLeaders && <Leaders
                        sortOption={sortOption}
                        isExpanded={isExpanded}
                        setIsExpanded={setIsExpanded} />}
                    {isNewGames && <NewGames
                        sortOption={sortOption}
                        isExpanded={isExpanded}
                        setIsExpanded={setIsExpanded} />}
                    {isDiscountGames && <DiscountGames
                        sortOption={sortOption}
                        isExpanded={isExpanded}
                        setIsExpanded={setIsExpanded} />}
                </ContainerMain>
            </CommonMain>
        </>
    );
};

export default Categories;

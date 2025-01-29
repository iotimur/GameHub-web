import React, { useState } from "react";
import { CommonMain, ContainerMain, PageContainer } from "../components/main/main-container/main.styled";
import FilterSorting from "../components/categories/sorting/sorting";
import Leaders from "../components/categories/leaders/leaders";
import NewGames from "../components/categories/new-games/new-games";
import DiscountGames from "../components/categories/discount-games/discount-games";
import { CategoriesMain } from "../components/categories/categories.styled";
import Filter from "../components/categories/filter/filter";

const Categories = () => {
    const [sortOption, setSortOption] = useState("");
    const [isLeaders, setIsLeaders] = useState(true);
    const [isNewGames, setIsNewGames] = useState(true);
    const [isDiscountGames, setIsDiscountGames] = useState(true);

    const handleSort = (option) => {
        setSortOption(option);
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

    return (
        <>
            <CommonMain>
                <ContainerMain>
                    <Filter
                        isLeaders={isLeaders}
                        isNewGames={isNewGames}
                        isDiscountGames={isDiscountGames}
                        onFilter={handleFilter}
                    />
                    <FilterSorting onSort={handleSort} />
                    {isLeaders && <Leaders sortOption={sortOption} />}
                    {isNewGames && <NewGames sortOption={sortOption} />}
                    {isDiscountGames && <DiscountGames sortOption={sortOption} />}
                </ContainerMain>
            </CommonMain>
        </>
    );
};

export default Categories;
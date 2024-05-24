import React, { useState } from "react";
import Header from "../components/main/header/header";
import { Footer } from '../components/footer/footer';
import { PageContainer } from "../components/main/main-container/main.styled";
import FilterSorting from "../components/categories/sorting/sorting";
import Leaders from "../components/categories/leaders/leaders";
import NewGames from "../components/categories/new-games/new-games";
import DiscountGames from "../components/categories/discount-games/discount-games";
import { CategoriesMain } from "../components/categories/categories.styled";

const Categories = () => {
    const [sortOption, setSortOption] = useState('');

    const handleSort = (option) => {
        setSortOption(option);
    };
    return (
        <>
            <PageContainer>
                <Header />
                <CategoriesMain>
                    <FilterSorting onSort={handleSort} />
                    <Leaders sortOption={sortOption} />
                    <NewGames sortOption={sortOption} />
                    <DiscountGames sortOption={sortOption} />
                </CategoriesMain>
                <Footer />
            </PageContainer>
        </>
    );
};

export default Categories;
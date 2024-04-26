import React from "react";
// import '../css/reset.css';
import Header from "../components/header/header.jsx";
import TypesOfCategories from "../components/categories/types-of-categories";
import { Footer } from '../components/footer/footer';

const Categories = () => {
    return (
        <>
            <Header />
            <TypesOfCategories />
            <Footer />
        </>
    );
};

export default Categories;
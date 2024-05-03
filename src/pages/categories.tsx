import React from "react";
// import '../css/reset.css';
import Header from "../components/header/header.jsx";
import { Footer } from '../components/footer/footer';
import MainCategories from "../components/categories/main-categories/main-categories";

const Categories = () => {
    return (
        <>
            <Header />
            <MainCategories/>
            <Footer />
        </>
    );
};

export default Categories;
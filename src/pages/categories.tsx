import React, { useState } from "react";
import { CommonMain, ContainerMain} from "../components/main/main-container/main.styled";
import AllCategories from "../components/categories/allCategories";

const Categories = () => {
    return (
        <>
            <CommonMain>
                <ContainerMain>
                        <AllCategories/>
                </ContainerMain>
            </CommonMain>
        </>
    );
};

export default Categories;

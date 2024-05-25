import React from 'react';

import Header from "../components/main/header/header";
import EntranceComponent from '../components/entrance/entrance-component';
import { Footer } from '../components/footer/footer';
import { PageContainer } from "../components/main/main-container/main.styled";
const Entrance = () => {
    return (
        <>
            <PageContainer>
            <Header/>  
            <main className="main">
                <EntranceComponent/>
            </main>
            <Footer/>
            </PageContainer>
        </>
    );
};
export default Entrance;



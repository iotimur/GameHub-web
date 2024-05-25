import React from 'react';

import { PersonalInformation } from '../components/personal-account/personal-information/personal-information';
import { MyPurchases } from '../components/personal-account/my-purchases/my-purchases';
import { Help } from '../components/personal-account/help/help';
import { Footer } from '../components/footer/footer';
import { Lk } from '../components/personal-account/lk/lk';
import { PageContainer } from "../components/main/main-container/main.styled";
import Header from "../components/main/header/header";

const PersonalAccount = () => {
    return (
        <>
        <PageContainer>
        <Header />  
        <main className="container">
                <Lk/> 
                <PersonalInformation/>
                <MyPurchases/>
                <Help/>
        </main>
        <Footer/>
        </PageContainer>
    </>
  );
};

export default PersonalAccount;

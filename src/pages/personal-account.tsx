import React from 'react';
import '../css/styles-personal-account.css';

import { PersonalInformation } from '../components/personal-account/personal-information/personal-information';
import { MyPurchases } from '../components/personal-account/my-purchases/my-purchases';
import { Help } from '../components/personal-account/help/help';
import { Footer } from '../components/footer/footer';
import Header from "../components/main/header/header";

const Personal_account = () => {
    return (
        <>
        <Header />  
        <main className="container"> 
            <div className="in_container">
                <div className="zagolov">
                    <p>Личный кабинет</p>
                </div>  
                <PersonalInformation/>
                <MyPurchases/>
                <Help/>
            </div>
        </main>
        <Footer/>
    </>
  );
};

export default Personal_account;

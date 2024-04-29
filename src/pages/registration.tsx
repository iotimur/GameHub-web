import React from 'react';

import Header from '../components/main/header/header';
import { Footer } from '../components/footer/footer';
import RegistrationComponent from '../components/registration-component/registration-component';

const Registration = () => {
    return (
        <>
            <Header/>
            <main className="main">
              <RegistrationComponent/>
            </main>
            <Footer/>
        </>
    );
};

export default Registration;

import React from 'react';

import Header from "../components/main/header/header";
import EntranceComponent from '../components/entrance/entrance-component';
import { Footer } from '../components/footer/footer';

const Entrance = () => {
    return (
        <>
            <Header/>  
            <main className="main">
                <EntranceComponent/>
            </main>
            <Footer/>
        </>
    );
};
export default Entrance;



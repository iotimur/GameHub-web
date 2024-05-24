import React from "react";
import Header from "../components/main/header/header";
import MainContent from "../components/main/main-container/main";
import { Footer } from "../components/footer/footer";
import { PageContainer } from "../components/main/main-container/main.styled";

const MainPage = () => {
  return (
    <div>
      <PageContainer>
        <Header />
        <MainContent />
        <Footer />
      </PageContainer>
    </div>
  );
};

export default MainPage;

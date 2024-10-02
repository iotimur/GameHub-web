import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../../components/main/header/header";
import { Footer } from "../../components/footer/footer";
import { PageContainer } from "../../components/main/main-container/main.styled";

const Layout = () => {
  return (
    <div>
      <PageContainer>
        <Header />

        <Outlet />

        <Footer />
      </PageContainer>
    </div>
  );
};

export default Layout;

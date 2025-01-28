import React from "react";

import Header from "../components/main/header/header";
import { Footer } from "../components/footer/footer";
import RegistrationComponent from "../components/registration-component/registration-component";
import { PageContainer } from "../components/main/main-container/main.styled";
const Registration = () => {
  return (
    <>
      <PageContainer>
        <main className="main">
          <RegistrationComponent />
        </main>
      </PageContainer>
    </>
  );
};

export default Registration;

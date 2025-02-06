import React from "react";

import { PersonalInformation } from "../components/personal-account/personal-information/personal-information";
import { MyPurchases } from "../components/personal-account/my-purchases/my-purchases";
import { Help } from "../components/personal-account/help/help";
import { Footer } from "../components/footer/footer";
import { Lk } from "../components/personal-account/lk/lk";
import { Exit } from "../components/personal-account/exit/exit";
import { Fv } from "../components/personal-account/favourites/favourites";
import { PageContainer } from "../components/main/main-container/main.styled";
import { PersonalAccountMain } from "../components/personal-account/personalaccount.styled";
import Header from "../components/main/header/header";

const PersonalAccount = () => {
  return (
    <>
      <PageContainer>
        <PersonalAccountMain className="container">
          <Exit />
          <Fv />
          <Lk />
          <PersonalInformation />
          <MyPurchases />
          <Help />
        </PersonalAccountMain>
      </PageContainer>
    </>
  );
};

export default PersonalAccount;

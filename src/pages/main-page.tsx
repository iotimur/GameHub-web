import React from "react";
import Header from "../components/main/header/header";
import MainContent from "../components/main/main-container/main";

import "../css/main_css/main.css";
import "../css/header/menu.css";
import "../css/main_css/search.css";
import "../css/main_css/normalize.css";
import "../css/footer/footer.css";

const MainPage = () => {
  return (
    <div>
      <Header />
      <MainContent />
    </div>
  );
};

export default MainPage;

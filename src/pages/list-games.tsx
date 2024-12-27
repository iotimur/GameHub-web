import React from "react";
import ListGames from "../components/list-games/list_games";
import { PageContainer } from "../components/main/main-container/main.styled";

const ListPage = () => {
  return (
    <div>
      <PageContainer>
        <ListGames />
      </PageContainer>
    </div>
  );
};

export default ListPage;

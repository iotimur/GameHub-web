import styled from "@emotion/styled";

export const Body = styled.div`
  font-family: "Inter", sans-serif;
  background-color: #102D59;
  margin: 0;
  padding: 0;
  min-height: 100%;
  height: auto;
  position: relative;
`;

export const Main = styled.div`
  max-width: 1120px;
  width: 90%;
  min-width: 600px;
  margin: 0 auto;
  color: white;
`;

export const Header2 = styled.div`
  font-family: Arial, sans-serif;
  font-style: italic;
  color: white;
  padding: 20px;
`;

export const GroupTrGameInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media screen and (min-width: 1000px) {
    flex-direction: row;
  }
`;

export const Trailer = styled.div`
  width: auto;
  margin-bottom: 0;
  margin-right: 20px;

  @media screen and (max-width: 1000px) {
    margin-right: 0;
  }
`;

export const GameInfo = styled.div`
  min-height: 346px;
  width: calc(100% - 200px);

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export const GroupRatingAboutGame = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const AboutGame = styled.div`
  width: auto;
  margin-bottom: 0;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export const RatingBlock = styled.div`
  display: block;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

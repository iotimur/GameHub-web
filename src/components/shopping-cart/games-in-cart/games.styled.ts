import styled from "@emotion/styled";

export const Oval = styled.div`
  width: 300px;
  height: 64px;
  border-radius: 25px;
  background-color: #f39a46;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: black;
  font-size: 4vh;
  margin: 40px 330px 30px;
  @media screen and (max-width: 1200px) {
    height: 50px;
    font-size: 3.5vh;
    max-width: 300px;
    text-align: center;
    margin-left: 420px;
  }
  @media screen and (max-width: 800px) {
    height: 45px;
    font-size: 3vh;
    max-width: 250px;
    text-align: center;
    margin-left: 230px;
  }
`;

export const Container_my = styled.div`
  display: flex;
  align-items: flex-start;
  background-color: #18396c;
  padding: 0 5vh 5vh;
  margin: 0 35px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  @media screen and (max-width: 1200px) {
    padding: 4vh;
    margin: 0 50px;
  }
  @media screen and (max-width: 800px) {
    padding: 3vh;
    margin: 0 40px;
    flex-direction: column;
    align-items: center;
  }
`;

export const Title1 = styled.p`
  font-style: italic;
  letter-spacing: 10%;
  font-size: 4vh;
  color: white;
  margin: 20px 20px -10px;
  @media screen and (max-width: 1200px) {
    font-size: 3.5vh;
  }
  @media screen and (max-width: 800px) {
    font-size: 3vh;
  }
`;

export const Title2 = styled.p`
  color: white;
  margin: 0 20px -50px;
  font-weight: normal;
  font-size: 3vh;
  @media screen and (max-width: 1200px) {
    font-size: 2.5vh;
  }
  @media screen and (max-width: 800px) {
    font-size: 2vh;
  }
`;

export const Title3 = styled.p`
  color: white;
  margin: 80px 20px -50px;
  font-weight: normal;
  font-size: 2.7vh;

  @media screen and (max-width: 1200px) {
    font-size: 2.5vh;
  }
  @media screen and (max-width: 800px) {
    font-size: 3vh;
  }
`;

export const BigImage = styled.img`
  width: 200px; /* Фиксированная ширина */
  height: 300px; /* Фиксированная высота */
  object-fit: cover; /* Обрезает или растягивает изображение, чтобы заполнить контейнер */
  border-radius: 10px; /* Закругленные углы */
  vertical-align: middle;
  margin: 10px;
  margin-right: 20px;

  @media screen and (max-width: 1200px) {
    width: 180px;
    height: 270px;
  }
  @media screen and (max-width: 800px) {
    width: 160px;
    height: 240px;
  }
`;

export const Price = styled.p`
  font-family: var(--font-family);
  font-style: italic;
  font-weight: 500;
  font-size: 32px;
  color: #f39a46;

  margin: -10px 0 0 700px; /* Отрицательное значение для margin-left */
  @media screen and (max-width: 1920px) {
    font-size: 3vh;
  }
  @media screen and (max-width: 1200px) {
    margin: -10px -300px 0 auto;
    text-align: center;
    font-size: 2.5vh;
  }
  @media screen and (max-width: 800px) {
    font-size: 3vh;
    margin: -10px -300px 0 auto;
  }
`;

export const Delete = styled.p`
  cursor: pointer;
  margin: 130px auto 30px 700px;
  font-size: 2vh;
  font-weight: bold;
  color: red;
  text-decoration: underline;
  @media screen and (max-width: 1200px) {
    margin-left: 10vh;
    text-align: center;
  }
`;

export const Hr = styled.hr`
  width: 100%;
  border: 0;
  border-top: 1px solid #ccc;
  margin: 30px 0;
`;
export const Price1 = styled.div`
  font-weight: bold;
  font-size: 3vh;
  color: white;
  margin-top: 5px;
  margin-right: 270px;
  font-family: var(--font-family);
  font-style: italic;
  font-weight: 500;
  color: #f39a46;

  @media screen and (max-width: 1200px) {
    margin-top: 5px;
    margin-right: 200px;
  }
  @media screen and (max-width: 800px) {
    margin-right: 150px;
    font-size: 2.5vh;
  }
`;

export const Total = styled.div`
  color: white;
  display: flex;
  justify-content: space-around;
  margin-top: 150px;
  font-weight: bold;
  font-size: 30px;

  @media screen and (max-width: 1200px) {
    font-size: 26px;
  }
  @media screen and (max-width: 800px) {
    font-size: 22px;
  }
`;

export const TotalSpan = styled.span`
  margin-left: 550px;

  @media screen and (max-width: 1200px) {
    margin-left: 200px;
  }
  @media screen and (max-width: 800px) {
    margin-left: 200px;
  }
`;

export const AnimationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding-top: 50px;
`

export const LottieWrapper = styled.div`
    width: 550px;
    height: 550px;
`

export const StyledText = styled.p`
    font-size: 25px;
    font-weight: 550;
    color: #000000;
`


import styled from "@emotion/styled";

export const Oval = styled.div`
background-color: #f39a46;
//   border-radius: 25px;
  width: max-content;
  height: 50px;
//   margin-top: 50px;
  padding: 10px 15px;
  // margin-bottom: 20px;
  // width: 300px;
  // height: 64px;
  border-radius: 25px;
  background-color: #f39a46;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: black;
  font-size: 4vh;
  margin: 40px 40px 30px;
  @media screen and (max-width: 1200px) {
    height: 50px;
    font-size: 3.5vh;
    // max-width: 300px;
    // text-align: center;
    // margin-left: 420px;
  }
  @media screen and (max-width: 800px) {
    height: 45px;
    font-size: 3vh;
    // max-width: 250px;
    // text-align: center;
    // margin-left: 230px;
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
  margin-right: 400px;
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
  margin-left: 650px;

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
    margin-right: 2000px;
    margin-top: 100px;

  @media screen and (max-width: 1200px) {
    margin-left: 200px;
  }
  @media screen and (max-width: 800px) {
    margin-left: 200px;
  }
`
export const PromoCodeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 30px 0px 100px 700px;
    max-width: 700px; // Максимальная ширина контейнера
`;

export const PromoCodeInput = styled.input`
    width: calc(100% - 120px); // Занимает всю ширину за исключением кнопки
    height: 64px; // Высота аналогична Oval
    border-radius: 25px;
    border: none;
    padding: 0 20px;
    font-size: 4vh;
    color: black;
    
    @media screen and (max-width: 1200px) {
        height: 50px;
        font-size: 3.5vh;
    }
    
    @media screen and (max-width: 800px) {
        height: 45px;
        font-size: 3vh;
    }
`;

export const ApplyButton = styled.button`
    width: 300px; // Ширина кнопки
    height: 64px; // Высота аналогична Oval
    border-radius: 25px;
    margin-left: 30px;
    background-color: #F39A46;
    color: black;
    font-weight: bold;
    font-size: 4vh;
    border: none;
    
    cursor: pointer;

    @media screen and (max-width: 1200px) {
        height: 50px;
        font-size: 3.5vh;
    }
    
    @media screen and (max-width: 800px) {
        height: 45px;
        font-size: 3vh;
    }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: #18396c; // Цвет фона, как у Container_my
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 500px;
  width: 100%;
  position: relative;
  color: white; // Цвет текста
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  cursor: pointer;
  background: none;
  border: none;
  color: white; // Цвет иконки закрытия
`;

export const ModalTitle = styled.h2`
  font-size: 3vh;
  color: white;
  margin-bottom: 20px;
  text-align: center;
`;

export const ModalText = styled.p`
  font-size: 2.5vh;
  color: white;
  margin-bottom: 20px;
  text-align: center;
`;

export const ModalButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

interface ModalButtonProps {
  primary?: boolean; // Делаем проп необязательным
}

export const ModalButton = styled.button<ModalButtonProps>`
  flex: 1;
  height: 50px;
  border-radius: 25px;
  background-color: ${(props) => (props.primary ? "#F39A46" : "#ccc")};
  color: black;
  font-weight: bold;
  font-size: 2.5vh;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export const FloatingButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #f39a46;
  color: white;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  &:hover {
    background-color: #e88e3a;
  }
`;

export const ChatContainer = styled.div`
  position: fixed;
  bottom: 80px;
  right: 20px;
  width: 300px;
  height: 400px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  z-index: 1000;
`;

export const ChatHeader = styled.div`
  background-color: #18396c;
  color: white;
  padding: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  font-weight: bold;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// export const CloseButton = styled.button`
//   background: none;
//   border: none;
//   color: white;
//   font-size: 20px;
//   cursor: pointer;

//   &:hover {
//     color: #f39a46;
//   }
// `;

export const ChatMessages = styled.div`
  flex: 1;
  padding: 10px;
  overflow-y: auto;
  background-color: #f9f9f9;
`;

export const Message = styled.div<{ isManager?: boolean }>`
  background-color: ${(props) => (props.isManager ? "#18396c" : "#f39a46")};
  color: ${(props) => (props.isManager ? "white" : "black")};
  padding: 8px;
  border-radius: 8px;
  margin-bottom: 10px;
  max-width: 80%;
  align-self: ${(props) => (props.isManager ? "flex-start" : "flex-end")};
`;

export const ChatInputContainer = styled.div`
  display: flex;
  padding: 10px;
  border-top: 1px solid #ccc;
  background-color: white;
`;

export const ChatInput = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
`;

export const SendButton = styled.button`
  background-color: #f39a46;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px 12px;
  cursor: pointer;

  &:hover {
    background-color: #e88e3a;
  }
`;
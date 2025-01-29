import styled from "@emotion/styled";


export const TextStyled = styled.p`
    font-family: var(--font-family);
    font-weight: bold;
    font-size: 24px;
    color: #000;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 1200px) {
      font-size: 24px;
    }
    @media screen and (max-width: 800px) {
      font-size: 16px;
    }
`;

export const ZagolovStyled = styled.div`
    color: #080a21;
    font-weight: 500;
    font-size: 37px;
    text-align: center;
    margin: 35px 35px 0px 35px;
    background-color: #f39a46;
    width: max-content;
    margin-top: 50px;
    padding: 10px 15px;
    margin-bottom: 20px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    background: #f39a46;
    width: fit-content;
    height: 50px;
    padding: 10px 15px;
    margin-bottom:20px;
    @media screen and (max-width: 1200px) {
      height: 50px;
    }
    @media screen and (max-width: 800px) {
        height: 40px;
        padding: 5px 10px;
    }
`;



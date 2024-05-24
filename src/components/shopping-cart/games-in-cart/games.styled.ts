import styled from "@emotion/styled"

export const Oval = styled.div`
    width: 300px;
    height: 64px;
    border-radius: 20px;
    background-color: #F39A46;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: black;
    font-size: 4vh;
    margin: 40px 300px 30px;
    @media screen and (max-width: 1920px) {
        height: 50px;
        font-size: 3.5vh;
        max-width: 300px;
        text-align: center;
    }
    @media screen and (max-width: 800px) {
        height: 45px;
        font-size: 3vh;
        max-width: 250px;
        text-align: center;
    }

`;

export const Container_my = styled.div`
    display: flex;
    align-items: flex-start;
    background-color: #18396C;
    padding: 0 5vh 5vh;
    margin: 0 auto;
    margin-right:300px;    
    margin-left:300px;
    @media screen and (max-width: 1200px) {
        padding: 4vh;
        margin: 0 20px;
    }
    @media screen and (max-width: 800px) {
        padding: 3vh;
        margin: 0 10px;
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
    @media screen and (max-width: 1920px) {
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
    @media screen and (max-width: 1920px) {
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
    font-size: 3vh;
    @media screen and (max-width: 1920px) {
        font-size: 2.5vh;
    }
    @media screen and (max-width: 800px) {
        font-size: 2vh;
    }
`;

export const BigImage = styled.img`
    vertical-align: middle;
    margin:10px;
    margin-right: 20px;
    @media screen and (max-width: 1920px) {
        width: 320px;
    }
    @media screen and (max-width: 800px) {
        width: 280px;
    }
`;

export const SmallImage = styled.img`
    position: absolute;
    left: 1000px;    /* Используйте left для горизонтального позиционирования */
    margin-top: -20px; /* Оставьте margin-top для вертикального позиционирования */
    max-width: 40px;

    @media screen and (max-width: 1920px) {
        left:58%;  /* Пример изменения позиции для экранов шириной 1920px и меньше */
        
    }

    @media screen and (max-width: 1200px) {
        left: 77%;  /* Настройка для экранов шириной 1200px и меньше */
        max-width: 25px;
        margin-top:15px;
    }

    @media screen and (max-width: 800px) {
        left: 40%;  /* Настройка для экранов шириной 800px и меньше */
        max-width: 25px;
    }
    `;


export const Price = styled.p`
    font-weight: bold;
    font-size: 3vh;
    color: white;
    margin: -10px 0 0 700px; /* Отрицательное значение для margin-left */
    @media screen and (max-width: 1920px) {
        margin-left: 600px;
        text-align: center;
        font-size: 3vh;
    }
    @media screen and (max-width: 1200px) {
        margin-left: 300px;
        text-align: center;
        font-size: 2.5vh;
    }
    @media screen and (max-width: 800px) {
        margin-left: 200px;
        text-align: center;
        font-size: 2vh;
    }
`;


export const Delete = styled.p`
    margin: 130px auto 30px 700px;
    font-size: 2vh;
    font-weight: bold;
    color: red;
    text-decoration: underline;
    @media screen and (max-width: 1920px) {
        margin-left: 10vh;
        text-align: center;
    }
`;

export const Hr = styled.hr`
    width: 100%;
    border: 0;
    border-top: 1px solid #ccc;
    margin: 20px 0;
`;

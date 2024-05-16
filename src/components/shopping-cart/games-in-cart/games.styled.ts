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
    color:black; 
    font-size: 4vh; 
    margin-left: -5vh;
    margin-top: 10px;
    margin-bottom: 20px;
`;


export const Container_my = styled.div`     
    padding-bottom: 5vh;    
    padding-left: 5vh;
    padding-right: 10vh;
    margin-left: -25vh;
    margin-right: -25vh;    
    position: relative; 
    justify-content: space-between; 
    display: flex;
    flex-direction: row; /* Располагаем элементы в строку */
    align-items: flex-start;
    background-color: #18396C;
    
`;

export const H1 = styled.p`  
    font-style: italic;
    letter-spacing: 10%;
    font-size: 4vh; 
    color: white;
    margin-top: 35px;
    margin-left: 30px;
    margin-bottom: -10px;
`;    

export const H2 = styled.p`
    color: white;
    margin-top: 90px;
    margin-left: 30px;
    margin-bottom: -50px;
    font-weight: normal;
    text-align: left;
    font-size: 3vh;
`;

export const H3 = styled.p`
    color: white;
    margin-top: 90px;
    margin-left: 30px;
    margin-bottom: -50px;
    font-weight: normal;
    text-align: left;
    font-size: 3vh;
`;

export const BigImage = styled.img`
    vertical-align: middle;   
    margin-left: 800px; /* Отступ слева от обертки картинки */
`; 

export const SmallImage = styled.img`
    border-radius: 0px;
    vertical-align: middle;
    width: 40px; /* Ширина изображения */
    height: auto; /* Автоматическая высота */
    margin-top: -30px;
`;

export const Price = styled.p`
    font-weight: bold; /* Задаем полужирное начертание */
    font-size: 3vh; 
    margin-left: 200px;
    color: white;
    margin-top: -20px;
`;


export const Delete = styled.p`
    margin-top: 130px;
    margin-left: 1020px;
    font-size: 2vh;
    font-weight: bold;
    color: red; /* Цвет текста */
    text-decoration: underline;
    margin-bottom: 30px;
`;

export const Hr = styled.hr`
    width: 100%;
    border: 0;
    border-top: 1px solid #ccc; /* Пример стилей линии */
    margin: 20px 0; /* Пример отступов */
`;
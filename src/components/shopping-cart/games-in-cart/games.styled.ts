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
    margin: 10px 100px 10px;
`;

export const Container_my = styled.div`
    display: flex;
    align-items: flex-start;
    background-color: #18396C;
    padding: 0 5vh 5vh;
    margin: 0 auto;
    margin-right:100px;    
    margin-left:100px;
`;

export const H1 = styled.p`
    font-style: italic;
    letter-spacing: 10%;
    font-size: 4vh;
    color: white;
    margin: 20px 20px -10px;
`;

export const H2 = styled.p`
    color: white;
    margin: 0 20px -50px;
    font-weight: normal;
    font-size: 3vh;
`;

export const H3 = styled.p`
    color: white;
    margin: 80px 20px -50px;
    font-weight: normal;
    font-size: 3vh;
`;

export const BigImage = styled.img`
    vertical-align: middle;
    margin:10px;
    margin-right: 20px;
`;

export const SmallImage = styled.img`
    position: absolute;
    top:200px;
    left: 1000px;
    max-width: 40px;
    @media screen and (max-width: 1200px) {
  d isplay: none;
}
`;

export const Price = styled.p`
    font-weight: bold;
    font-size: 3vh;
    color: white;
    margin: -10px 0 0 1000px; /* Отрицательное значение для margin-left */
`;


export const Delete = styled.p`
    margin: 130px auto 30px 1000px;
    font-size: 2vh;
    font-weight: bold;
    color: red;
    text-decoration: underline;
`;

export const Hr = styled.hr`
    width: 100%;
    border: 0;
    border-top: 1px solid #ccc;
    margin: 20px 0;
`;

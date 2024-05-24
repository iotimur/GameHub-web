import styled from "@emotion/styled"

export const Delete1 = styled.p`
    font-size: 2vh;
    font-weight: bold;
    color: red;
    text-decoration: underline;
    position: absolute;
    top: 1500px;
    margin-top: 330px;
   
    @media screen and (max-width: 1920px) {
        right: 200px;
        top: 1200px;
        margin-right: 150px;
    }
    @media screen and (max-width: 800px) {
        right: 150px;
        top: 1000px;
        margin-right: 50px;
        font-size: 1.8vh;
    }
`;

export const Oval1 = styled.div`
    width: 300px;
    height: 60px;
    border-radius: 20px;
    background-color: #B0C15C;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: black;
    font-size: 2.8vh;
    margin-left: auto;
    margin-right: 250px;
    margin-bottom: 20px;

    @media screen and (max-width: 1200px) {
        margin-right: 300px;
        margin-top: 10px;
    }
    @media screen and (max-width: 800px) {
        margin-right: 200px;
        font-size: 2.5vh;
    }
`;

export const Oval2 = styled.div`
    width: 300px;
    height: 60px;
    border-radius: 20px;
    background-color: #B0C15C;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: black;
    font-size: 2.8vh;
    margin-left: 700px;
    margin-right: auto;
    margin-top: -80px;
    margin-bottom: 70px;

    @media screen and (max-width: 1200px) {
        margin-top:10px;
        margin-left: 190px;
    }
    @media screen and (max-width: 800px) {
        margin-left: 450px;
        font-size: 2.5vh;
    }
`;

export const Price1 = styled.div`
    font-weight: bold;
    font-size: 3vh;
    color: white;
    margin-top: 5px;
    margin-right: 250px;

    @media screen and (max-width: 1200px) {
        margin-top:5px;
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

export const Info = styled.div`
    margin-top: 10px;
    display: grid;
    grid-template-columns: auto;
    font-size: 3vh;
    margin-left: 200px;

    @media screen and (max-width: 1200px) {
        margin-left: 150px;
        font-size: 2.5vh;
    }
    @media screen and (max-width: 800px) {
        margin-left: 100px;
        font-size: 2vh;
    }
`;

export const H4 = styled.p`
    margin-top: 30px;
    margin-left: 50px;
    color: white;
    margin-right: 10px;
    display: inline;
    text-decoration: underline;

    @media screen and (max-width: 120px) {
        margin-left: 150px;
    }
    @media screen and (max-width: 800px) {
        margin-left: 100px;
        font-size: 2.5vh;
    }
`;

export const NDS = styled.p`
    display: inline;
    color: white;
    font-style: italic;
    margin-left: 250px;

    @media screen and (max-width: 1200px) {
        margin-left: 200px;
    }
    @media screen and (max-width: 800px) {
        margin-left: 100px;
        font-size: 2.5vh;
    }
`;

export const Hr = styled.hr`
    width: 100%;
    border: 0;
    border-top: 1px solid #ccc;
    margin: 20px 0;

    @media screen and (max-width: 800px) {
        margin: 15px 0;
    }
`;

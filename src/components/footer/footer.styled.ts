import styled from "@emotion/styled";

export const HRStyled = styled.hr`
    margin: 40px 0px;
`;

export const FigcaptionStyled = styled.figcaption`
    font-weight: 300;
    font-size: 25px;
    display: table;
    text-align: center;
    @media screen and (max-width: 900px) {
        font-weight: 200;
        font-size: 20px;
    }
`;

export const FigureImgStyled = styled.img`
    width: 50px;
    height: 54px;
    vertical-align: top;
    display: inline;
    @media screen and (max-width: 768px) {
        width: 40px;
        height: 44px;
    }
`;

export const FigureStyled = styled.figure`
    display: inline-block;
    text-align: center;
    margin-bottom: 0px;
    @media screen and (max-width: 768px) {
        display: block;
        margin: auto;
    }
    
`;

export const BottStyled = styled.div`
    text-align: center;
`;

export const TextEndStyled = styled.p`
    font-weight: 400;
    font-size: 25px;
`;

export const TextStyled = styled.p`
    font-weight: 700;
    margin-top: 20px;
    margin-bottom: 10px;
    @media screen and (max-width: 900px) {
        margin-left: 20px;
    }
`;

export const TextZagolovokStyled = styled.p`
    font-weight: 700;
    margin-top: 10px;
    margin-left: 15px;
    margin-bottom: 30px;
    @media screen and (max-width: 768px) {
        margin-bottom: 30px;
    }
`;

export const AStyled = styled.a`
    text-decoration: none;
    color: #fff;
    font-weight: 200;
`;

export const InFooterFirstStyled = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    align-items: flex-start; 
    display: flex;
    justify-content: space-between;
    max-width: 1120px;
    margin: 0 auto;
    
`;

export const InFooterStyled = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1440px;
    margin: 0 auto;
    @media screen and (max-width: 768px) {
        display: block;
        margin: auto;
    }
    width: 90%; 
`;

export const ImgStyled = styled.img`
    width: 33px;
    height: 21px;
    margin-top: 10px;
    display: inline;
    margin-right: 8px;
    @media screen and (max-width: 900px) {
        margin-left: 20px;
    }
`;

export const FooterStyled = styled.div`
    background: linear-gradient(180deg, #102d59 0%, #05152d 52.5%);
    padding-bottom: 30px;
    color: #fff;
    font-size: 22px;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;

`;
import styled from "@emotion/styled";

export const BlockPurchasesStyled = styled.div`  
    background: #18396c;
    padding-bottom: 35px;
    color: #fff;
    max-width: 1120px;
    margin: 40px auto;
    border: 1px solid #f39a46;
`;

export const Lin = styled.hr`
    border: 1px solid #f39a46;
`;

export const ShopsStyled = styled.div`  
    padding-left: 60px;
    padding-right: 0px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Адаптивная сетка */
    gap: 20px; /* Расстояние между элементами */
    margin-bottom: 20px;
`;

export const AddStyled = styled.button`  
    font-weight: 400;
    font-size: 20px;
    margin: 0 auto;
    display: block;
    background-color: transparent;
    border: none;
    color: #fff;
    cursor: pointer;
    width: 150px;
    height: 48px;
    &:hover {
        background: #102D59;
        transition: 0.5s;
        border-radius: 5px;
    }

    width: 230px;
    height: 40px;
    text-align: center;
    font-weight: 530;
    font-size: 20px;
    letter-spacing: 0.1em;
    display: flex;
    background: #18396c;
    border: 1px solid #f39a46;
    justify-content: center;
    align-items: center;
`;

export const TextZagolStyled = styled.p`  
    margin-left: 40px;
    margin-bottom: 20px;
    font-weight: 500;
    font-size: 24px;
`;

export const ImageStyled = styled.img`  
    height: 198px;
    width: 151px;
    margin-top: 35px;
    border-radius: 20px;
    margin-bottom: 35px;
    @media screen and (max-width: 768px) {
        margin-right: 100px;
        margin-left: 20px;
    }
`;

export const TextGameStyled = styled.p`  
    margin-right: 40px;
    font-weight: 400;
    font-size: 20px;
`;

export const TextBlockStyled = styled.div`  
    position: relative; 
    justify-content: space-between; 
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    vertical-align: middle;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const DFlexStyled = styled.div`  
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
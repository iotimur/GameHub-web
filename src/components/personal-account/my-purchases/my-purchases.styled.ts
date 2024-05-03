import styled from "@emotion/styled";

export const BlockPurchasesStyled = styled.div`  
    background: #18396c;
    margin: 60px 35px;
    padding-bottom: 35px;
`;

export const ShopsStyled = styled.div`  
    padding-left: 60px;
    padding-right: 0px;
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
`;

export const TextZagolStyled = styled.p`  
    margin-left: 40px;
    margin-bottom: 20px;
    padding-top: 20px;
    font-weight: 500;
    font-size: 25px;
`;

export const ImageStyled = styled.img`  
    height: 198px;
    width: 151px;
    margin-top: 35px;
    border-radius: 20px;
    margin-bottom: 35px;
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
`;

export const DFlexStyled = styled.div`  
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
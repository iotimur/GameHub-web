import styled from "@emotion/styled";

export const DFlexStyled = styled.div`  
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const FormsStyled = styled.div`  
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 40px;
    @media screen and (max-width: 998px) {
        display:block;
        margin: 0 auto;
    }
`;

export const IzmStyled = styled.button`  
    margin-right: 15px;
    width: 141px;
    height: 35px;
    font-weight: 600;
    font-size: 20px;
    letter-spacing: 0.1em;
    text-align: center;
    color: #000;
    border-radius:5px;
    background: #d2c1ec;
    cursor: pointer;
    align-items: center;
    &:hover {
        background: #9f7cd0;
        transition: 0.5s;
    }    
`;

export const TextStyled = styled.p`  
    margin-left: 40px;
    margin-bottom: 20px;
    padding-top: 20px;
    font-weight: 500;
    font-size: 25px;
    color: #fff;
`;

export const BlockStyled = styled.div`  
    background: #18396c;
    margin: 60px 35px;
`;

export const InputStyled = styled.input`  
    border: 1px solid #2092c5;
    border-radius: 5px;
    width: 274px;
    height: 40px;
    letter-spacing: 0.15em;
    font-weight: 400;
    font-size: 15px;
    color: rgba(0, 0, 0, 0.55);
    font-style: italic;
    padding: 8px;
`;

export const ChangeStyled = styled.div`  
    display: inline;
    display: flex;
    flex-direction: row;
`;

export const FormStyled = styled.form`
    margin: 40px 0px;
`;

export const FormsInFormStyled = styled.div`
    width: 274px;
    height: 40px;
    border: none;
    max-width: 100%;
    height: auto;
    @media screen and (max-width: 998px) {
        margin: auto;
    }
`;
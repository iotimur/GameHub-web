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
      width: 150px;
    height: 33px;
    text-align: center;
    color: #ffffff;
    font-weight: 530;
    font-size: 20px;
    letter-spacing: 0.1em;
    cursor: pointer;
    margin: 0px 35px 0px 35px; 
    
    // margin-top: 40px;
    border-radius: 10px;
    background: #18396c;
    border: 1px solid #f39a46;
    justify-content: center;
    align-items: center;
`;

export const TextStyled = styled.p`  
    margin-left: 40px;
    margin-bottom: 20px;
    font-weight: 500;
    color: #fff;
    font-size: 24px;
`;

export const BlockStyled = styled.div`  
    background: #18396c;
    max-width: 1120px;
    margin: 0 auto;
    border: 1px solid #f39a46;
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
    margin: 20px 0px;
`;

export const Lin = styled.hr`
    border: 1px solid #f39a46;
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
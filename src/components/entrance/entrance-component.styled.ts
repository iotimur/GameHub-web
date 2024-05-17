import styled from "@emotion/styled";

export const RegistrStyled = styled.div`
    width: 374px;
    height: 471px;
    background: #fff;
    border-radius: 23px;
    margin: 200px auto;
`;

export const EntrStyled = styled.p`
    font-weight: 800;
    font-size: 25px;
    color: #080a21;
    background-color: transparent;
    border: none;
    margin-left: 30px;
    display: inline;
    width: 95px;
    height: 48px;
`;

export const ButtonRegStyled = styled.a`
    font-weight: 400;
    font-size: 25px;
    color: #080a21;
    background-color: transparent;
    border: none;
    margin-left: 45px;
    cursor: pointer;
    display: inline;
    width: 180px;
    height: 48px;
    &:hover {
        background: #D2C1EC;
        transition: 0.5s;
        border-radius: 5px;
    }
`;

export const ButtonStyled = styled.button`
    border: 1px solid #2092c5;
    border-radius: 5px;
    width: 308px;
    height: 48px;
    background: #d2c1ec;
    font-weight: 600;
    font-size: 20px;
    letter-spacing: 0.1em;
    text-align: center;
    color: #000;
    margin-top: 113px;
    cursor: pointer;
    &:hover {
        background: #9f7cd0;
        transition: 0.5s;
    }
`;

export const InputStyled = styled.input`
    border: 1px solid #2092c5;
    border-radius: 5px;
    width: 308px;
    height: 48px;
    background: #fff;
    font-style: italic;
    font-weight: 400;
    font-size: 15px;
    letter-spacing: 0.1em;
    color: rgba(0, 0, 0, 0.55);
    padding: 15px;
    margin-bottom: 30px;
`;

export const HRStyled = styled.hr`
    fill: #fff;
    stroke-width: 1px;
    stroke: #000;
`;

export const UpStyled = styled.div`
    padding: 20px;
`;

export const DownStyled = styled.div`
    padding: 30px;
`;
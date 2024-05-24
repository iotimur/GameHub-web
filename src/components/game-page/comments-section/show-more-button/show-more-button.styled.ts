import styled from "@emotion/styled";

export const ShowMoreButtonStyle = styled.button`
    width: 100%;
    height: 64px; /* Высота кнопки */
    background-color: #18396C;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    justify-content: center;
    
    &:active {
        background-color: #2E5A99; /* Новый цвет фона при нажатии */
    }
`;

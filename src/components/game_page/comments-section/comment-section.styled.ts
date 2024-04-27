import styled from "@emotion/styled";




export const CommentsContainer = styled.div`
    background-color: #102D59;
    color: white;
    margin-bottom: 20px;
    margin-top: 30px;
    width: 100% - padding;  /* Ширина блока от начала до конца с учетом отступов */
    min-height: 480px; /* Высота блока 80px */
    position: relative;
`;

export const CommentsTitle = styled.h2`
    color: white;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const CommentBlock = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center; /* Выравниваем по горизонтали */
    align-items: center; /* Выравниваем по вертикали */
`;

export const ShowMoreButton = styled.button`
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

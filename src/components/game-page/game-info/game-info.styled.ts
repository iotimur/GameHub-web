
import styled from "@emotion/styled";

export const GameInfoContainer = styled.div`
    width: 100%;
    background-color: #18396C;
    color: white;
    border-radius: 0;
    padding: 15px; /* Общий внутренний отступ */
    box-sizing: border-box; /* Размер включает padding и border */
    
    @media (max-width: 768px) {
        margin-left: 0; /* Убираем левый отступ на мобильных */
        padding: 10px; /* Уменьшаем отступы на мобильных */
    }
`;

export const GameInfoText = styled.div`
    ul {
        list-style: none;
        padding-left: 0;
    }

    li {
        font-style: italic;
        font-size: 20px;
        line-height: 0.9; /* Исправлено значение для лучшего читаемости */
        margin-top: 5px; /* Уменьшаем верхний отступ между элементами списка */
        padding-bottom: 5px; /* Уменьшаем нижний отступ между элементами списка */
    }
`;

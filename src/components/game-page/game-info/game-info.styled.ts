
import styled from "@emotion/styled";

export const GameInfoContainer = styled.div`
    width: 100%;
    background-color: #18396C;
    color: white;
    border-radius: 0;
    padding: 15px; /* Общий внутренний отступ */
    margin-left: 15px;
    box-sizing: border-box; /* Общий размер включая padding и border */
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

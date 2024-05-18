// system-requirements.styled.ts

import styled from "@emotion/styled"; 

export const SystemRequirementsContainer = styled.div`
    margin-top: 15px;
    width: calc(100% - 70px); /* Ширина блока от начала до конца (70px = 35px padding справа и слева) */
    min-height: 390px; /* Высота блока */
    background-color: #021B40; /* Цвет фона блока */
    position: relative;
    color: white;
    padding: 35px;
`;

export const Title = styled.h2`
    font-size: 20px;
    font-style: italic;
    font-weight: 300;
    margin-bottom: 20px;
`;

export const ColumnsWrapper = styled.div`
    display: flex;
`;

export const Column = styled.div`
    flex: 1;
    margin-right: 20px;
`;

export const Subtitle = styled.h3`
    font-size: 20px;
    font-style: italic;
    font-weight: 300;
    margin-bottom: 10px;
`;

export const RequirementsList = styled.ul`
    list-style-type: disc;
    margin-left: 20px;
`;

export const RequirementItem = styled.li`
    font-size: 16px;
    font-style: italic;
    font-weight: 300;
    margin-bottom: 10px;
`;

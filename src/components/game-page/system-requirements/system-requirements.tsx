import React from 'react';

import { 
    SystemRequirementsContainer, 
    Title, 
    ColumnsWrapper, 
    Column, 
    Subtitle, 
    RequirementsList, 
    RequirementItem 
} from './system-requirements.styled';

const SystemRequirements = () => {
    return (
        <SystemRequirementsContainer>
            <Title>СИСТЕМНЫЕ ТРЕБОВАНИЯ</Title>
            <ColumnsWrapper>
                <Column>
                    <Subtitle>РЕКОМЕНДУЕМЫЕ:</Subtitle>
                    <RequirementsList>
                        <RequirementItem>64-разрядные процессор и операционная система</RequirementItem>
                        <RequirementItem>ОС: Windows 10</RequirementItem>
                        <RequirementItem>Процессор: INTEL CORE I5-8400 or AMD RYZEN 3 3300X</RequirementItem>
                        <RequirementItem>Оперативная память: 12 GB ОЗУ</RequirementItem>
                        <RequirementItem>Видеокарта: NVIDIA GEFORCE GTX 1060 3 GB or AMDRADEON RX 580 4 GB</RequirementItem>
                        <RequirementItem>DirectX: версии 12</RequirementItem>
                        <RequirementItem>Место на диске: 60 GB</RequirementItem>
                        <RequirementItem>Звуковая карта: Windows Compatible Audio Device</RequirementItem>
                    </RequirementsList>
                </Column>
                <Column>
                    <Subtitle>МИНИМАЛЬНЫЕ:</Subtitle>
                    <RequirementsList>
                        <RequirementItem>64-разрядные процессор и операционная система</RequirementItem>
                        <RequirementItem>ОС: Windows 10/11</RequirementItem>
                        <RequirementItem>Процессор: INTEL CORE I7-8700K or AMD RYZEN 5 3600X</RequirementItem>
                        <RequirementItem>Оперативная память: 16 GB ОЗУ</RequirementItem>
                        <RequirementItem>Видеокарта: NVIDIA GEFORCE GTX 1070 8 GB or AMD RADEON RX VEGA 56 8 GB</RequirementItem>
                        <RequirementItem>DirectX: версии 12</RequirementItem>
                        <RequirementItem>Место на диске: 60 GB</RequirementItem>
                        <RequirementItem>Звуковая карта: Windows Compatible Audio Device</RequirementItem>
                    </RequirementsList>
                </Column>
            </ColumnsWrapper>
        </SystemRequirementsContainer>
    );
};

export default SystemRequirements;

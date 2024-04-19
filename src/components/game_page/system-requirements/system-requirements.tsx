import React from 'react';
import './system-requirements.css';
const SystemRequirements = () => {
    return (
        <div className="system-requirements">
            <h2 className="system-requirements-title">СИСТЕМНЫЕ ТРЕБОВАНИЯ</h2>
            <div className="requirements-columns">
                <div className="column">
                    <h3 className="requirements-subtitle">РЕКОМЕНДУЕМЫЕ:</h3>
                    <ul className="requirements-list">
                        <li>64-разрядные процессор и операционная система</li>
                        <li>ОС: Windows 10</li>
                        <li>Процессор: INTEL CORE I5-8400 or AMD RYZEN 3 3300X</li>
                        <li>Оперативная память: 12 GB ОЗУ</li>
                        <li>Видеокарта: NVIDIA GEFORCE GTX 1060 3 GB or AMDRADEON RX 580 4 GB</li>
                        <li>DirectX: версии 12</li>
                        <li>Место на диске: 60 GB</li>
                        <li>Звуковая карта: Windows Compatible Audio Device</li>
                    </ul>
                </div>
                <div className="column">
                    <h3 className="requirements-subtitle">МИНИМАЛЬНЫЕ:</h3>
                    <ul className="requirements-list">
                        <li>64-разрядные процессор и операционная система</li>
                        <li>ОС: Windows 10/11</li>
                        <li>Процессор: INTEL CORE I7-8700K or AMD RYZEN 5 3600X</li>
                        <li>Оперативная память: 16 GB ОЗУ</li>
                        <li>Видеокарта: NVIDIA GEFORCE GTX 1070 8 GB or AMD RADEON RX VEGA 56 8 GB</li>
                        <li>DirectX: версии 12</li>
                        <li>Место на диске: 60 GB</li>
                        <li>Звуковая карта: Windows Compatible Audio Device</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SystemRequirements;

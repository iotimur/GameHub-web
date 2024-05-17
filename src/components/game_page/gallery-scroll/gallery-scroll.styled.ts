import styled from "@emotion/styled";

export const GalleryContainer = styled.div`
    
    
    width: 100%;
    clear: both; /* Очистка обтекания */
    position: relative; /* Установка позиции */
    display: flex; /* Располагаем элементы в строку */
    align-items: center; /* Выравнивание по центру по вертикали */
`;

export const GalleryWrapper = styled.div`
    margin-top: 15px;
    margin-left: 40px;
    display: flex;
    transition: transform 0.5s ease; /* Анимация для плавного скролла */
    width: 240px; /* Ширина соответствует 1/5 прокрутки */
    flex-shrink: 0; /* Запрет на уменьшение элемента при недостатке места */
    
    
}
`;

export const ScrollButton = styled.button`
    margin-top: 15px;
    width: 60px; /* Ширина кнопок */
    height: 100px; /* Высота кнопок */
    background-color: #3498db;
    color: white;
    text-align: center;
    line-height: 50px; /* Выравнивание по центру по вертикали */
    cursor: pointer;
    transition: background-color 0.3s ease;
    position: absolute; /* Изменяем на абсолютное позиционирование */

    &.left-btn {
        left: 0;
        margin-left: 0px; /* Кнопка "Назад" будет выталкивать "Вперед" вправо */
    }

    &.right-btn {
        right: 0;
        margin-right: 0px; /* Кнопка "Вперед" будет выталкивать "Назад" влево */
    }
`;

export const ScreenshotImage = styled.img`
   
    height: 100px;
`;

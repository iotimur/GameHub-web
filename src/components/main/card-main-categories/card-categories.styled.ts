import styled from "@emotion/styled";

export const ProductCardNewsResponsive = styled.div`
  flex: 1 0 calc((100% - 60px) / 4);
  /* flex: 0 0 21%; */
  width: 12em; /* Заменяем max-width на width */
  min-width: 12em; /* Добавляем min-width */

  background-color: #18396c;
  padding: 5px 5px;
  margin-right: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-style: italic;
  border-radius: 0.5em;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 2);
  /* box-shadow: 0 3px 3px #d2c1ec; */

  &:hover {
    background-color: #1450a5;
    color: #fff;
  }
`;

export const CategoriesСardImg = styled.img`
  width: 100%;
  height: 90%; /* Устанавливаем высоту равной ширине */

  aspect-ratio: 1; /* Устанавливаем соотношение сторон 1:1 */
`;

export const TextCardCategories = styled.div`
  font-size: 1.2em;
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%; /* Устанавливаем ширину изображения в 100% от родительского контейнера */
  height: 10%;
  /* padding-top: 5px; */
  padding-left: 10px;
  color: #fff;
`;

const mediaQuery = "@media screen and (max-width: 576px)";

export const ProductСardCategories = styled(ProductCardNewsResponsive)`
  ${mediaQuery} {
    font-size: 0.9em;
  }
`;

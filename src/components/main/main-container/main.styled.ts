import styled from "@emotion/styled";

export const ContainerMain = styled.div`
  max-width: 65rem;
  margin: 0 auto;
  padding: 0 0.75rem;
`;

export const CardsMain = styled.div`
  display: flex;
  flex-flow: row nowrap;
  /* justify-content: center;
align-items: center; */
  align-items: center;
`;

export const GalleryMain = styled.div`
  display: flex;
  flex-flow: row nowrap;
  overflow-x: scroll;
  scroll-behavior: smooth; /* Делает скролл плавным */

  &::-webkit-scrollbar {
    display: none;
  }
`;

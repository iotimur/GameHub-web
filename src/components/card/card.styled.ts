import styled from "@emotion/styled"

// export const Card = styled.button`
//     width: 80%;
//     height: 170px;
//     background: #18396C;
//     display: flex;
//     align-items: center;
//     position: relative;
//     cursor: pointer;
//     border: 1px solid #f39a46;
//     margin-bottom: 5px;
//   &:hover {
//   background: #2E5A99;
//   transition: 0.5s;
// }
//   @media screen and (max-width: 800px) {
//   width: 80%;
//   height: 130px;
// }
// `;

export const Card = styled.button`
    width: 100%; /* Изменено на 90% для создания отступа */
    height: 170px;
    background: #18396C;
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    border: 1px solid #f39a46;
    // margin-bottom: 5px;
    // margin-left: 10px;
    &:hover {
        background: #2E5A99;
        transition: 0.5s;
    }
    @media screen and (max-width: 800px) {
        width: 80%;
        height: 130px;
    }
`;

export const AllCard = styled.div`
    width: 100%;
    height: 170px;
    display: flex; 
    align-items: center; 
    // border: 1px solid #f39a46;
    margin-bottom: 5px;
    &:hover img {
        opacity: 1; 
    }
`;

export const BtnFavourite = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
`;

export const FavouriteImage = styled.img`
    width: 30px; 
    height: 30px; 
    opacity: 0.5
`;

export const CardImg = styled.img`
    margin-left: 5px;
    width: 350px;
    height: 150px;
    border-radius: 10px;
    object-fit: cover; 
@media screen and (max-width: 988px) {
  width: 320px;
}

@media screen and (max-width: 800px) {
  width: 40%;
  height: 100px;
}

`;

export const TitleGame = styled.span`
    position: static;
    padding-left: 50px;
    font-family: var(--font-family);
    font-style: italic;
    font-weight: 500;
    font-size: 32px;
    color: #fff;

    @media screen and (max-width: 1200px) {
        width: 300px;
        padding-left: 20px;
    }

    @media screen and (max-width: 998px) {
        width: 200px;
        font-size: 24px;
    }
        @media screen and (max-width: 800px) {
        font-size: 20px;
    }
    
`;

export const Windows = styled.img`
    position: absolute;
    right: 120px;
    max-width: 40px;
    @media screen and (max-width: 1200px) {
      display: none;
    }
`;
export const NewPrice = styled.span`
  position: absolute;
  right: 20px;
  font-family: var(--font-family);
  font-style: italic;
  font-weight: 500;
  font-size: 28px;
  color: #f39a46;
  @media screen and (max-width: 998px) {
    font-size: 24px;
  }
  @media screen and (max-width: 900px) {
    font-size: 20px;
  }
    @media screen and (max-width: 800px) {
    font-size: 16px;
  }
  `;

export const OldPrice = styled.span`
  position: absolute;
  right: 20px;
  top: 35%;
  transform: translateY(-50%);
  font-family: var(--font-family);
  font-style: italic;
  font-weight: 500;
  font-size: 20px;
  color: #7693bb;

  &::before {
    content: "";
    position: absolute;
    bottom: 50%;
    left: 0;
    width: 100%;
    height: 2px;
    background: #7693bb;
    transform: translateY(10%) rotate(-7deg);
  }
  @media screen and (max-width: 998px) {
      font-size: 20px;
    }
  @media screen and (max-width: 800px) {
      display: none;
  }
`



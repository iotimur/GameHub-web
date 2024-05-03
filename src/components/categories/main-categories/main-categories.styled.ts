import styled from "@emotion/styled"

export const StyledCategories = styled.main`
    max-width: 1120px;
    width: 90%;
    min-width: 600px;
    margin: 0 auto;
    background-color: #102D59;
 
  @media screen and (max-width: 1200px) {
    .img-windows {
      display: none;
    }
  
    .title-game {
      width: 300px;
      left: 0px;
    }
  
    .sort-txt {
      margin-left: 630px;
    }
  
    .filter {
      margin-left: 807px;
    }
  }
  
  @media screen and (max-width: 998px) {
    .title-game {
      width: 200px;
      font-size: 24px;
      padding-left: 50px;
    }
  
    .new-price {
      font-size: 24px;
    }
  
    .old-price {
      font-size: 20px;
    }
  
    .price-txt {
      font-size: 16px;
    }
  
    .sort-txt {
      margin-left: 480px;
      font-size: 20px;
    }
  
    .filter {
      width: 200px;
      margin-left: 675px;
    }
  }
  
  @media screen and (max-width: 768px) {
    .intro-title {
      font-size: 24px;
    }
  
    .show-more-btn span {
      font-size: 20px;
    }
  
    .price-txt,
    .old-price,
    .new-price {
      display: none;
    }
  
    .sort-txt {
      margin-left: 380px;
      font-size: 16px;
    }
  
    .filter {
      width: 150px;
      margin-left: 520px;
    }
  }
  
  @media screen and (max-width: 576px) {
    .sort-txt {
      margin-left: 490px;
      margin-top: -20px;
      font-size: 10px;
      width: 80px;
    }
  
    .filter {
      width: 150px;
      margin-left: 450px;
    }
  
    .price-txt,
    .old-price,
    .new-price {
      display: none;
    }
  }
`;
// @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");

// * {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
//   list-style: none;
//   text-decoration: none;
//   font-family: "Poppins", sans-serif;
// }

// body {
//   background-color: #102D59;
//   min-height: 100%;
//   height: auto;
//   position: relative;
// }
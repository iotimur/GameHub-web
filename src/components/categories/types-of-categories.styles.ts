import styled from "@emotion/styled"

export const StyledCategories = styled.main`
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
}

body {
  background-color: #102D59;
  min-height: 100%;
  height: auto;
  position: relative;
}
main {
    max-width: 1120px;
    width: 90%;
    min-width: 600px;
    margin: 0 auto;
  }
  
  button {
    display: flex;
    max-width: 1120px;
  }
  
  /* sorting */
  .sort-txt {
    position: absolute;
    margin-left: 720px;
    padding-top: 40px;
    font-family: var(--font-family);
    font-style: italic;
    font-weight: 500;
    font-size: 20px;
    color: #fff;
  }
  
  .filter {
    position: absolute;
    display: flex;
    align-items: center;
    margin-left: 890px;
    margin-top: 40px;
    border-radius: 20px;
    width: 230px;
    height: 27px;
    background: #18396c;
    cursor: pointer;
    border: 1px solid #f39a46;
  }
  
  .filter-img {
    margin-left: auto;
    margin-right: 0px;
  }
  
  .rounded-rectangle {
    border-radius: 20px;
    display: flex;
    align-items: center;
    padding: 0 20px;
    background: #f39a46;
    width: fit-content;
    height: 64px;
  }
  
  .intro-title {
    font-family: var(--font-family);
    font-style: italic;
    font-weight: bold;
    font-size: 32px;
    color: #000;
    display: flex;
    flex-direction: column;
  }
  
  .card {
    width: 100%;
    height: 170px;
    background: #18396C;
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    border: 1px solid #f39a46;
  }

  
.card-img {
    margin-left: 10px;
    width: 350px;
    height: 150px;
    border-radius: 10px;
  }
  
  .title-game {
    position: static;
    padding-left: 50px;
    font-family: var(--font-family);
    font-style: italic;
    font-weight: 500;
    font-size: 32px;
    color: #fff;
  }
  
  .img-windows {
    position: absolute;
    right: 200px;
    max-width: 40px;
  
  }
  
  .new-price {
    position: absolute;
    right: 20px;
    font-family: var(--font-family);
    font-style: italic;
    font-weight: 500;
    font-size: 32px;
    color: #f39a46;
  }
  
  .old-price {
    position: absolute;
    right: 20px;
    top: 35%;
    transform: translateY(-50%);
    font-family: var(--font-family);
    font-style: italic;
    font-weight: 500;
    font-size: 24px;
    color: #7693bb;
  }
  
  .old-price::before {
    content: "";
    position: absolute;
    bottom: 50%;
    left: 0;
    width: 100%;
    height: 2px;
    background: #7693bb;
    transform: translateY(10%) rotate(-7deg);
  }
  
  .price-txt {
    font-family: var(--font-family);
    font-style: italic;
    font-weight: 500;
    font-size: 20px;
    color: #fff;
    margin-left: auto;
    margin-right: 20px;
  }
  
  .price-txt-background {
    border-radius: 10px;
    display: flex;
    align-items: center;
    padding: 0 5px;
    width: fit-content;
    height: 30px;
    background: #102D59;
  }
  
  .show-more-btn {
    width: 100%;
    height: 50px;
    background: #18396c;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 1px solid #f39a46;
  }
  
  .show-more-btn span {
    font-family: var(--font-family);
    font-style: italic;
    font-weight: 100;
    font-size: 20px;
    color: #fff;
  }
  
  .separator {
    height: 5px;
  }
  
  .big-separator {
    height: 20px;
  }

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
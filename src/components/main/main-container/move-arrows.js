let horizontScroll = document.querySelector(".gallery");
let leftBtn = document.getElementById("leftBtn");
let rightBtn = document.getElementById("rightBtn");

let productCard = document.querySelector(".product-card-top-sail");
let productCardWidth = productCard.offsetWidth;
let productCardStyles = window.getComputedStyle(productCard);
let marginRight = parseInt(productCardStyles.marginRight);

rightBtn.addEventListener("click", () => {
  const totalWidth = horizontScroll.scrollWidth;
  const currentScrollPosition = horizontScroll.scrollLeft;
  const remainingWidth =
    totalWidth - currentScrollPosition - horizontScroll.clientWidth;
  // Проверяем, осталось ли меньше 4 карточек
  if (remainingWidth <= 4 * (productCardWidth + marginRight)) {
    // Прокручиваем к началу галереи
    horizontScroll.scrollLeft = 0;
  } else {
    // Прокручиваем на ширину четырех карточек
    horizontScroll.scrollLeft += 4 * productCardWidth + 4 * marginRight - 4;
  }
});

leftBtn.addEventListener("click", () => {
  const currentScrollPosition = horizontScroll.scrollLeft;
  const totalCards = horizontScroll.childElementCount;

  // Проверяем, находимся ли мы в начале галереи
  if (currentScrollPosition === 0) {
    // Прокручиваем к последним 4 карточкам
    horizontScroll.scrollLeft =
      (4 * productCardWidth + 4 * marginRight - 4) * (totalCards / 4 - 1);
  } else {
    // Прокручиваем на ширину четырех карточек влево
    horizontScroll.scrollLeft -= 4 * productCardWidth + 4 * marginRight + 4;
  }
});

let horizontScroll_categories = document.getElementById("gallery2");
let leftBtn_categories = document.getElementById("leftBtn_categories");
let rightBtn_categories = document.getElementById("rightBtn_categories");

let productCard_categories = document.querySelector(".product-card-categories");
let productCardWidth_categories = productCard_categories.offsetWidth;
let productCardStyles_categories = window.getComputedStyle(
  productCard_categories
);
let marginRight_categories = parseInt(productCardStyles_categories.marginRight);

rightBtn_categories.addEventListener("click", () => {
  const totalWidth = horizontScroll_categories.scrollWidth;
  const currentScrollPosition = horizontScroll_categories.scrollLeft;
  const remainingWidth =
    totalWidth - currentScrollPosition - horizontScroll_categories.clientWidth;
  // Проверяем, осталось ли меньше 4 карточек
  if (
    remainingWidth <=
    4 * (productCardWidth_categories + marginRight_categories)
  ) {
    // Прокручиваем к началу галереи
    horizontScroll_categories.scrollLeft = 0;
  } else {
    // Прокручиваем на ширину четырех карточек
    horizontScroll_categories.scrollLeft +=
      4 * productCardWidth_categories + 4 * marginRight_categories - 10;
  }
});

leftBtn_categories.addEventListener("click", () => {
  const currentScrollPosition = horizontScroll_categories.scrollLeft;
  const totalWidth = horizontScroll_categories.scrollWidth;
  const totalCards = horizontScroll_categories.childElementCount;

  // Проверяем, находимся ли мы в начале галереи
  if (currentScrollPosition === 0) {
    // Прокручиваем к последним 4 карточкам
    horizontScroll_categories.scrollLeft =
      (4 * productCardWidth_categories + 4 * marginRight_categories - 10) *
      (totalCards / 4 - 1);
  } else {
    // Прокручиваем на ширину четырех карточек влево
    horizontScroll_categories.scrollLeft -=
      4 * productCardWidth_categories + 4 * marginRight_categories - 10;
  }
});

let horizontScroll_news = document.getElementById("gallery3");
let leftBtn_news = document.getElementById("leftBtn_news");
let rightBtn_news = document.getElementById("rightBtn_news");

let productCard_news = document.querySelector(".product-card-news");
let productCardWidth_news = productCard_news.offsetWidth;
let productCardStyles_news = window.getComputedStyle(productCard_news);
let marginRight_news = parseInt(productCardStyles_news.marginRight);

rightBtn_news.addEventListener("click", () => {
  const totalWidth = horizontScroll_news.scrollWidth;
  const currentScrollPosition = horizontScroll_news.scrollLeft;
  const remainingWidth =
    totalWidth - currentScrollPosition - horizontScroll_news.clientWidth;
  // Проверяем, осталось ли меньше 4 карточек
  if (remainingWidth <= 2 * (productCardWidth_news + marginRight_news)) {
    // Прокручиваем к началу галереи
    horizontScroll_news.scrollLeft = 0;
  } else {
    // Прокручиваем на ширину четырех карточек
    horizontScroll_news.scrollLeft +=
      2 * productCardWidth_news + 2 * marginRight_news;
  }
});

leftBtn_news.addEventListener("click", () => {
  const currentScrollPosition = horizontScroll_news.scrollLeft;
  const totalWidth = horizontScroll_news.scrollWidth;
  const totalCards = horizontScroll_news.childElementCount;

  // Проверяем, находимся ли мы в начале галереи
  if (currentScrollPosition === 0) {
    // Прокручиваем к последним 4 карточкам
    horizontScroll_news.scrollLeft =
      (2 * productCardWidth_news + 2 * marginRight_news) * (totalCards / 2 - 1);
  } else {
    // Прокручиваем на ширину четырех карточек влево
    horizontScroll_news.scrollLeft -=
      2 * productCardWidth_news + 2 * marginRight_news;
  }
});

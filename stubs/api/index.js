const router = require("express").Router();

router.get("/game-page", (request, response) => {
  response.send(require("../json/gamepage/success.json"));
});

router.get("/categories", (request, response) => {
    response.send(require("../json/gamepage/success.json"));
  });

router.get("/shopping-cart", (request, response) => {
  response.send(require("../json/shopping-cart/success.json"));
});

router.get("/data", (request, response) => {
  response.send(require("../json/home-page-data/success.json"));
});


module.exports = router;

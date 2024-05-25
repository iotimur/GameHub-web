const router = require("express").Router();

router.get("/game-page", (request, response) => {
  response.send(require("../json/gamepage/success.json"));
});

router.get("/shopping-cart", (request, response) => {
  response.send(require("../json/shopping-cart/success.json"));
});

module.exports = router;

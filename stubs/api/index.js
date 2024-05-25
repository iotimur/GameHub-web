const router = require("express").Router();

router.get("/game-page", (request, response) => {
  response.send(require("../json/gamepage/success.json"));
});

router.get("/categories", (request, response) => {
    response.send(require("../json/gamepage/success.json"));
  });

module.exports = router;

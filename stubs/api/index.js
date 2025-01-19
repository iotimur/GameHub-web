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

router.get("/home", (request, response) => {
  response.send(require("../json/home-page-data/success.json"));
});

router.get("/all-games", (request, response) => {
  response.send(require("../json/home-page-data/all-games.json"));
});

module.exports = router;

const createEelemnt = (key, value, buttonTitle) => `
    <label>
        <input name="${key}" type="radio" ${stubs[key] === value && "checked"} onclick="fetch('/api/admin/set/${key}/${value}')"/>
        ${buttonTitle || value}
    </label>
`

router.get("/admin", (request, response) => {
    response.send(`
        <div>
            <fieldset>
                <legend>users</legend>
                ${createEelemnt('users', 'success')}
                ${createEelemnt('users', 'empty')}
                ${createEelemnt('users', 'error')}
            </fieldset>
        </div>    
    `)
})

router.get("/admin/set/:key/:value", (request, response) => {
    const { key, value } = request.params;
    stubs[key] = value;
    response.send("Okay")
})
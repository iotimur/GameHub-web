const pkg = require("./package");

module.exports = {
  apiPath: "stubs/api",
  webpackConfig: {
    output: {
      publicPath: `/static/${pkg.name}/${process.env.VERSION || pkg.version}/`,
    },
  },
  /* use https://kc.admin.inno-js.ru/ to create config, navigations and features */
  navigations: {
    "gamehub.main": "/gamehub",
    "gamehub.categories": "/gamehub/categories",
    "gamehub.personal-account": "/gamehub/personal-account",
    "gamehub.shopping-cart": "/gamehub/shopping-cart",
    "gamehub.game-page": "/gamehub/game-page",
    "gamehub.entrance": "/gamehub/entrance",
    "gamehub.registration": "/gamehub/registration",
    "gamehub.list-games": "/gamehub/list-games",
    "gamehub.favourites": "/gamehub/favourites"
},
  features: {
    "gamehub": {
        "home-search-games": {
            "on": false,
            "value": "true",
            "key": "home-search-games"
        },
        "add-game-to-cart": {
            "on": false,
            "value": "true",
            "key": "add-game-to-cart"
        },
        "sort-comments": {
          "on": false,
          "value": "true",
          "key": "sort-comments"
      }
    }
  },
  config: {
    "gamehub.api": "/api",
  },
};

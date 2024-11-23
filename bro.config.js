const pkg = require('./package')

module.exports = {
  apiPath: 'stubs/api',
  webpackConfig: {
    output: {
      publicPath: `/static/${pkg.name}/${process.env.VERSION || pkg.version}/`
    }
  },
  /* use https://kc.admin.inno-js.ru/ to create config, navigations and features */
  navigations: {
    'gamehub-web.main': '/gamehub-web',
    "gamehub.categories": "/gamehub/categories",
    "gamehub.personal-account": "/gamehub/personal-account",
    "gamehub.shopping-cart": "/gamehub/shopping-cart",
    "gamehub.game-page": "/gamehub/game-page",
    "gamehub.entrance": "/gamehub/entrance",
    "gamehub.registration": "/gamehub/registration"
  },
  features: {
    'gamehub-web': {
      // add your features here in the format [featureName]: { value: string }
    },
  },
  config: {
    "gamehub.api": "/api"
  }
}

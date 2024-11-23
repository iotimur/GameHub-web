import { getNavigationsValue, getConfigValue } from '@brojs/cli';


const baseUrl = getNavigationsValue('gamehub.main');

export const URLs = {
  baseUrl,
  ui: {
    categories: getNavigationsValue('gamehub.categories') && `${baseUrl}${getNavigationsValue('gamehub.categories')}`,
    entrance: getNavigationsValue('gamehub.entrance') && `${baseUrl}${getNavigationsValue('gamehub.entrance')}`,
    registration: getNavigationsValue('gamehub.registration') && `${baseUrl}${getNavigationsValue('gamehub.registration')}`,
    'personal-account': getNavigationsValue('gamehub.personal-account') && `${baseUrl}${getNavigationsValue('gamehub.personal-account')}`,
    'shopping-cart': getNavigationsValue('gamehub.shopping-cart') && `${baseUrl}${getNavigationsValue('gamehub.shopping-cart')}`,
    'game-page': getNavigationsValue('gamehub.game-page') && `${baseUrl}${getNavigationsValue('gamehub.game-page')}`,
  },
  api: {
    main: getConfigValue('gamehub.api')
  },
}

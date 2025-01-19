import { getNavigationValue, getConfigValue } from "@brojs/cli";

const baseUrl = getNavigationValue("gamehub.main");

export const URLs = {
  baseUrl,
  ui: {
    categories:
      getNavigationValue("gamehub.categories") &&
      `${baseUrl}${getNavigationValue("gamehub.categories")}`,
    entrance:
      getNavigationValue("gamehub.entrance") &&
      `${baseUrl}${getNavigationValue("gamehub.entrance")}`,
    registration:
      getNavigationValue("gamehub.registration") &&
      `${baseUrl}${getNavigationValue("gamehub.registration")}`,
    "personal-account":
      getNavigationValue("gamehub.personal-account") &&
      `${baseUrl}${getNavigationValue("gamehub.personal-account")}`,
    "shopping-cart":
      getNavigationValue("gamehub.shopping-cart") &&
      `${baseUrl}${getNavigationValue("gamehub.shopping-cart")}`,
    "game-page":
      getNavigationValue("gamehub.game-page") &&
      `${baseUrl}${getNavigationValue("gamehub.game-page")}`,
    "update-like":
      getNavigationValue("gamehub.update-like") &&
      `${baseUrl}${getNavigationValue("gamehub.update-like")}`,
  },
  api: {
    main: getConfigValue("gamehub.api"),

  },
};

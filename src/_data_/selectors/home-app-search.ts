import { createSelector } from '@reduxjs/toolkit'

import { rootSelector } from './root'

const appListRootSelector = createSelector(rootSelector, state => state['home-page-search'])

export const isLoading = createSelector(appListRootSelector, state => state.isLoading)
export const searchSimbols = createSelector(appListRootSelector, state => state.searchSimbols)
export const allGames = createSelector(appListRootSelector, state => state.allGames)
export const foundedID = createSelector(appListRootSelector, state => state.foundedID)
export const openDropDown = createSelector(appListRootSelector, state => state.openDropDown)
export const error = createSelector(appListRootSelector, state => state.error)


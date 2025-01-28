import { createSelector } from '@reduxjs/toolkit'

import { rootSelector } from './root'

const appListRootSelector = createSelector(rootSelector, state => state['cart-games'])

export const isLoading = createSelector(appListRootSelector, state => state.isLoading)
export const ids = createSelector(appListRootSelector, state => state.ids)
export const error = createSelector(appListRootSelector, state => state.error)

import { createSelector } from '@reduxjs/toolkit'

import { rootSelector } from './root'

const appListRootSelector = createSelector(rootSelector, state => state['app-list'])

export const isLoading = createSelector(appListRootSelector, state => state.isLoading)
export const data = createSelector(appListRootSelector, state => state.data)
export const error = createSelector(appListRootSelector, state => state.error)

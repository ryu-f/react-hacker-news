import { Action, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import rootReducer, { RootState } from './rootReducer'

import { ThunkAction } from 'redux-thunk'
import { createBrowserHistory } from 'history'
import logger from 'redux-logger'
import { routerMiddleware } from 'connected-react-router'

export const history = createBrowserHistory()

const env = process.env.NODE_ENV
const middlewares: any[] = []

if (env !== 'production') {
  middlewares.push(
    ...getDefaultMiddleware({ thunk: true, immutableCheck: true, serializableCheck: true })
  )
  middlewares.push(logger)
}

middlewares.push(routerMiddleware(history))

const store = configureStore({
  reducer: rootReducer(history),
  middleware: [...middlewares],
  devTools: env !== 'production'
})

export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>
export default store

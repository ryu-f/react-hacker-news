import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import { createBrowserHistory } from 'history'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import rootReducer from './rootReducer'
import rootSaga from './rootSaga'
import { routerMiddleware } from 'connected-react-router'

export const history = createBrowserHistory()

const env = process.env.NODE_ENV
const sagaMiddleware = createSagaMiddleware()
const middlewares: any[] = []

if (env !== 'production') {
  middlewares.push(
    ...getDefaultMiddleware({ thunk: false, immutableCheck: true, serializableCheck: true })
  )
  middlewares.push(logger)
  middlewares.push(sagaMiddleware)
  middlewares.push(routerMiddleware(history))
} else {
  middlewares.push(routerMiddleware(history))
  middlewares.push(sagaMiddleware)
}

const store = configureStore({
  reducer: rootReducer(history),
  middleware: [...middlewares],
  devTools: env !== 'production'
})

sagaMiddleware.run(rootSaga)
store.dispatch({ type: 'INIT' })

export default store

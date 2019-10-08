import { applyMiddleware, compose, createStore } from 'redux'

import { createBrowserHistory } from 'history'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import rootReducer from './modules/rootReducer'
import rootSaga from './sagas/rootSaga'
import { routerMiddleware } from 'connected-react-router'

export const history = createBrowserHistory()

const env = process.env.NODE_ENV
const sagaMiddleware = createSagaMiddleware()
const middlewares: any[] = []

if (env !== 'production') {
  middlewares.push(logger)
  middlewares.push(sagaMiddleware)
  middlewares.push(routerMiddleware(history))
} else {
  middlewares.push(routerMiddleware(history))
  middlewares.push(sagaMiddleware)
}

const composeEnhancers =
  typeof window === 'object' && ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ as any)
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose
const enhancer = composeEnhancers(applyMiddleware(...middlewares))

const configureStore = () => {
  const store = createStore(rootReducer(history), enhancer)
  sagaMiddleware.run(rootSaga)
  store.dispatch({ type: 'INIT' })
  return store
}

export default configureStore

import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './modules/rootReducer'
import rootSaga from './sagas/rootSaga'
import logger from 'redux-logger'

const env = process.env.NODE_ENV
const sagaMiddleware = createSagaMiddleware()
const middlewares: any[] = []

if (env !== 'production') {
  middlewares.push(logger)
  middlewares.push(sagaMiddleware)
} else {
  middlewares.push(sagaMiddleware)
}

const composeEnhancers =
  typeof window === 'object' && ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ as any)
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose
const enhancer = composeEnhancers(applyMiddleware(...middlewares))

const configureStore = () => {
  const store = createStore(rootReducer, enhancer)
  sagaMiddleware.run(rootSaga)
  store.dispatch({ type: 'INIT' })
  return store
}

export default configureStore

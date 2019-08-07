// import { createStore, applyMiddleware, compose } from 'redux'
// import rootReducer from './modules/rootReducer'
// import logger from 'redux-logger'

// const env = process.env.NODE_ENV
// const middlewares: any[] = []

// if (env !== 'production') middlewares.push(logger)

// const composeEnhancers =
//   typeof window === 'object' && ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ as any)
//     ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
//     : compose
// const enhancer = composeEnhancers(applyMiddleware(...middlewares))

// const configureStore = () => {
//   const store = createStore(rootReducer, enhancer)
//   return store
// }

// export default configureStore

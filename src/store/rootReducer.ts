import { RouterState, connectRouter } from 'connected-react-router'
import newsReducer, { NewsState } from './features/domain/news'

import { History } from 'history'
import { combineReducers } from '@reduxjs/toolkit'

export interface RootState {
  news: NewsState
  router: RouterState
}

const rootReducer = (history: History) =>
  combineReducers({
    news: newsReducer,
    router: connectRouter(history)
  })

export default rootReducer

import { RouterState, connectRouter } from 'connected-react-router'
import deviceReducer, { DeviceState } from './features/ui/device'
import newsReducer, { NewsState } from './features/domain/news'

import { History } from 'history'
import { combineReducers } from '@reduxjs/toolkit'

export interface RootState {
  news: NewsState
  device: DeviceState
  router: RouterState
}

const rootReducer = (history: History) =>
  combineReducers({
    news: newsReducer,
    device: deviceReducer,
    router: connectRouter(history)
  })

export default rootReducer

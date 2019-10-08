import { State as DeviceState, reducer as deviceReducer } from './ui/device'
import { State as NewsState, reducer as newsReducer } from './domain/news'
import { RouterState, connectRouter } from 'connected-react-router'

import { History } from 'history'
import { combineReducers } from 'redux'

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

import { State as DeviceState, reducer as deviceReducer } from './ui/device'
import { State as NewsState, reducer as newsReducer } from './domain/news'

import { combineReducers } from 'redux'

export interface RootState {
  news: NewsState
  device: DeviceState
}

const rootReducer = combineReducers({
  news: newsReducer,
  device: deviceReducer
})

export default rootReducer

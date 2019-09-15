import { State as NewsState, reducer as newsReducer } from './domain/news'

import { combineReducers } from 'redux'

export interface RootState {
  news: NewsState
}

const rootReducer = combineReducers({
  news: newsReducer
})

export default rootReducer

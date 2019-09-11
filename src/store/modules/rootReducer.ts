import { combineReducers } from 'redux'
import { reducer as newsReducer, State as NewsState } from './domain/news'

export interface RootState {
  news: NewsState
}

const rootReducer = combineReducers({
  news: newsReducer
})

export default rootReducer

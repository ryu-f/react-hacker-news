import * as newsSelectors from './selector'
import * as newsActions from './actions'
import * as NEWS_TYPES from './types'
import { reducer, State } from './reducer'

export { newsSelectors, newsActions, NEWS_TYPES, reducer }

export type State = State

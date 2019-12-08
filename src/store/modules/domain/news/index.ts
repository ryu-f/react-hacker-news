import * as NEWS_TYPES from './types'
import * as newsActions from './actions'
import * as newsSelectors from './selector'

import { State, reducer } from './reducer'

export { newsSelectors, newsActions, NEWS_TYPES, reducer }

export type NewsState = State

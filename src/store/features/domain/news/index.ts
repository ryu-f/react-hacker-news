import * as newsOperations from './operations'
import * as newsSelectors from './selector'

import reducer, { State, newsActions } from './slice'

export { newsSelectors, newsOperations, newsActions }
export default reducer

export type NewsState = State

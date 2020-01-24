import * as newsSelectors from './selector'
import * as newsOperations from './operations'
import reducer, { newsActions, State } from './slice'

export { newsSelectors, newsOperations, newsActions }
export default reducer

export type NewsState = State

import * as types from './types'
import { State } from './reducer'

type GetFeedItemArgs = Pick<State, 'feedItem'>['feedItem']

export const getFeedItem = (items: GetFeedItemArgs) => ({
  type: types.GET_FEED_ITEM,
  payload: items
})

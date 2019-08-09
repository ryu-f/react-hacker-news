import produce from 'immer'
import * as types from './types'
import * as creators from './actions'
import { CreatorToActions } from '@/store/modules/CreatorToActions'

export type State = {
  types: ('news' | 'newset' | 'ask' | 'show' | 'jobs')[]
  selectedType: string
  feedItem: types.FeedItem[]
  paging: number
}

const initialState: State = {
  types: ['news', 'newset', 'ask', 'show', 'jobs'],
  selectedType: 'news',
  feedItem: [],
  paging: 1
}

type Actions = CreatorToActions<typeof creators>

export const reducer = (state: State = initialState, action: Actions): State => {
  return produce(state, draft => {
    switch (action.type) {
      case types.GET_FEED_ITEM:
        draft.feedItem = action.payload
        break

      case types.SETTING_FEED_TYPE:
        draft.selectedType = action.payload
        break

      default:
        break
    }
  })
}

import produce from 'immer'
import * as creators from './actions'
import * as TYPES from './types'
import { CreatorToActions } from '@/store/modules/CreatorToActions'
import { Feeds, FeedItem } from '@/types/domain/hn'

export type State = {
  types: Feeds[]
  selectedType: string
  feedItem: FeedItem[]
  paging: number
}

const initialState: State = {
  types: ['news', 'newest', 'ask', 'show', 'jobs'],
  selectedType: 'news',
  feedItem: [],
  paging: 1
}

type Actions = CreatorToActions<typeof creators>

export const reducer = (state: State = initialState, action: Actions): State => {
  return produce(state, draft => {
    switch (action.type) {
      case TYPES.GET_FEED_ITEM:
        draft.feedItem = action.payload
        break

      case TYPES.SETTING_FEED_TYPE:
        draft.selectedType = action.payload
        break

      default:
        break
    }
  })
}

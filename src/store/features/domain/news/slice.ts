import { FeedItem, Feeds } from '@/types/domain/hn'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

// types
////////////////////////////////////////////////////////////
export type State = {
  types: Feeds[]
  selectedType: string
  feedItem: FeedItem[]
  paging: number
}

type GetFeedItem = State['feedItem']

type SelectFeedType = State['selectedType']

// initial state
////////////////////////////////////////////////////////////
const initialState: State = {
  types: ['news', 'newest', 'ask', 'show', 'jobs'],
  selectedType: 'news',
  feedItem: [],
  paging: 1
}

// slice
////////////////////////////////////////////////////////////
export const slice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    getFeedItem(state, action: PayloadAction<GetFeedItem>) {
      state.feedItem = action.payload
    },
    selectFeedType(state, action: PayloadAction<SelectFeedType>) {
      state.selectedType = action.payload
    }
  }
})

// exports
////////////////////////////////////////////////////////////
export const { actions: newsActions } = slice

export default slice.reducer

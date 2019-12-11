import { FeedItem, Feeds } from '@/types/domain/hn'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type NewsState = {
  types: Feeds[]
  selectedType: string
  feedItem: FeedItem[]
  paging: number
}

type GetFeedItem = {
  feedItem: NewsState['feedItem']
}

type SelectFeedType = {
  type: NewsState['selectedType']
}

const initialState: NewsState = {
  types: ['news', 'newest', 'ask', 'show', 'jobs'],
  selectedType: 'news',
  feedItem: [],
  paging: 1
}

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    getFeedItem(state, action: PayloadAction<GetFeedItem>) {
      state.feedItem = action.payload.feedItem
    },
    selectFeedType(state, action: PayloadAction<SelectFeedType>) {
      state.selectedType = action.payload.type
    }
  }
})

export const { getFeedItem, selectFeedType } = newsSlice.actions

export default newsSlice.reducer

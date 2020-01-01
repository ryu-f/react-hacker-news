import { FeedItem, Feeds } from '@/types/domain/hn'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type NewsState = {
  types: Feeds[]
  selectedType: string
  feedItem: FeedItem[]
  paging: number
}

type GetFeedItem = NewsState['feedItem']

type SelectFeedType = NewsState['selectedType']

const initialState: NewsState = {
  types: ['news', 'newest', 'ask', 'show', 'jobs'],
  selectedType: 'news',
  feedItem: [],
  paging: 1
}

export const slice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    getFeedItem(state, action: PayloadAction<GetFeedItem>): void {
      state.feedItem = action.payload
    },
    selectFeedType(state, action: PayloadAction<SelectFeedType>): void {
      state.selectedType = action.payload
    }
  }
})

export const { actions: newsActions } = slice

export default slice.reducer

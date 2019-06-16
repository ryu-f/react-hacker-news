import * as Rx from 'typeless/rx'
import getFeed from '@/api/getFeed'
import { FeedActions, FeedState, getFeedState, handle } from './interface'

// --- Epic ---
handle.epic().on(FeedActions.$mounted, () => {
  const feed = getFeedState()
  return Rx.from(getFeed({ type: feed.type, page: feed.page })).pipe(
    Rx.map(response => FeedActions.pushFeedItems(response))
  )
})

// --- Reducer ---
const initialState: FeedState = {
  feedItems: [],
  item: {},
  user: {},
  type: 'news',
  page: 1
}

handle
  .reducer(initialState)
  .on(FeedActions.pushFeedItems, (state, { feedItems }) => {
    state.feedItems = feedItems
  })
  .on(FeedActions.changeType, (state, { type }) => {
    state.type = type
  })
  .on(FeedActions.changePage, (state, { page }) => {
    state.page = page
  })

// --- Module ---
export const useFeedModule = () => handle()

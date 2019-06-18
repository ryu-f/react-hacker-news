import * as Rx from 'typeless/rx'
import getFeed from '@/services/api/getFeed'
import { FeedActions, FeedState, getFeedState, handle } from './interface'
// import { useActions } from 'typeless'
// import { RouterActions } from 'typeless-router'

// --- Epic ---
handle
  .epic()
  .on(FeedActions.$mounted, () => {
    const feed = getFeedState()
    return Rx.from(getFeed({ type: feed.type, page: feed.page })).pipe(
      Rx.map(response => FeedActions.pushFeedItems(response))
    )
  })
  .on(FeedActions.changeFeed, ({ type }) => {
    // const { push } = useActions(RouterActions)
    return Rx.of(FeedActions.changeType(type))
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

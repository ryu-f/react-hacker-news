import { createModule } from 'typeless'
import { FeedSymbol } from './symbol'
import { FeedItem } from '@/types'

export const MODULE = 'feed'

export const [handle, FeedActions, getFeedState] = createModule(FeedSymbol)
  .withActions({
    $mounted: null,
    pushFeedItems: (feedItems: any) => ({ payload: { feedItems } }),
    changeType: (type: string) => ({ payload: { type } }),
    changePage: (page: number) => ({ payload: { page } })
  })
  .withState<FeedState>()

export interface FeedState {
  feedItems: FeedItem[]
  item: any
  user: any
  type: string
  page: number
}

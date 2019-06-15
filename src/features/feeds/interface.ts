import { createModule } from 'typeless'
import { FeedsSymbol } from './symbol'
import { FeedItem, Item, User } from '@/types'

export const MODULE = 'feeds'

export const [handle, getFeedsState] = createModule(FeedsSymbol).withState<FeedsState>()

export interface FeedsState {
  feedItems: FeedItem[]
  item: Item
  user: User
  type: 'news' | 'newset' | 'ask' | 'show' | 'jobs' | 'item' | 'user'
  paging: number
}

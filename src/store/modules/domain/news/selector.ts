import { useMemo, useState } from 'react'

import { NewsState } from './slice'
import { RootState } from '@/store/modules/rootReducer'

export const getNews = (state: RootState) => state.news

export function useExtractingFeedItem(feedItem: NewsState['feedItem']) {
  const [rangeFeedItem, sliceFeedItem] = useState<NewsState['feedItem']>([])
  const DISPLAY_LIMIT = 15

  useMemo(() => {
    sliceFeedItem(feedItem.slice(0, DISPLAY_LIMIT))
  }, [feedItem])

  return rangeFeedItem
}

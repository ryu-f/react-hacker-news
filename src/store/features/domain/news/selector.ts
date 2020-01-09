import { useMemo, useState } from 'react'

import { NewsState } from './slice'

export const useExtractingFeedItem = (feedItem: NewsState['feedItem']) => {
  const [rangeFeedItem, sliceFeedItem] = useState<NewsState['feedItem']>([])
  const DISPLAY_LIMIT = 15

  useMemo(() => {
    sliceFeedItem(feedItem.slice(0, DISPLAY_LIMIT))
  }, [feedItem])

  return rangeFeedItem
}

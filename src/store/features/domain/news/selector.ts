import { useMemo, useState } from 'react'

import { State } from './slice'

export const useExtractingFeedItem = (feedItem: State['feedItem']) => {
  const [rangeFeedItem, sliceFeedItem] = useState<State['feedItem']>([])
  const DISPLAY_LIMIT = 15

  useMemo(() => {
    sliceFeedItem(feedItem.slice(0, DISPLAY_LIMIT))
  }, [feedItem])

  return rangeFeedItem
}

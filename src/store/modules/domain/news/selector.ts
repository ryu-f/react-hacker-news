import { useMemo, useState } from 'react'

import { RootState } from '@/store/modules/rootReducer'
import { State } from './reducer'

export const getNews = (state: RootState) => state.news

export function useExtractingFeedItem(feedItem: State['feedItem']) {
  const [rangeFeedItem, sliceFeedItem] = useState<State['feedItem']>([])
  const DISPLAY_LIMIT = 15

  useMemo(() => {
    sliceFeedItem(feedItem.slice(0, DISPLAY_LIMIT))
  }, [feedItem])

  return rangeFeedItem
}

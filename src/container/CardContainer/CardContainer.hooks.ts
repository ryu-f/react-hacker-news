import { useSelector } from 'react-redux'
import { RootState } from '@/store/modules/rootreducer'
import { newsSelectors } from '@/store/modules/news'

export function useNews() {
  return {
    ...useSelector(({ news }: RootState) => ({
      feedItem: newsSelectors.useRangeFeedItem(news.feedItem)
    }))
  }
}

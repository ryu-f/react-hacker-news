import { useSelector } from 'react-redux'
import { State as NewsState } from '@/store/modules/news'
import { newsSelectors } from '@/store/modules/news'

export function useNews() {
  return {
    ...useSelector(({ news }: { news: NewsState }) => ({
      feedItem: newsSelectors.useExtractingFeedItem(news.feedItem)
    }))
  }
}

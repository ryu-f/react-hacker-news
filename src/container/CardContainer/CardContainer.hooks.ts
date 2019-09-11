import { useSelector } from 'react-redux'
import { State as NewsState } from '@/store/modules/domain/news'
import { newsSelectors } from '@/store/modules/domain/news'

export function useNews() {
  return {
    ...useSelector(({ news }: { news: NewsState }) => ({
      cards: newsSelectors.useExtractingFeedItem(news.feedItem)
    }))
  }
}

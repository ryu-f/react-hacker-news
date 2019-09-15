import { State as NewsState } from '@/store/modules/domain/news'
import { newsSelectors } from '@/store/modules/domain/news'
import { useSelector } from 'react-redux'

export function useNews() {
  return {
    ...useSelector(({ news }: { news: NewsState }) => ({
      cards: newsSelectors.useExtractingFeedItem(news.feedItem)
    }))
  }
}

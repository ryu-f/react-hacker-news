import { useSelector } from 'react-redux'
import { RootState } from '@/store/modules/rootreducer'

export function useNews() {
  return {
    ...useSelector(({ news }: RootState) => ({
      feedItem: news.feedItem
    }))
  }
}

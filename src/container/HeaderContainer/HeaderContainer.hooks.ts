import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { State as NewsState } from '@/store/modules/domain/news'

export function useNews() {
  const dispatch = useDispatch()

  return {
    ...useSelector(({ news }: { news: NewsState }) => ({
      types: news.types
    })),

    selectFeedType: useCallback(
      (selected: string) => {
        dispatch({ type: 'SELECT_FEED_TYPE', payload: selected })
      },
      [dispatch]
    )
  }
}

import { useDispatch, useSelector } from 'react-redux'

import { NewsState } from '@/store/modules/domain/news'
import { useCallback } from 'react'

export function useNews() {
  const dispatch = useDispatch()

  return {
    ...useSelector(({ news }: { news: NewsState }) => ({
      items: news.types
    })),

    itemOnClick: useCallback(
      (selected: string) => {
        dispatch({ type: 'SELECT_FEED_TYPE', payload: selected })
      },
      [dispatch]
    )
  }
}

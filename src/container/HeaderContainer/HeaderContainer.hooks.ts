import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/store/modules/rootreducer'

export function useNews() {
  const dispatch = useDispatch()

  return {
    ...useSelector(({ news }: RootState) => ({
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

import React, { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Header } from '@/componets/organisms/Header'
import { RootState } from '@/store/rootReducer'
import { newsOperations } from '@/store/features/domain/news'

export const HeaderContainer: React.FC = () => {
  const dispatch = useDispatch()
  const { types } = useSelector((state: RootState) => state.news)

  const onClick = useCallback(
    (selected: string) => {
      dispatch(newsOperations.selectFeedType(selected))
    },
    [dispatch]
  )

  return useMemo(() => {
    return <Header types={types} onClick={onClick} />
  }, [types, onClick])
}

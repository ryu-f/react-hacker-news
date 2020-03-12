import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { CardList } from '@/componets/organisms/CardList'
import { RootState } from '@/store/rootReducer'
import { newsOperations } from '@/store/features/domain/news'

export const CardListContainer: React.FC = () => {
  const dispatch = useDispatch()
  const { feedItem } = useSelector((state: RootState) => state.news, shallowEqual)

  useEffect(() => {
    dispatch(newsOperations.newsInitialize())
  }, [])

  return (
    <>
      <CardList feedItem={feedItem} />
    </>
  )
}

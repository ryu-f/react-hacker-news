import React, { useEffect } from 'react'

import FeedCardList from '@/componets/organisms/FeedCardList'
import { newsInitialize } from '@/store/features/domain/news/operations'
import { useDispatch } from 'react-redux'

export const List: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(newsInitialize())
  }, [])

  return (
    <div>
      <FeedCardList />
    </div>
  )
}

import React, { useEffect } from 'react'

import { FeedCardList } from '@/componets/organisms/FeedCardList'
import { newsOperations } from '@/store/features/domain/news'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'

export const List: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(newsOperations.newsInitialize())
  }, [])

  return (
    <PageWrapper>
      <FeedCardList />
    </PageWrapper>
  )
}

const PageWrapper = styled.div`
  width: 100%;
  padding: 80px 40px;
`

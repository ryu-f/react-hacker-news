import { CardListContainer } from '@/containers/CardListContainer'
import React from 'react'
import styled from 'styled-components'

export const List: React.FC = () => {
  return (
    <PageWrapper>
      <CardListContainer />
    </PageWrapper>
  )
}

const PageWrapper = styled.div`
  width: 100%;
  padding: 80px 40px;
`

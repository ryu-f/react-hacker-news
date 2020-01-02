import * as React from 'react'

import FeedCard from '@/componets/organisms/FeedCard'
import { RootState } from '@/store/rootReducer'
import { media } from '@/styles/Mixin'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

export const FeedCardList: React.FC = () => {
  const { feedItem } = useSelector((state: RootState) => state.news)

  return (
    <LayoutGrid>
      {feedItem.map((card, i) => (
        <LayoutItem key={`card-${i}`}>
          <FeedCard feed={card} />
        </LayoutItem>
      ))}
    </LayoutGrid>
  )
}

const LayoutGrid = styled.ul`
  display: grid;
  ${media.desktop`
    grid-template-columns: repeat(auto-fit, 300px);
    justify-content: center;
    padding: 80px 8vw;
    grid-gap: 20px;
  `}
`

const LayoutItem = styled.li``

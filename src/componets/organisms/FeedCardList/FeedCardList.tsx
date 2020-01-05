import * as React from 'react'

import { RootState } from '@/store/rootReducer'
import { media } from '@/styles/Mixin'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const LazyFeedCard = React.lazy(() => import('@/componets/organisms/FeedCard'))

export const FeedCardList: React.FC = () => {
  const { feedItem } = useSelector((state: RootState) => state.news)

  return (
    <LayoutGrid>
      <React.Suspense fallback={<p>loading...</p>}>
        {feedItem.map((card, i) => (
          <LayoutItem key={`card-${i}`}>
            <LazyFeedCard feed={card} />
          </LayoutItem>
        ))}
      </React.Suspense>
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

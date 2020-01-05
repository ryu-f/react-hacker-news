import * as React from 'react'

import { RootState } from '@/store/rootReducer'
import { media } from '@/styles/Mixin'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const LazyFeedCard = React.lazy(() => import('@/componets/organisms/FeedCard'))

export const FeedCardList: React.FC = () => {
  const { feedItem } = useSelector((state: RootState) => state.news)

  const Loading = () => (
    <LayoutLoading>
      <p>loading...</p>
    </LayoutLoading>
  )

  return (
    <LayoutGrid>
      <React.Suspense fallback={Loading}>
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

const LayoutLoading = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

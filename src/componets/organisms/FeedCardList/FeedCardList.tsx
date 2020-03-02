import React, { useMemo } from 'react'

import FeedCard from '@/componets/organisms/FeedCard'
import { FeedItem } from '@/types/domain/hn'
import { RootState } from '@/store/rootReducer'
import { media } from '@/styles/Mixin'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

type Props = {
  feedItem: FeedItem[]
}

const View: React.FC<Props> = ({ feedItem }) => (
  <LayoutGrid>
    {feedItem.map((card, i) => (
      <li key={`card-${i}`}>
        <FeedCard
          title={card.title}
          user={card.user}
          time={card.time_ago}
          comments={card.comments_count}
        />
      </li>
    ))}
  </LayoutGrid>
)

export const Container: React.FC = () => {
  const { feedItem } = useSelector((state: RootState) => state.news)

  return useMemo(() => {
    return <View feedItem={feedItem} />
  }, [feedItem])
}

const LayoutGrid = styled.ul`
  display: grid;
  ${media.desktop`
    grid-template-columns: repeat(auto-fit, 300px);
    justify-content: center;
    grid-gap: 20px;
  `}
`

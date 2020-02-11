import React, { useMemo } from 'react'

import FeedCard from '@/componets/organisms/FeedCard'
import { RootState } from '@/store/rootReducer'
import { media } from '@/styles/Mixin'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { FeedItem } from '@/types/domain/hn'
import { useTransition, animated } from 'react-spring'

type Props = {
  feedItem: FeedItem[]
}

const View: React.FC<Props> = ({ feedItem }) => {
  const transitios = useTransition(feedItem, item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 0 }
  })

  return (
    <LayoutGrid>
      {transitios.map(({ key, item }) => (
        <animated.li key={key}>
          <FeedCard
            title={item.title}
            user={item.user}
            time={item.time_ago}
            comments={item.comments_count}
          />
        </animated.li>
      ))}
    </LayoutGrid>
  )
}

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

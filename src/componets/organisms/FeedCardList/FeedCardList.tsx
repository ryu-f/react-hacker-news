import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { shallowEqual, useSelector } from 'react-redux'

import { FeedCard } from '@/componets/organisms/FeedCard'
import { FeedItem } from '@/types/domain/hn'
import React from 'react'
import { RootState } from '@/store/rootReducer'
import { media } from '@/styles/Mixin'
import styled from 'styled-components'

type Props = {
  feedItem: FeedItem[]
}

const View: React.FC<Props> = ({ feedItem }) => {
  return (
    <TransitionGroupGrid component="ul">
      {feedItem.map((card, i) => {
        const delay = i * 100

        return (
          <CSSTransition classNames="animation" key={card.id} timeout={1000 + delay}>
            <AnimationList style={{ transitionDelay: `${delay}ms` }}>
              <FeedCard
                title={card.title}
                user={card.user}
                time={card.time_ago}
                comments={card.comments_count}
              />
            </AnimationList>
          </CSSTransition>
        )
      })}
    </TransitionGroupGrid>
  )
}

export const FeedCardList: React.FC = () => {
  const { feedItem } = useSelector((state: RootState) => state.news, shallowEqual)

  return <View feedItem={feedItem} />
}

const TransitionGroupGrid = styled(TransitionGroup)`
  display: grid;
  ${media.desktop`
    grid-template-columns: repeat(auto-fit, 300px);
    justify-content: center;
    grid-gap: 20px;
  `}
`

const AnimationList = styled.li`
  display: block;

  &.animation-enter {
    opacity: 0;
    transform: translateY(20px);
  }

  &.animation-enter-active {
    opacity: 1;
    transition: opacity 1s, transform 1s;
    transform: translateY(0);
  }
`

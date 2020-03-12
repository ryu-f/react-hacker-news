import { CSSTransition, TransitionGroup } from 'react-transition-group'

import { Card } from '@/componets/organisms/Card'
import { FeedItem } from '@/types/domain/hn'
import React from 'react'
import { media } from '@/styles/Mixin'
import styled from 'styled-components'

type Props = {
  feedItem: FeedItem[]
}

export const CardList: React.FC<Props> = ({ feedItem }) => (
  <TransitionGroupGrid component="ul">
    {feedItem.map((card, i) => {
      const delay = i * 100

      return (
        <CSSTransition classNames="animation" key={card.id} timeout={1000 + delay}>
          <AnimationList style={{ transitionDelay: `${delay}ms` }}>
            <Card
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

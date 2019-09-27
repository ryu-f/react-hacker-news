import * as React from 'react'

import BasicText from '@/componets/atoms/BasicText'
import Card from '@/componets/organisms/Card'
import { FeedItem } from '@/types/domain/hn'
import { media } from '@/styles/Mixin'
import styled from 'styled-components'

type Props = {
  cards: FeedItem[]
}

export const CardList: React.FC<Props> = ({ cards }) => {
  if (!cards.length) return null

  return (
    <LayoutGrid>
      {cards.map((card, i) => (
        <LayoutItem>
          <Card key={`card-${i}`}>
            {[
              <PrimaryArea>{card.title}</PrimaryArea>,

              card.user ? (
                <HeadLine size={'BASE'} color={'GLAY'}>
                  by {card.user}
                </HeadLine>
              ) : null,

              card.url ? <SecondaryArea>{card.url}</SecondaryArea> : null
            ]}
          </Card>
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

const PrimaryArea = styled.div`
  width: 100%;
  line-height: 1.2;
`

const HeadLine = styled(BasicText)`
  margin-top: 20px;
`
const SecondaryArea = styled.div``

import * as React from 'react'
import styled from 'styled-components'
import Card from '@/componets/organisms/Card'
import BasicText from '@/componets/atoms/BasicText'
import { NEWS_TYPES } from '@/store/modules/domain/news'

type Props = {
  cards: NEWS_TYPES.FeedItem[]
}

export const CardList: React.FC<Props> = ({ cards }) => {
  if (!cards.length) return null

  return (
    <LayoutFlex>
      {cards.map((card, i) => (
        <LayoutItem>
          <Card>
            {[
              <PrimaryArea key={`card-${i}`}>{card.title}</PrimaryArea>,

              card.user ? (
                <HeadLine size={'BASE'} color={'BLACK'}>
                  by {card.user}
                </HeadLine>
              ) : null,

              <SubTitle size={'BASE'} color={'BLACK'}>
                {card.type}
              </SubTitle>,

              card.url ? <SecondaryArea>{card.url}</SecondaryArea> : null
            ]}
          </Card>
        </LayoutItem>
      ))}
    </LayoutFlex>
  )
}

const LayoutFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const LayoutItem = styled.div`
  width: calc(100 / 3%);
`

const PrimaryArea = styled.div`
  width: 100%;
`

const HeadLine = styled(BasicText)`
  margin-top: 20px;
`
const SubTitle = styled(BasicText)`
  display: block;
  margin-top: 10px;
`

const SecondaryArea = styled.div``

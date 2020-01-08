import * as React from 'react'

import { ClockText } from '@/componets/molecules/ClockText'
import { FeedItem } from '@/types/domain/hn'
import { PersonText } from '@/componets/molecules/PersonText'
import styled from 'styled-components'

type Props = {
  feed: FeedItem
}

export const FeedCard: React.FC<Props> = ({ feed }) => (
  <Wrapper>
    <PrimaryArea>{feed.title}</PrimaryArea>
    {feed.user ? (
      <LayoutPerson>
        <PersonText text={{ to: `/user/${feed.user}`, size: 'BASE', textColor: 'GLAY' }}>
          by {feed.user}
        </PersonText>
      </LayoutPerson>
    ) : null}
    <FootArea>
      <ClockText text={{ to: '/dummy', size: 'SMALL', textColor: 'GLAY' }}>
        by {feed.time_ago}
      </ClockText>
    </FootArea>
  </Wrapper>
)

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1rem;
  overflow: hidden;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
`

const PrimaryArea = styled.div`
  width: 100%;
  line-height: 1.2;
`

const LayoutPerson = styled.div`
  margin-top: 5px;
`

const FootArea = styled.div`
  display: flex;
  margin-top: 10px;
`

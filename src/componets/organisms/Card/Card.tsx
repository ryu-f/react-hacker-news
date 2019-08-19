import * as React from 'react'
import styled from 'styled-components'
import BasicText from '@/componets/atoms/BasicText'
import { NEWS_TYPES } from '@/store/modules/news'

type Props = {
  feedItem: NEWS_TYPES.FeedItem[]
}

export const Card: React.FC<Props> = ({ feedItem }) => {
  if (!feedItem.length) return null

  return (
    <>
      {feedItem.map((el, i) => (
        <Wrapper key={`card-${i}`}>
          <PrimaryArea>
            {el.title && (
              <HeadLine size={'LARGE'} color={'BLACK'}>
                {el.title}
              </HeadLine>
            )}

            {el.user && (
              <SubTitle as="a" size={'BASE'} color={'GLAY'}>
                {el.user}
              </SubTitle>
            )}
          </PrimaryArea>
          <SecondaryArea>{el.url}</SecondaryArea>
        </Wrapper>
      ))}
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  background-color: #fff;
  height: 100%;
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
`

const PrimaryArea = styled.div`
  width: 100%;
  padding: 1rem;
`

const HeadLine = styled(BasicText)`
  margin-top: 20px;
`
const SubTitle = styled(BasicText)`
  display: block;
  margin-top: 10px;
`

const SecondaryArea = styled.div`
  padding: 1rem;
`

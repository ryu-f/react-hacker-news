import * as React from 'react'

import { BaloonText, BasicText, LinkText } from '@/componets/atoms/Text'

import { FeedItem } from '@/types/domain/hn'
import { SvgIcons } from '@/componets/atoms/SvgIcons'
import styled from 'styled-components'

type Props = {
  feed: FeedItem
}

export const FeedCard: React.FC<Props> = ({ feed }) => (
  <Wrapper>
    <TitleText size="BASE" textcolor="BLACK">
      {feed.title}
    </TitleText>
    {feed.user ? (
      <LayoutPerson>
        <LayoutPersonIcon>
          <SvgIcons id={'person'} />
        </LayoutPersonIcon>
        <BasicText size="SMALL" textcolor="BLACK">
          by&nbsp;
        </BasicText>
        <UserText to={`/user/${feed.user}`} size="SMALL" textcolor="GLAY">
          {feed.user}
        </UserText>
      </LayoutPerson>
    ) : null}
    <FootArea>
      <LayoutTime>
        <LayoutPersonIcon>
          <SvgIcons id={'clock'} />
        </LayoutPersonIcon>
        <BasicText size="SMALL" textcolor="GLAY">
          {feed.time_ago}
        </BasicText>
      </LayoutTime>
      {feed.comments_count > 0 && (
        <CommentsCount size="SMALL" textcolor="BLACK">
          {feed.comments_count}
        </CommentsCount>
      )}
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

const TitleText = styled(BasicText)`
  width: 100%;
  line-height: 1.2;
`

const LayoutPerson = styled.div`
  display: flex;
  margin-top: 5px;
`

const LayoutPersonIcon = styled.div`
  position: relative;
  width: 20px;
  height: 22px;
  margin-right: 5px;
`

const UserText = styled(LinkText)`
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`

const FootArea = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 10px;
`

const LayoutTime = styled.div`
  display: flex;
`

const CommentsCount = styled(BaloonText)`
  line-height: 1;
`

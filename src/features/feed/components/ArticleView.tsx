import React from 'react'
import styled from 'styled-components'
import { getFeedState } from '../interface'
import Card from '@/componets/organisms/Card'

const ArticleView: React.FC = () => {
  const { feedItems } = getFeedState.useState()

  return (
    <List>
      {feedItems.map((el, i) => (
        <ListItem key={i}>
          <Card headLine={el.title} subTitle={el.user || 'not user'} buttonText={'MORE'} />
        </ListItem>
      ))}
    </List>
  )
}

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 50px;
`

const ListItem = styled.li`
  width: ${100 / 3.2}%;

  &:nth-child(n + 4) {
    margin-top: 30px;
  }
`

export default ArticleView

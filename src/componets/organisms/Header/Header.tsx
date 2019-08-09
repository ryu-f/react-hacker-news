import React from 'react'
import styled from 'styled-components'
import BasicText from '@/componets/atoms/BasicText'
import { State as NewsState } from '@/store/modules/news'

type Props = Pick<NewsState, 'types'>

export const Header: React.FC<Props> = ({ types }) => (
  <Wrapper>
    <List>
      {types.map((el, i) => (
        <Item key={i}>
          <BasicText size={'BASE'} color={'WHITE'}>
            {el}
          </BasicText>
        </Item>
      ))}
    </List>
  </Wrapper>
)

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  background-color: #abe9cd;
  background-image: linear-gradient(315deg, #abe9cd 0%, #3eadcf 74%);
`

const List = styled.ul`
  min-width: 550px;
  display: flex;
  justify-content: space-around;
`

const Item = styled.li`
  cursor: pointer;
`

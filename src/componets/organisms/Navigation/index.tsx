import React from 'react'
import styled from 'styled-components'
import BasicText from '@/componets/atoms/BasicText'

type Props = {
  navItem: { text: string; path: string; type: string }[]
  onClick: (event: React.MouseEvent<HTMLElement>, index: number) => void
}

const Navigation: React.FC<Props> = ({ navItem, onClick }) => (
  <Wrapper>
    <List>
      {navItem.map((el, i) => (
        <Item key={i} onClick={e => onClick(e, i)}>
          <BasicText size={'BASE'} color={'WHITE'}>
            {el.text}
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

export default Navigation

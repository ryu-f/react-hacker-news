import React from 'react'
import styled from 'styled-components'
import BasicText from '@/componets/atoms/BasicText'
import { Link } from 'typeless-router'

type Props = {
  navItem: { text: string; path: string }[]
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
}

const Navigation: React.FC<Props> = ({ navItem, onClick }) => (
  <Wrapper>
    <List>
      {navItem.map((el, i) => (
        <li key={i} onClick={onClick}>
          <Link href={el.path}>
            <BasicText size={'BASE'} color={'WHITE'}>
              {el.text}
            </BasicText>
          </Link>
        </li>
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

export default Navigation

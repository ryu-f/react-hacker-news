import React from 'react'
import styled from 'styled-components'
import BasicText from '@/componets/atoms/BasicText'
import { State as NewsState } from '@/store/modules/domain/news'
import { useStyledMediaQuery } from '@/hooks/useStyledMediaQuery'

type Props = {
  items: Pick<NewsState, 'types'>['types']
  itemOnClick: (selected: string) => void
}

export const Header: React.FC<Props> = ({ items, itemOnClick }) => (
  <Wrapper>
    <List>
      {items.map((item, i) => (
        <Item key={`item-${i}`} onClick={() => itemOnClick(item)}>
          <BasicText size={'BASE'} color={'WHITE'}>
            {item}
          </BasicText>
        </Item>
      ))}
    </List>
  </Wrapper>
)

const media = useStyledMediaQuery()

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #abe9cd;
  background-image: linear-gradient(315deg, #abe9cd 0%, #3eadcf 74%);
  ${media.desktop`
    height: 40px;
  `}
`

const List = styled.ul`
  min-width: 550px;
  display: flex;
  justify-content: space-around;
`

const Item = styled.li`
  cursor: pointer;
`

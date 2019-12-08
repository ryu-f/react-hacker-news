import BasicText from '@/componets/atoms/BasicText'
import { NewsState } from '@/store/modules/domain/news'
import React from 'react'
import { media } from '@/styles/Mixin'
import styled from 'styled-components'

type Props = {
  items: Pick<NewsState, 'types'>['types']
  itemOnClick: (selected: string) => void
}

export const Header: React.FC<Props> = ({ items, itemOnClick }) => (
  <LayoutWrapper>
    <LayoutList>
      {items.map((item, i) => (
        <LayoutItem key={`item-${i}`} onClick={() => itemOnClick(item)}>
          <BasicText size={'BASE'} color={'WHITE'}>
            {item}
          </BasicText>
        </LayoutItem>
      ))}
    </LayoutList>
  </LayoutWrapper>
)

const LayoutWrapper = styled.nav`
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

const LayoutList = styled.ul`
  display: flex;
  justify-content: space-around;
  min-width: 550px;
`

const LayoutItem = styled.li`
  font-family: 'Oswald', sans-serif;
  cursor: pointer;
`

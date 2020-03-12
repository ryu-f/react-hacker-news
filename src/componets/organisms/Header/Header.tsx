import { BasicText } from '@/componets/atoms/Text'
import { Feeds } from '@/types/domain/hn'
import React from 'react'
import { media } from '@/styles/Mixin'
import styled from 'styled-components'

type Props = {
  types: Feeds[]
  onClick: (selected: string) => void
}

export const Header: React.FC<Props> = ({ types, onClick }) => (
  <LayoutWrapper>
    <LayoutList>
      {types.map((type, i) => (
        <LayoutItem key={`item-${i}`} onClick={() => onClick(type)}>
          <BasicText size={'BASE'} textcolor={'WHITE'}>
            {type}
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

import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '@/store/rootReducer'
import { Text } from '@/componets/atoms/Text'
import { media } from '@/styles/Mixin'
import styled from 'styled-components'

export const Header: React.FC = () => {
  const dispatch = useDispatch()
  const { types } = useSelector((state: RootState) => state.news)

  const itemOnClick = useCallback(
    (selected: string) => {
      dispatch({ type: 'news/selectFeedType', payload: selected })
    },
    [dispatch]
  )

  return (
    <LayoutWrapper>
      <LayoutList>
        {types.map((type, i) => (
          <LayoutItem key={`item-${i}`} onClick={() => itemOnClick(type)}>
            <Text size={'BASE'} textColor={'WHITE'}>
              {type}
            </Text>
          </LayoutItem>
        ))}
      </LayoutList>
    </LayoutWrapper>
  )
}

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

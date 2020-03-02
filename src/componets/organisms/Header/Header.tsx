import React, { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { BasicText } from '@/componets/atoms/Text'
import { Feeds } from '@/types/domain/hn'
import { RootState } from '@/store/rootReducer'
import { media } from '@/styles/Mixin'
import { newsOperations } from '@/store/features/domain/news'
import styled from 'styled-components'

type Props = {
  types: Feeds[]
  onClick: (selected: string) => void
}

const View: React.FC<Props> = ({ types, onClick }) => (
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

export const Container: React.FC = () => {
  const dispatch = useDispatch()
  const { types } = useSelector((state: RootState) => state.news)

  const onClick = useCallback(
    (selected: string) => {
      dispatch(newsOperations.selectFeedType(selected))
    },
    [dispatch]
  )

  return useMemo(() => {
    return <View types={types} onClick={onClick} />
  }, [types, onClick])
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

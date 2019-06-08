import React from 'react'
import styled from 'styled-components'
import BasicText from '@/componets/atoms/BasicText'

type Props = {
  listItem: { text: string; link: string }[]
}

const Navigation: React.FC<Props> = ({ listItem }) => (
  <Wrapper>
    {listItem.map((el, i) => (
      <BasicText size={'BASE'} color={'WHITE'} key={i}>
        {el.text}
      </BasicText>
    ))}
  </Wrapper>
)

const Wrapper = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 40px;
  background-color: #abe9cd;
  background-image: linear-gradient(315deg, #abe9cd 0%, #3eadcf 74%);
`

export default Navigation

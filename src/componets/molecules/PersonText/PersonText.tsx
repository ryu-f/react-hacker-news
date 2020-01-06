import * as React from 'react'

import { ComponentProps, Text } from '@/componets/atoms/Text'

import { SvgIcons } from '@/componets/atoms/SvgIcons'
import styled from 'styled-components'

type Props = {
  text: ComponentProps
}

export const PersonText: React.FC<Props> = props => {
  const { text, children } = props

  return (
    <Wrapper>
      <LayoutIcon>
        <SvgIcons id={'person'} />
      </LayoutIcon>

      <LayoutText>
        <Text size={text.size} textColor={text.textColor} {...text}>
          {children}
        </Text>
      </LayoutText>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
`
const LayoutIcon = styled.div`
  position: relative;
  width: 20px;
  height: 22px;
`

const LayoutText = styled.div`
  margin-left: 5px;
`

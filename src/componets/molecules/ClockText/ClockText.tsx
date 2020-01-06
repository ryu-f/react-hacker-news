import * as React from 'react'

import { ComponentProps, Text } from '@/componets/atoms/Text'

import { SvgIcons } from '@/componets/atoms/SvgIcons'
import styled from 'styled-components'

type Props = {
  text: ComponentProps
}

export const ClockText: React.FC<Props> = props => {
  const { text, children } = props

  return (
    <Wrapper>
      <LayoutIcon>
        <SvgIcons id={'clock'} />
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
  align-items: center;
`
const LayoutIcon = styled.div`
  position: relative;
  width: 18px;
  height: 20px;
`

const LayoutText = styled.div`
  margin-left: 5px;
`

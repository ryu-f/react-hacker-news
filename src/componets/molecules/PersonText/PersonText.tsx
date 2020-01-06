import * as React from 'react'

import { LinkText, LinkTextProps } from '@/componets/atoms/Text'

import { SvgIcons } from '@/componets/atoms/SvgIcons'
import styled from 'styled-components'

type Props = {
  text: LinkTextProps
}

export const PersonText: React.FC<Props> = props => {
  const { text, children } = props

  return (
    <Wrapper>
      <LayoutIcon>
        <SvgIcons id={'person'} />
      </LayoutIcon>

      <LayoutText>
        <LinkText size={text.size} textColor={text.textColor} {...text}>
          {children}
        </LinkText>
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

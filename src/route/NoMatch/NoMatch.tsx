import * as React from 'react'

import { BasicText } from '@/componets/atoms/Text'
import styled from 'styled-components'

export const NoMatch: React.FC = () => (
  <PageWrapper>
    <BasicText size="BASE" textcolor="BLACK">
      Not Found
    </BasicText>
  </PageWrapper>
)

const PageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

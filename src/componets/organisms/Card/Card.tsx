import * as React from 'react'

import styled from 'styled-components'

export const Card: React.FC = ({ children }) => <Wrapper>{children}</Wrapper>

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  background-color: #fff;
  height: 100%;
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
`

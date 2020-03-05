import * as React from 'react'

import styled from 'styled-components'

export const Loading: React.FC = () => <View />

const View = styled.span`
  width: 1em;
  height: 1em;
  overflow: hidden;
  font-size: 90px;
  color: #000;
  text-indent: 100%;
  border-radius: 50%;
  transform: translateZ(0);
`

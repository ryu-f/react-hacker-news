import React from 'react'
import { GlobalStyle } from './styles'
import BasicText from '@/componets/atoms/BasicText'

const App: React.FC = () => (
  <React.Fragment>
    <GlobalStyle />
    <BasicText size={'SMALL'}>hoge</BasicText>
  </React.Fragment>
)

export default App
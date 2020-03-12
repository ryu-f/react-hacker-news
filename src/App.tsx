import * as React from 'react'

import { GlobalStyle } from './styles'
import { HeaderContainer } from '@/containers/HeaderContainer'
import { Helmet } from 'react-helmet'
import { Routes } from './Routes'
import styled from 'styled-components'

export const App: React.FC = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>React Hacker News</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css?family=Oswald|Roboto&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      <HeaderContainer />
      <Main>
        <Routes />
      </Main>
    </>
  )
}

const Main = styled.main``

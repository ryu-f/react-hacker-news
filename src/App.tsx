import * as React from 'react'

import { Route, Switch } from 'react-router-dom'

import { GlobalStyle } from './styles'
import Header from '@/componets/organisms/Header'
import { Helmet } from 'react-helmet'
import { List } from '@/route/List'
import { NoMatch } from '@/route/NoMatch'
import { User } from '@/route/User'

const App: React.FC = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>React Hacker News</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css?family=Oswald+Roboto&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      <Header />
      <main>
        <Switch>
          <Route path="/" component={List} exact />
          <Route path="/user/:name" component={User} exact />
          <Route path="*" component={NoMatch} exact />
        </Switch>
      </main>
    </>
  )
}

export default App

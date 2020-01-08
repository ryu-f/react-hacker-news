import * as React from 'react'

import { Route, Switch } from 'react-router-dom'

import { GlobalStyle } from './styles'
import Header from '@/componets/organisms/Header'
import { List } from '@/route/List'
import { NoMatch } from '@/route/NoMatch'

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <Switch>
          <Route path="/" component={List} exact />
          <Route path="*" component={NoMatch} exact />
        </Switch>
      </main>
    </>
  )
}

export default App

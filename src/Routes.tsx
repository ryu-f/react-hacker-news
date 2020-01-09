import * as React from 'react'

import { Route, Switch } from 'react-router-dom'

import { List } from '@/route/List'
import { NoMatch } from '@/route/NoMatch'
import { User } from '@/route/User'

export const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={List} exact />
    <Route path="/user/:name" component={User} exact />
    <Route path="*" component={NoMatch} exact />
  </Switch>
)

import * as React from 'react'

import store, { history } from './store/configureStore'

import { App } from './App'
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader/root'

const MOUNT_NODE = document.getElementById('root')

if (!MOUNT_NODE) throw new Error('<div id="root" /> not found')

if (process.env.DEBUG_ENV === 'enable') {
  import('why-did-you-update').then(({ whyDidYouUpdate }) => {
    whyDidYouUpdate(React)
  })
}

const Root = hot(() => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
))

ReactDOM.render(<Root />, MOUNT_NODE)

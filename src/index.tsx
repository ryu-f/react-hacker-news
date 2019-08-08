import * as React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { hot } from 'react-hot-loader/root'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

const MOUNT_NODE = document.getElementById('root')
const store = configureStore()

if (!MOUNT_NODE) throw new Error('<div id="root" /> not found')

const Root = hot(() => (
  <Provider store={store}>
    <App />
  </Provider>
))

ReactDOM.render(<Root />, MOUNT_NODE)

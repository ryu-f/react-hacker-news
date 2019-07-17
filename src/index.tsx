import * as React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { hot } from 'react-hot-loader/root'

const MOUNT_NODE = document.getElementById('root')

if (!MOUNT_NODE) {
  throw new Error('<div id="root" /> not found')
}

const Root = hot(() => <App />)

ReactDOM.render(<Root />, MOUNT_NODE)

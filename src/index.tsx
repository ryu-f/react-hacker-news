import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { initialize } from 'typeless'
import App from './App'

const { TypelessProvider } = initialize()

ReactDOM.render(
  <App />
,
document.getElementById('root'))
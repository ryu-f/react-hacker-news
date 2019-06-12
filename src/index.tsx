import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Hmr, startHmr, DefaultTypelessProvider } from 'typeless'

const MOUNT_NODE = document.getElementById('root')

if (!MOUNT_NODE) {
  throw new Error('<div id="root" /> not found')
}

const render = () => {
  ReactDOM.unmountComponentAtNode(MOUNT_NODE)
  ReactDOM.render(
    <Hmr>
      <DefaultTypelessProvider>
        <App />
      </DefaultTypelessProvider>
    </Hmr>,
    MOUNT_NODE
  )
}

if (module.hot) {
  module.hot.accept('./App', () => {
    startHmr()
    render()
  })
}
render()

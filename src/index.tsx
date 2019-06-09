import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { RouterProvider } from 'react-router5'
import { configureRouter } from '@/routes/configureRouter'
import App from './App'

const router = configureRouter()

router.start(() =>
  ReactDOM.render(
    <RouterProvider router={router}>
      <App />
    </RouterProvider>,
  document.getElementById('root'))
)


import React from 'react'
import { hot } from 'react-hot-loader/root'
import { GlobalStyle } from './styles'
import Navigation from '@/componets/organisms/Navigation'

const listItem = [
  {
    text: 'NEW',
    link: '/new/'
  },
  {
    text: 'ASK',
    link: '/ask/'
  },
  {
    text: 'JOB',
    link: '/job/'
  }
]

const App: React.FC = () => (
  <React.Fragment>
    <GlobalStyle />
    <Navigation listItem={listItem} />
  </React.Fragment>
)

export default hot(App)

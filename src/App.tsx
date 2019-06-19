import React from 'react'
import styled from 'styled-components'
import { GlobalStyle } from './styles'
import { useRouter } from '@/features/router'
import { useFeedModule } from '@/features/feed/module'

const NavigationView = React.lazy(() => import('@/features/feed/components/NavigationView'))
const ArticleView = React.lazy(() => import('@/features/feed/components/ArticleView'))

const App: React.FC = () => {
  useRouter()
  useFeedModule()

  return (
    <>
      <GlobalStyle />
      <React.Suspense fallback={<span></span>}>
        <NavigationView />
      </React.Suspense>
      <ArticleWrapper>
        <React.Suspense fallback={<span></span>}>
          <ArticleView />
        </React.Suspense>
      </ArticleWrapper>
    </>
  )
}

const ArticleWrapper = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
`

export default App

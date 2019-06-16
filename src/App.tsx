import React from 'react'
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
        <ArticleView />
      </React.Suspense>
    </>
  )
}

export default App

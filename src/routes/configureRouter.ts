import createRouter, { Router } from 'router5'
import browserPlugin from 'router5-plugin-browser'
import routes from './routes'

export function configureRouter(): Router {
  const router = createRouter(routes)
  router.usePlugin(browserPlugin({useHash: false}))

  return router
}
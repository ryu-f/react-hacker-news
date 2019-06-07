import { createActions } from 'typeless'

export const MODULE = 'article'

export const articleActions = createActions(MODULE, {
  loadArticle: null
})

import React from 'react'
import { getFeedState } from '../interface'

const ArticleView: React.FC = () => {
  const { feedItems } = getFeedState.useState()
  console.log(feedItems)
  return <div></div>
}

export default ArticleView

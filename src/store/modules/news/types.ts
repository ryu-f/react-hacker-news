export const GET_FEED_ITEM = 'GET_FEED_ITEM' as const

export type FeedItem = {
  id: number
  title: string
  points?: number | null
  user?: string | null
  time: number
  time_ago: string
  comments_count: number
  type: string
  url?: string
  domain?: string
}

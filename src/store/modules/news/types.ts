export const GET_FEED_ITEM = 'GET_FEED_ITEM' as const
export const SELECT_FEED_TYPE = 'SELECT_FEED_TYPE' as const
export const SETTING_FEED_TYPE = 'SETTING_FEED_TYPE' as const

/**
 * There are five item feeds.
 */
export type Feeds = 'news' | 'newest' | 'ask' | 'show' | 'jobs'

/**
 * Each item feed returns an array of `FeedItem`.
 */
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

/**
 * Feeds provide the top level view of an item, but other details like comment threads are available at the individual item level.
 */
export type Item = {
  id: number
  title: string
  points: number | null
  user: string | null
  time: number
  time_ago: string
  content: string
  deleted?: boolean
  dead?: boolean
  type: string
  url?: string
  domain?: string
  comments: Item[]
  level: number
  comments_count: number
}

/**
 * Users are retrieved by username.
 */
export type User = {
  about?: string
  created_time: number
  created: string
  id: string
  karma: number
}

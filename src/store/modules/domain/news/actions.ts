import * as TYPES from './types'
import { State } from './reducer'

type GetFeedItemAction = {
  payload: State['feedItem']
}

export const getFeedItem = (items: GetFeedItemAction['payload']) => ({
  type: TYPES.GET_FEED_ITEM,
  payload: items
})

type SelectFeedTypeAction = {
  payload: State['selectedType']
}

export const selectFeedType = (selected: SelectFeedTypeAction['payload']) => ({
  type: TYPES.SELECT_FEED_TYPE,
  payload: selected
})

type SettingFeedTypeAction = {
  payload: State['selectedType']
}

export const settingFeedType = (selected: SettingFeedTypeAction['payload']) => ({
  type: TYPES.SETTING_FEED_TYPE,
  payload: selected
})

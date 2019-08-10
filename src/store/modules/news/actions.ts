import * as types from './types'
import { State } from './reducer'

type GetFeedItemAction = {
  payload: State['feedItem']
}

export const getFeedItem = (items: GetFeedItemAction['payload']) => ({
  type: types.GET_FEED_ITEM,
  payload: items
})

type SelectFeedTypeAction = {
  payload: State['selectedType']
}

export const selectFeedType = (selected: SelectFeedTypeAction['payload']) => ({
  type: types.SELECT_FEED_TYPE,
  payload: selected
})

type SettingFeedTypeAction = {
  payload: State['selectedType']
}

export const settingFeedType = (selected: SettingFeedTypeAction['payload']) => ({
  type: types.SETTING_FEED_TYPE,
  payload: selected
})

import * as types from './types'
import { State } from './reducer'

type GetFeedItemArgs = Pick<State, 'feedItem'>['feedItem']

export const getFeedItem = (items: GetFeedItemArgs) => ({
  type: types.GET_FEED_ITEM,
  payload: items
})

type SelectFeedTypeArgs = Pick<State, 'selectedType'>['selectedType']

export const selectFeedType = (selected: SelectFeedTypeArgs) => ({
  type: types.SELECT_FEED_TYPE,
  payload: selected
})

type SettingFeedTypeArgs = Pick<State, 'selectedType'>['selectedType']

export const settingFeedType = (selected: SettingFeedTypeArgs) => ({
  type: types.SETTING_FEED_TYPE,
  payload: selected
})

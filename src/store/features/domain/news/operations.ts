import { AppThunk } from '@/store/configureStore'
import getFeed from '@/services/hn/getFeed'
import { newsActions } from './slice'
import { batch } from 'react-redux'

/**
 * get api response & diapatch
 */
const fetchFeedItem = (): AppThunk => async (dispatch, getState) => {
  const { selectedType, paging } = getState().news

  try {
    const response = await getFeed({ type: selectedType, paging })
    dispatch(newsActions.getFeedItem(response))
  } catch (error) {
    console.log(error)
  }
}

/**
 * check location pathname
 */
const searchPageParam = (types: string[]) => {
  const pathname = window.location.pathname
  const target = pathname.split('/')[1]
  const isExist = types.some((type: string) => type === target)
  return isExist ? target : null
}

export const selectFeedType = (type: string): AppThunk => dispatch => {
  batch(() => {
    dispatch(newsActions.selectFeedType(type))
    dispatch(fetchFeedItem())
  })
}

/**
 * initialize
 */
export const newsInitialize = (): AppThunk => (dispatch, getState) => {
  const { types } = getState().news
  const parameter = searchPageParam(types)
  if (parameter) dispatch(newsActions.selectFeedType(parameter))
  dispatch(fetchFeedItem())
}

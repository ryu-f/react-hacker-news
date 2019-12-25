import { call, fork, put, select, take, takeEvery } from 'redux-saga/effects'
import { getFeedItem, selectFeedType } from '@/store/features/domain/news/slice'

import getFeed from '@/services/hn/getFeed'
import { getNews } from '@/store/features/domain/news/selector'

/**
 * fetch api
 */
function* fetchFeedItemSaga() {
  const state = getNews(yield select())
  const { selectedType, paging } = state
  const response = yield call(getFeed, { type: selectedType, paging })
  return response
}

/**
 * get api response & diapatch
 */
function* getFeedItemSaga() {
  const feedItem = yield call(fetchFeedItemSaga)
  const response = yield feedItem.json()
  yield put(getFeedItem(response))
}

function* selectFeedTypeSaga(action: any) {
  yield put(selectFeedType(action.payload))
  yield fork(getFeedItemSaga)
}

/**
 * whether the pathname matches the state
 */
function* searchPageParamSaga() {
  const pathname = window.location.pathname
  const state = getNews(yield select())
  const { types } = state
  const target = pathname.split('/')[1]
  const isExist = types.some(type => type === target)
  return isExist ? target : null
}

/**
 * check location pathname
 */
function* launchProcessSaga() {
  const isPageParam = yield call(searchPageParamSaga)
  if (isPageParam) return yield put(selectFeedType(isPageParam))
  yield fork(getFeedItemSaga)
}

/**
 * init & takeEvery
 */
export default function*() {
  yield takeEvery('news/selectFeedType', selectFeedTypeSaga)
  while (yield take('INIT')) {
    yield fork(launchProcessSaga)
  }
}

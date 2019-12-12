import { call, fork, put, select, take, takeEvery } from 'redux-saga/effects'
import { getFeedItem, selectFeedType } from '@/store/features/domain/news/slice'

import getFeed from '@/services/hn/getFeed'
import { getNews } from '@/store/features/domain/news/selector'

function* fetchFeedItemSaga() {
  const state = getNews(yield select())
  const { selectedType, paging } = state
  return yield call(getFeed, { type: selectedType, paging })
}

function* selectFeedTypeSaga(action: any) {
  yield put(selectFeedType(action.payload))
  yield fork(getFeedItemSaga)
}

function* getFeedItemSaga() {
  const feedItem = yield call(fetchFeedItemSaga)
  yield put(getFeedItem(feedItem))
}

function* searchPageParamSaga() {
  const pathname = window.location.pathname
  const state = getNews(yield select())
  const { types } = state
  const target = pathname.split('/')[1]
  const isExist = types.some(type => type === target)
  return isExist ? target : null
}

function* launchProcessSaga() {
  const isPageParam = yield call(searchPageParamSaga)
  if (isPageParam) return yield put(selectFeedType(isPageParam))
  yield fork(getFeedItemSaga)
}

export default function*() {
  yield takeEvery('news/selectFeedType', selectFeedTypeSaga)
  while (yield take('INIT')) {
    yield fork(launchProcessSaga)
  }
}

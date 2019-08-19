import { put, call, select, take, fork, takeEvery } from 'redux-saga/effects'
import { State as NewsState, newsSelectors, newsActions, NEWS_TYPES } from '@/store/modules/news'
import getFeed from '@/services/hn/getFeed'

type selectFeedTypeParam = ReturnType<typeof newsActions.selectFeedType>

function* fetchFeedItem() {
  const state: NewsState = yield select(newsSelectors.getNews)
  const { selectedType, paging } = state
  return yield call(getFeed, { type: selectedType, paging })
}

function* selectFeedType(action: selectFeedTypeParam) {
  yield put(newsActions.settingFeedType(action.payload))
  yield fork(getFeedItem)
}

function* getFeedItem() {
  const feedItem = yield call(fetchFeedItem)
  yield put(newsActions.getFeedItem(feedItem))
}

function* searchPageParam() {
  const pathname = window.location.pathname
  const state: NewsState = yield select(newsSelectors.getNews)
  const { types } = state
  const target = pathname.split('/')[1]
  const isExist = types.some(type => type === target)
  return isExist ? target : null
}

function* launchProcess() {
  const isPageParam: string | null = yield call(searchPageParam)
  if (isPageParam) return yield put(newsActions.selectFeedType(isPageParam))
  yield fork(getFeedItem)
}

export default function* initSaga() {
  yield takeEvery(NEWS_TYPES.SELECT_FEED_TYPE, selectFeedType)
  while (yield take('INIT')) {
    yield fork(launchProcess)
  }
}

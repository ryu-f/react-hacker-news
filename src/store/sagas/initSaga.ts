import { put, call, select, take, fork, Effect, takeEvery } from 'redux-saga/effects'
import { State as NewsState, newsSelectors, newsActions } from '@/store/modules/news'
import getFeed from '@/services/hn/getFeed'

function* fetchFeedItem(): Iterable<Effect> {
  const state: NewsState = yield select(newsSelectors.getNews)
  const { selectedType, paging } = state
  return yield call(getFeed, { type: selectedType, paging })
}

// TODO: action type
function* selectFeedType(action: any): Iterable<Effect> {
  yield put(newsActions.settingFeedType(action.payload))
  yield fork(getFeedItem)
}

function* getFeedItem(): Iterable<Effect> {
  const feedItem = yield call(fetchFeedItem)
  yield put(newsActions.getFeedItem(feedItem))
}

function* searchPageParam(): Iterable<Effect> {
  const pathname = window.location.pathname
  const state: NewsState = yield select(newsSelectors.getNews)
  const { types } = state
  const target = pathname.split('/')[1]
  const isExist = types.some(type => type === target)
  // TODO: return fix
  return isExist ? target : null
}

function* launchProcess(): Iterable<Effect> {
  const isPageParam = yield call(searchPageParam)
  if (isPageParam) return yield put({ type: 'SELECT_FEED_TYPE', payload: isPageParam })
  yield fork(getFeedItem)
}

export default function* initSaga() {
  yield takeEvery('SELECT_FEED_TYPE', selectFeedType)
  while (yield take('INIT')) {
    yield fork(launchProcess)
  }
}

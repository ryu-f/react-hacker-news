import { put, call, select, take, fork, Effect } from 'redux-saga/effects'
import { State as NewsState, newsSelectors, newsActions } from '@/store/modules/news'
import getFeed from '@/services/hn/getFeed'

function* fetchFeedItem(): Iterable<Effect> {
  const state: NewsState = yield select(newsSelectors.getNews)
  const { selectedType, paging } = state
  return yield call(getFeed, { type: selectedType, paging })
}
function* launchProcess(): Iterable<Effect> {
  const response = yield call(fetchFeedItem)
  yield put(newsActions.getFeedItem(response))
}

export default function* initSaga() {
  while (yield take('INIT')) {
    yield fork(launchProcess)
  }
}

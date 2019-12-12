import { all } from 'redux-saga/effects'
import newsSaga from './features/domain/news/saga'

export default function* rootSaga() {
  yield all([newsSaga()])
}

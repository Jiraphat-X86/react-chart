import { takeEvery, all } from 'redux-saga/effects'
import { ADD_REQ, DECREMENT_REQ, INCREMENT_ASYNC_REQ, INCREMENT_REQ } from '../actionTypes'
import { setIncrementAction, setDecrementAction, setAddAction, setIncrementAsyncAction } from './counter.action'

function* watchIncrementAsyncAction() {
  yield takeEvery(INCREMENT_ASYNC_REQ, setIncrementAsyncAction)
}

function* watchIncrementAction() {
  yield takeEvery(INCREMENT_REQ, setIncrementAction)
}

function* watchDecrementAction() {
  yield takeEvery(DECREMENT_REQ, setDecrementAction)
}

function* watchAddAction() {
  yield takeEvery(ADD_REQ, setAddAction)
}

export default function* rootSaga() {
  yield all([
    watchIncrementAsyncAction(),
    watchIncrementAction(),
    watchDecrementAction(),
    watchAddAction()
  ])
}
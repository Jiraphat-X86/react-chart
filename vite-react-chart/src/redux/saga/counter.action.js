import { put, takeEvery, all } from 'redux-saga/effects'
import { ADD, DECREMENT, INCREMENT } from '../actionTypes'

export function* setIncrementAction() {
    yield put({ type: INCREMENT})
}

export function* setDecrementAction() {
    yield put({ type: DECREMENT})
}

export function* setAddAction(payload) {
    yield put({ type: ADD, payload})
}

export function* watchIncrementAction() {
    yield takeEvery(INCREMENT_REQ, setIncrementAction)
}

export function* watchDecrementAction() {
    yield takeEvery(DECREMENT_REQ, setDecrementAction)
}

export function* watchAddAction() {
    yield takeEvery(ADD_REQ, setAddAction)
}
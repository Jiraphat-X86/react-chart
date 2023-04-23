import { put, delay } from 'redux-saga/effects'
import { ADD, DECREMENT, INCREMENT } from '../actionTypes'

export function* setIncrementAsyncAction() {
    yield delay(1000)
    yield put({ type: INCREMENT })
}

export function* setIncrementAction() {
    yield put({ type: INCREMENT })
}

export function* setDecrementAction() {
    yield put({ type: DECREMENT })
}

export function* setAddAction({payload}) {
    yield put({ type: ADD, payload })
}
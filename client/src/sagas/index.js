import {takeEvery} from 'redux-saga/effects'
import {getMessageSaga, createMessageSaga} from './chatSagas'
import ACTIONS from '../actions/actionTypes'

export default function* rootSaga() {
    yield takeEvery(ACTIONS.GET_MESSAGE_REQUEST, getMessageSaga)
    yield takeEvery(ACTIONS.CREATE_MESSAGE_REQUEST,createMessageSaga)
}
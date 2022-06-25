import {put} from 'redux-saga/effects'
import * as ActionCreators from '../actions/actionCreators'
import * as API from '../api'


export function* getMessageSaga (action) {
try{
const {data: {data}} = yield API.getMessages()
yield put(ActionCreators.getMessageSuccess(data))
}catch(err){
    yield put(ActionCreators.getMessageError(err))
}
}
export function* createMessageSaga (action) {
    try{
yield API.createMessage(action.payload.message)
    }catch(err){
       yield put(ActionCreators.createMessageError(err))
    }  
}
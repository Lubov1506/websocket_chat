import {combineReducers} from 'redux'
import chatReducer from './chatReducer'

const rooReducer = combineReducers({
    chat: chatReducer
})

export default rooReducer
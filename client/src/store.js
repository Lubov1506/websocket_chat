import { applyMiddleware, createStore } from "redux";
import rootReducer from './reducers'
import createSagaMW from 'react-redux'
import rootSaga from './sagas'
import {composeWithDevTools} from 'redux-devtools-extension'


const sagaMW = createSagaMW()
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMW)))

sagaMW.run(rootSaga)

export default store
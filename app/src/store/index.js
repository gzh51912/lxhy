import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'  //引入的总的reducer 

var store = createStore(reducer,applyMiddleware(thunk));

export default store;
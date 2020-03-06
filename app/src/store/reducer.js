// import cartReducer from "../components/cart/reducer"
// import listReducer from "../components/list/reducer"
import homeReducer from "../components/home/reducer"
import detReducer from "../components/detail/reducer"
import {combineReducers} from 'redux';
var reducer = combineReducers({
    // cart:cartReducer,
    // list:listReducer
    home:homeReducer,
    det:detReducer


})
export default reducer;
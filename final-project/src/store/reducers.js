import { combineReducers } from 'redux'
import AuthReducer from './auth/reducer'
import MotosReducer from './gallery/reducer'

const rootReducer = combineReducers({
    AuthReducer,
    MotosReducer,

})

export default rootReducer
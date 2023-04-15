import { combineReducers } from 'redux'
import EpisodesReducer from './episodes/reducer'
import CharactersReducer from './characters/reducer'
import LocationsReducer from './locations/reducer'
import AuthReducer from './auth/reducer'

const rootReducer = combineReducers({
    EpisodesReducer,
    CharactersReducer,
    LocationsReducer,
    AuthReducer,

})

export default rootReducer
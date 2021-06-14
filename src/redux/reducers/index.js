import { combineReducers } from 'redux'

/* All the reducers are imported here and a combineReducer is exported as root reducer to the Store */
import AppReducers from '../../components/reducers/AppReducers'
const allAppReducers = combineReducers({
  AppReducers
})

const rootReducer = (state, action) => {
  return allAppReducers(state, action)
}

export default rootReducer

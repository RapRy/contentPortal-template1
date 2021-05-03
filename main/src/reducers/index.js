import { combineReducers } from 'redux'

import dataReducer from './dataReducer'
import filterReducer from './filterReducer'
import contentReducer from './contentReducer'

export default combineReducers({ dataReducer, filterReducer, contentReducer })
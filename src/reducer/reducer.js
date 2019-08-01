import { combineReducers } from 'redux';
import {donorRegistration} from './registration';

import {onSelect} from './show.reducer'
const rootReducer = combineReducers({
    donorRegistration,
    onSelect
 
});

export default rootReducer;

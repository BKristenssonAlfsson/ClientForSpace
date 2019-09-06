import { combineReducers } from 'redux';
import { NasaReducer } from './NasaReducer';

const rootReducer = combineReducers({
    NasaReducer: NasaReducer
});

export default rootReducer;
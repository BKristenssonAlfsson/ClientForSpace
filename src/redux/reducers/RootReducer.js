import { combineReducers } from 'redux';
import { NasaReducer } from './NasaReducer';
import { TodoReducer } from './TodoReducer';

const rootReducer = combineReducers({
    NasaReducer: NasaReducer,
    TodoReducer: TodoReducer
});

export default rootReducer;
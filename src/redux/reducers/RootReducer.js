import { combineReducers } from 'redux';
import { NasaReducer } from './NasaReducer';
import { TodoReducer } from './TodoReducer';
import { TokenReducer } from './TokenReducer';

const rootReducer = combineReducers({
    NasaReducer: NasaReducer,
    TodoReducer: TodoReducer,
    TokenReducer: TokenReducer
});

export default rootReducer;
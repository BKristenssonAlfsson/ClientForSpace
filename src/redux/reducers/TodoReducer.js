import * as ACTIONS from '../actions/Actions';

export const initialState = {
	todos: [],
	logger: "No todos"
};

export const TodoReducer = (state = initialState, action) => {
	switch(action.type) {

		case ACTIONS.FETCH_ALL_TODOS:
			return {
				...state,
				logger: "Found todos",
				todos: action.payload
			}
		default:
			return state;
	}
}
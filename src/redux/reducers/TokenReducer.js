import * as ACTIONS from '../actions/Actions';

export const initialState = {
	tokens: []
};


export const TokenReducer = (state = initialState, action) => {
	switch(action.type) {

		case ACTIONS.GET_CSRF_TOKEN:
			return {
				...state,
				tokens: "We got connection"
			}
		default:
			return state;
	}
}
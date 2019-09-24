import * as ACTIONS from '../actions/Actions';

export const initialState = {
	token: String
};


export const TokenReducer = (state = initialState, action) => {
	switch(action.type) {

		case ACTIONS.GET_CSRF_TOKEN:
			return {
				...state,
				token: action.payload.headers.authorization
			}
		default:
			return state;
	}
}
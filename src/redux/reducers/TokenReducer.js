import * as ACTIONS from '../actions/Actions';

export const initialState = {
	token: String,
	username: {}
};


export const TokenReducer = (state = initialState, action) => {
	switch(action.type) {

		case ACTIONS.GET_CSRF_TOKEN:
			console.log(action.payload);
			return {
				...state,
				username: JSON.parse(action.payload.config.data),
				token: action.payload.headers.authorization
			}
		default:
			return state;
	}
}
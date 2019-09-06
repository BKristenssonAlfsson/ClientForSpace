import * as ACTIONS from '../actions/Actions';

export const initialState = {
	images: [],
	logger: "here"
};


export const NasaReducer = (state = initialState, action) => {
	switch(action.type) {

		case ACTIONS.START_FETCH:
			return {
				...state,
				logger: "We got connection"
			}
		case ACTIONS.FETCH_ALL_IMAGES:
			return {
				...state,
				logger: "We got some images for ya",
				images: action.payload
			}
		default:
			return state;
	}
}
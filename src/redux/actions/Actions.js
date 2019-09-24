import api from '../../shared/axios/api';


export const FETCH_ALL_IMAGES = 'FETCH_ALL_IMAGES';
export const START_FETCH = 'START_FETCH';
export const FETCH_ALL_TODOS = 'FETCH_ALL_TODOS';
export const GET_CSRF_TOKEN = 'GET_CSRF_TOKEN';

const startFetch = () => {
    return {
        type: START_FETCH,
        payload: null
    }
}

const getCsrfToken = (data) => {
    return {
        type: GET_CSRF_TOKEN,
        payload: data
    }
}

const fetchSuccess = (data) => {
    return {
        type: FETCH_ALL_IMAGES,
        payload: data
    }
}

const fetchedTodos = (data) => {
    return {
        type: FETCH_ALL_TODOS,
        payload: data
    }
}

export const retrieveCsrfToken = (data) => {
    return async (dispatch) => {
        try {
            await api.getCsrfToken(data).then((response) =>{
                dispatch(getCsrfToken(response))
            }).then((res) => {
                dispatch(loadAllImages())
            })
        } catch (error) {
            console.log(error);
        }
    }
}


export const loadAllImages = () => {
    return async (dispatch) => {
        try {
            dispatch(startFetch())
            await api.getAllImages().then((response) => {
                dispatch(fetchSuccess(response))
            })
            
        } catch ( error ){ 
            console.log(error);
        }
    }
}

export const getAllTodos = () => {
    return async (dispatch) => {
        try {
            await api.getTodos().then((response) => {
                dispatch(fetchedTodos(response))
            })
            
        } catch ( error ){ 
            console.log(error);
        }
    }
}

import {
    FETCH_DATA,
    FETCH_DATA_FAILURE,
    FETCH_DATA_SUCCESS,
    CLEAR_DATA
} from '../actions';

const initialState = {
    data: [], // for this example we'll make an app that fetches and lists data
    isLoading: false,
    error: false
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_DATA:
            console.log('Fetching Albums')
            return {
                isLoading: true
            }
        case FETCH_DATA_SUCCESS:
            console.log('Fetched Albums the data is : ', action.payload)
            return {
                data: action.payload || [],
                isLoading: false,
                error: false,
            }
        case FETCH_DATA_FAILURE:
            console.log('Fetched Albums failed  : ', action.payload)
            return {
                data: action.payload || [],
                isLoading: false,
                error: true,
            }
        case CLEAR_DATA:
            console.log('Clearing Data  : ', action.payload)
            return action.payload ? {
                data: action.payload || [],
                isLoading: false,
                error: true,
            } : {...state}
            default:
            return state;
    }
}

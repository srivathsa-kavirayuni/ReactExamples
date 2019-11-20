import {
    FETCH_WHISKIES,
    FETCH_WHISKIES_FAILURE,
    FETCH_WHISKIES_SUCCESS
} from '../actions';

const initialState = {
    whiskies: [], // for this example we'll make an app that fetches and lists whiskies
    isLoading: false,
    error: false
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_WHISKIES:
            console.log('Fetching Whiskeys')
            return {
                isLoading: true
            }
        case FETCH_WHISKIES_SUCCESS:
            console.log('Fetched Whiskeys the data is : ', action.payload)
            return {
                whiskies: action.payload || [],
                isLoading: false,
                error: false,
            }
        case FETCH_WHISKIES_FAILURE:
            console.log('Fetched Whiskeys failed  : ', action.payload)
            return {
                whiskies: action.payload || [],
                isLoading: false,
                error: true,
            }
            default:
            return state;
    }
}

export const FETCH_DATA = 'FETCH_ALBUMS';
export const FETCH_DATA_SUCCESS = 'FETCH_ALBUMS_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_ALBUMS_FAILURE';
export const CLEAR_DATA = 'CLEAR_DATA'

export const fetchData = () => ({
    type: FETCH_DATA,
});

export const fetchDataSuccess = (data) => ({
    type: FETCH_DATA_SUCCESS,
    payload: data
});

export const fetchDataFailure = (message) => ({
    type: FETCH_DATA_FAILURE,
    payload: message
});

export const clearData = () => ({
    type: CLEAR_DATA,
    payload: true
})

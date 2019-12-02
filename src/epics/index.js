import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { ajax } from 'rxjs/observable/dom/ajax';

import {
    FETCH_DATA,
    fetchDataFailure,
    fetchDataSuccess
} from "../actions";

export const rootEpic = combineEpics(fetchDataEpic);

// const url = 'https://evening-citadel-85778.herokuapp.com/whiskey/';
const url = 'https://jsonplaceholder.typicode.com/photos';

function fetchDataEpic(action$) { // action$ is a stream of actions
    // action$.ofType is the outer Observable
    return action$
        .ofType(FETCH_DATA) // ofType(FETCH_data) is just a simpler version of .filter(x => x.type === FETCH_data)
        .switchMap(() => {
            // ajax calls from Observable return observables. This is how we generate the inner Observable
            return ajax
                .getJSON(url) // getJSON simply sends a GET request with Content-Type application/json
        //         .map(data => data.results) // get the data and extract only the results
        //         .map(data => data.map(whisky => ({
        //             id: whisky.id,
        //             title: whisky.title,
        //             imageUrl: whisky.img_url
        //         })))// we need to iterate over the data and get only the properties we need
        //         // filter out data without image URLs (for convenience only)
        //         .map(data => data.filter(whisky => !!whisky.imageUrl))
        //     // at the end our inner Observable has a stream of an array of whisky objects which will be merged into the outer Observable
        })
                    .map(data => fetchDataSuccess(data)) // map the resulting array to an action of type FETCH_data_SUCCESS
        // every action that is contained in the stream returned from the epic is dispatched to Redux, this is why we map the actions to streams.
        // if an error occurs, create an Observable of the action to be dispatched on error. Unlike other operators, catch does not explicitly return an Observable.
        .catch(error => Observable.of(fetchDataFailure(error.message)))
}

import { put, takeEvery } from 'redux-saga/effects'
import { GET_POST_DATA, GET_POST_SUCCEEDED, GET_POST_FAILED } from './../actions/actionTypes';
/**
 * Worker Sage: Will be fied on GET_POST_DATA
 */

 function* fetchPostData(action) {
     try {
        const posts = yield fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {
            return response.json();
        });
        yield put({type: GET_POST_SUCCEEDED, posts: posts});
     } catch (e) {
         yield put({type: GET_POST_FAILED, message: e.message});
     }
 }

 /**
  * Starts fetchPostData on each dispatched 'GET_POST_DATA' action.
  * Allows concurrent fetches of posts
*/
function* postDataSaga() {
    yield takeEvery(GET_POST_DATA, fetchPostData);
}

export default postDataSaga;
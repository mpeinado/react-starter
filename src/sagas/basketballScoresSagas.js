import { put, takeEvery } from 'redux-saga/effects'
import { 
    GET_BASKETBALL_TEAMS, GET_BASKETBALL_TEAMS_SUCCEEDED, GET_BASKETBALL_TEAMS_FAILED,
    GET_BASKETBALL_SCORES, GET_BASKETBALL_SCORES_SUCCEEDED, GET_BASKETBALL_SCORES_FAILED } from './../actions/actionTypes';
/**
 * Worker Saga: Will be fired on GET_POST_DATA
 */
function* fetchBasketballScores(action) {
     try {
        const basketballScores = yield fetch('http://localhost:4000/api/allscores').then((response) => {
            return response.json();
        });
  
        yield put({type: GET_BASKETBALL_SCORES_SUCCEEDED, basketballScores: basketballScores});
     } catch (e) {
        debugger;
         yield put({type: GET_BASKETBALL_SCORES_FAILED, message: e.message});
     }
 }

 /**
  * Starts fetchBasketballScores on each dispatched 'GET_BASKETBALL_SCORES' action.
  * Allows concurrent fetches of basketball scores
*/
export function* basketballScoresSaga() {
    yield takeEvery(GET_BASKETBALL_SCORES, fetchBasketballScores);
}

function* fetchBasketballTeams(action) {
    try {
        const basketballTeams = yield fetch('http://localhost:4000/api/teams').then((response) => {
            return response.json();
        });

        yield put({
            type: GET_BASKETBALL_TEAMS_SUCCEEDED,
            basketballTeams: basketballTeams
        });
    }catch(err) {
        yield put({
            type: GET_BASKETBALL_TEAMS_FAILED,
            message: err.message
        });
    }
}

export function* basketballTeamsSaga() {
    yield takeEvery(GET_BASKETBALL_TEAMS, fetchBasketballTeams);
}

//export default basketballTeamsSaga;
//export default basketballScoresSaga;
import { all } from 'redux-saga/effects'
import postDataSaga from './postSagas';
import { basketballScoresSaga, basketballTeamsSaga } from './basketballScoresSagas';

function* rootSaga () {
    yield all([
        postDataSaga(),
        basketballTeamsSaga(),
        basketballScoresSaga(),
    ])
}

export default rootSaga;
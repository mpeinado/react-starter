import { GET_BASKETBALL_SCORES, GET_BASKETBALL_TEAMS } from './actionTypes';


export const getBasketballTeamsAction = () => {
    return {
        type: GET_BASKETBALL_TEAMS
    }
}

export const getBasketballScoresAction = () => {
    return {
        type: GET_BASKETBALL_SCORES
    }
}
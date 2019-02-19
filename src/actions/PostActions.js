import { DELETE_POST, GET_POST_DATA } from './actionTypes';

export const getPostDataAction = () => {
    return {
        type: GET_POST_DATA
    }
}


export const deletePostAction = (id) => {
    return {
        type: DELETE_POST,
        id: id
    }
}
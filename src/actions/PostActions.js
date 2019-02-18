import { DELETE_POST } from './actionTypes';

export const deletePostAction = (id) => {
    return {
        type: DELETE_POST,
        id: id
    }
}
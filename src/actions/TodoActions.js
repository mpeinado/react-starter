import { DELETE_TODO } from './actionTypes';

export const deleteTodoAction = (id) => {
    return {
        type: DELETE_TODO,
        id: id
    }
} 

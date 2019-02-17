const initState = {
    todos: [
        {id: 1, content: 'buy milk'},
        {id: 2, content: 'go run'},
        {id: 3, content: 'learn something new'}
    ]
}

const rootReducer = (state = initState, action) => {
    if(action.type === "DELETE_TODO"){
        const newTodos = state.todos.filter(todos => {
            return todos.id !== action.id
        });

        return {
            ...state,
            todos: newTodos
        }
    }
    
    return state
}

export default rootReducer;
import { DELETE_TODO, DELETE_POST, GET_POST_SUCCEEDED, GET_POST_FAILED } from './../actions/actionTypes';

const initState = {
    todos: [
        {id: 1, content: 'buy milk'},
        {id: 2, content: 'go run'},
        {id: 3, content: 'learn something new'}
    ],
    posts: [
        {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            "userId": 1,
            "id": 2,
            "title": "qui est esse",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
            "userId": 1,
            "id": 3,
            "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        }
    ]
}

const rootReducer = (state = initState, action) => {
    if(action.type === DELETE_TODO){
        const newTodos = state.todos.filter(todos => {
            return todos.id !== action.id
        });

        return {
            ...state,
            todos: newTodos
        }
    }

    if(action.type === DELETE_POST){
        const newPosts = state.posts.filter(post => {
            return post.id !== action.id
        });

        return {
            ...state,
            posts: newPosts,
        }
    }

    if(action.type === GET_POST_SUCCEEDED) {
        debugger;
        console.log(" SUCCESS -- Action called to get post data");

        return {
            ...state,
            posts: action.posts
        }
    }

    if(action.type === GET_POST_FAILED) {
        debugger;
        console.log("FAILED -- Action called to get post data");

        return {
            ...state,
            posts: initState.posts
        }
    }
    
    return state
}

export default rootReducer;
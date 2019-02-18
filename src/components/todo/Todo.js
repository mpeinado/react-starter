import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTodoAction } from './../../actions/TodoActions';


class Post extends Component {

    handelClick = () => {
        this.props.deleteTodo(this.props.todo.id);
        this.props.history.push('/');
    }

    render() {

        const todo = this.props.todo ? (
            <div className="row" key="{this.props.todo.id}">
                <div className="col">
                    <h4>{this.props.todo.content}</h4>

                    <button onClick={this.handelClick} className="btn btn-primary">Delete Todo</button>
                </div>
            </div>
        ) : (
            <div className="row">
                <div className="col">loading post...</div>
            </div>
        );

        return (
            <div className="container">
                {todo}
            </div>
        )
    }
}



/**
 * This funciton will take the app's sate and grab a todo from it, based on id.
 * @param {*} state | app's sate
 * @param {*} ownProps | to get the todo id from the url 
 */
const mapStateToProps = (state, ownProps) => {
    const id = parseInt(ownProps.match.params.todo_id);

    return {
        todo: state.todos.find(todo => todo.id === id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTodo: (id) => { dispatch(deleteTodoAction(id))}
    }
}

/**
 * connect allows us to connec to the app's state
 */
export default connect(mapStateToProps, mapDispatchToProps)(Post);
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class TodoPage extends Component {
    render() {
        const  { todos } = this.props;

        const todoList = todos.map(todo => {
            return (
                <div className="row todo" key={todo.id}>
                    <Link to={`/${todo.id}`}>
                        <div className="col" >
                            {todo.content}
                        </div>
                    </Link>
                </div>
            )
        });

        return (
            <div className="todos-page container">
                <div className="row">
                    <div className="col"> 
                        <h1>Todos Page</h1>
                    </div>
                </div>

                {todoList}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(TodoPage);
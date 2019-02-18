import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePostAction } from './../../actions/PostActions';

class Post extends Component {
    handelClick = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/posts');
    }

    render() {
        const post = this.props.post ? (
            <div className="row">
                <div className="col center" >
                    <h3>{this.props.post.title}</h3>
                    <p>{this.props.post.body}</p>

                    <div>
                        <button onClick={this.handelClick} className="btn btn-warning">Delete Post</button>
                    </div>
                </div>
            </div>
        ) : (
            <div>Loading post...</div>
        );

        return (
            <div className="container">
                {post}
            </div>
        ) 
    }
}

const mapStateToProps = (state, ownState) => {
    const postId = parseInt(ownState.match.params.post_id);
    return {
        post: state.posts.find(post => post.id === postId)
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => { dispatch(deletePostAction(id))}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Post);
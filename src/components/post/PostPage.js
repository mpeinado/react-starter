import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPostDataAction } from './../../actions/PostActions';

class PostPage extends Component {

    componentDidMount() {
        console.log("Posts page monted");

        // call an action to get post data 
        this.props.getPostsData();
    }
    render() {
        //console.log(this.props)
        const { posts } = this.props; 

        const postList = posts ? (
            posts.map(post => {
                return (
                    <div className="row" key={post.id}>
                        <div className="col center" >
                            <Link to={`/post/${post.id}`}>
                                <h3>{post.title}</h3>
                            </Link>
                           
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="row">
                <div className="col">No posts yet</div>
            </div>
        );
        return (
            <div className="container">
                <div className="row">
                    <div className="col center">
                        <h1>Post Page</h1>
                    </div>
                </div>

                {postList}
            </div>
        );
    }
}

const mapSateToProps = (state) => {
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPostsData: () => {dispatch(getPostDataAction())}
    }
}

export default connect(mapSateToProps, mapDispatchToProps)(PostPage);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class PostPage extends Component {
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

export default connect(mapSateToProps)(PostPage);
import React, { Component } from 'react';
import Moment from 'react-moment';

class NewsFeed extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        const { news } = this.props;

        const newsHtml = news && news.length > 0 ? ( news.map((article) => {
            const date = <Moment>{article.publishedAt}</Moment>;

            return (
                <div class="list-group">
                    <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">{article.title}</h5>
                            <small>{date}</small>
                        </div>
                        <p class="mb-1">{article.content}</p>
                        <small>By: {article.author}</small>
                    </a>
                </div>
            )
        })) : (
            <span>Loading News...</span>
        );

        return (
            <div className="row">
                <div className="col">
                    {newsHtml}
                </div>
            </div>
        );
    }
}

export default NewsFeed;
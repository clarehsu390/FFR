import React from 'react';

export default class PostIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestAllPosts();
    }

    renderAllPosts() {
        console.log(this.props.posts);
        return this.props.posts.map((post, i) => {
            console.log(post);
            return(
                <li key={i}>
                    <h1>{post.title}</h1>
                </li>
            );
        });
    }

    render() {
        if (this.props.posts) {

            return (
                <div>
                    <ul>
                        {this.renderAllPosts()}
                        </ul>
                    </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }
}
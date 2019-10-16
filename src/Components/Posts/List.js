import React from "react"
import axios from 'axios'
import { Link } from "react-router-dom"
import Post from "./Show.js"
import { connect } from 'react-redux'
import { setPosts } from '../../actions/posts'


class PostList extends React.Component {

    componentDidMount() {
       if (this.props.posts.length === 0) {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            const posts = response.data
            this.props.dispatch(setPosts(posts))
        })
        .catch(err => {
            console.log(err)
        })
       }
       
    }
    render() {
        const posts = this.props.posts
        return (
            <div>
                <h1>List of Posts -{posts.length} </h1>

                {posts.map((post) => {

                    return <div key={post.id}>
                        <li>
                            <Link to={`/posts/${post.id}`}>{post.title}</Link>
                        </li>
                    </div>
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}
export default connect(mapStateToProps)(PostList)
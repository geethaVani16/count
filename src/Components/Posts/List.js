import React from "react"
import axios from 'axios'
import { Link } from "react-router-dom"
import Post from "../Posts/Single"


class PostList extends  React.Component {
    constructor() {
        super()
        this.state={
            posts:[]
        }
    }
    componentDidMount () {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            this.setState({posts:response.data})
        })
        .catch(err => {
            console.log(err)
        })
    }
    render() {
        return(
            <div>
                <h1>List of Posts - {this.state.posts.length}</h1>
                {this.state.posts.map((post) => {
                    // return <Post data={post} key={post.id}/>
                    return <li key={post.id}><Link to='/posts/${post.id}'>{post.title}</Link></li>
                })}
            </div>
        )
    }
}
export default PostList
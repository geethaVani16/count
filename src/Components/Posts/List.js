import React from "react"
import axios from 'axios'
import { Link } from "react-router-dom"
import Post from "./Show.js"
import { connect } from 'react-redux'
import { Card } from 'react-bootstrap'
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
               <center> 
                   <h1 style={{color: "red"}}>List of Posts -{posts.length} </h1>
                </center>

                {posts.map((post) => {
                    return (
                    <div key={post.id}>
                        <Card>
                            <Card.Body>  <Link to={`/posts/${post.id}`}>{post.title}</Link></Card.Body>
                        </Card>
                    </div>
                    )
                   
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
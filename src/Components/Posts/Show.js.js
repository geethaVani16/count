import React from "react"
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const PostShow = (props) => {

    return (
        <div>
            {props.post &&
                <div>
                    <h1>{props.post.title}</h1>
                    <h4>{props.post.body}</h4>
                    <Link to="/posts">Back</Link>
                </div>}

        </div>
    )

}


const mapStateToProps = (state, props) => {
    const id = props.match.params.id
    return {
        post: state.posts.find(post => post.id == id)
    }
}
export default connect(mapStateToProps)(PostShow)
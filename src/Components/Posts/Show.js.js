import React from "react"
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Card,Button } from 'react-bootstrap'

const PostShow = (props) => {

    return (
        <div>
            {props.post &&
             <center>
                 <h1> {props.post.title}</h1>
                 <Card className="text-center" style={{width:'50%'}} >
                <Card.Header>{props.post.title}</Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                    {props.post.body}
                    </Card.Text>
                </Card.Body>
              
                <Button variant="primary">  <Link to="/posts">Back</Link></Button>
            </Card>
             </center>
                
            }

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
import React from "react"
import { connect } from 'react-redux'
import { Button,Menu,Rating } from 'semantic-ui-react'
import { increment, decrement } from '../../actions/count'
import { Link } from 'react-router-dom'

function Home(props) {
    return (
        <div>
            <h1>Home Page</h1>

            <center>
                <h1> {props.count} </h1>
                <Button size="small" color="green" icon="like" onClick={() => {
                    props.dispatch(increment())
                }}>UP</Button>
                <Button size="small" color="green" onClick={() => {
                    props.dispatch(decrement())
                }}>DOWN</Button>
            </center>
            <Rating rating={props.count/2} maxRating={props.count} />
            

            {/* <Menu>
                <Menu.Item as={Link} to="/">
                    Home
            </Menu.Item>
            </Menu> */}
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}

export default connect(mapStateToProps)(Home)



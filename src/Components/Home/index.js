import React from "react"
import { connect } from 'react-redux'
import { increment,decrement } from '../../actions/count'

 function Home (props) {
    return (
        <div>
            <h1>Home Page</h1>
            <h3> {props.count} </h3>
            <button onClick = {() => {
                props.dispatch(increment())
            }}>UP</button>
             <button onClick = {() => {
                props.dispatch(decrement())
            }}>DOWN</button>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        count:state.count
    }
}

export default connect(mapStateToProps)(Home)



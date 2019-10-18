import React from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom"
import Home from '../Home/index'
import PostList from "../Posts/List"
import PostShow from '../Posts/Show.js'



class Navbar extends React.Component {

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div >
                        <Link to='/home'>Home ||</Link> 
                        <Link to='/posts'> Posts</Link>

                        <Route path='/home' component={Home} />
                        <Route path='/posts' component={PostList} exact={true} />
                        <Route path='/posts/:id' component={PostShow} exact={true} />
                    </div>
                </BrowserRouter>







            </div>
        )
    }
}
export default Navbar
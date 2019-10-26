import React from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom"
import Example from '../rxjs/rxjs'
import Home from '../Home/index'
import PostList from "../Posts/List"
import PostShow from '../Posts/Show.js'
import FormikForm from '../formikform/FormikForm'
import CustomForm from '../formikform/CustomForm'



class Navbar extends React.Component {

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div >
                        <Link to='/home'>Home ||</Link> 
                        <Link to='/posts'> Posts |</Link>
                        <Link to='/form'>| Formikform |</Link>
                        <Link to='/customform'>| Custom Form</Link>

                        <Route path='/home' component={Home} />
                        <Route path='/posts' component={PostList} exact={true} />
                        <Route path='/form' component={FormikForm} exact={true} />
                        <Route path='/posts/:id' component={PostShow} exact={true} />
                        <Route path='/customform' component={CustomForm} exact={true} />
                        <Example/>
                    </div>
                </BrowserRouter>







            </div>
        )
    }
}
export default Navbar
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from "react-router-dom"

import Home from './Components/Home/index'
import PostList from './Components/Posts/List'
import PostShow from './Components/Posts/Show.js'

function App() {
  return (
    <BrowserRouter>
      <div >
        <Link to='/home'>Home</Link>
        <Link to='/posts'> Posts</Link>

        <Route path='/home' component={Home}/>
        <Route path='/posts' component={PostList} exact={true}/>
        <Route path='/posts/:id' component={PostShow} exact={true}/>
      </div>
    </BrowserRouter>

  );
}

export default App;

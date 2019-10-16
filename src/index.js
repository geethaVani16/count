import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import 'semantic-ui/dist/semantic.min.css';

import { setPosts } from './actions/posts'
import axios from 'axios'

import configureStore from './store/configureStore'

const store = configureStore()

store.subscribe (() => {
    console.log(store.getState())
})

axios.get('https://jsonplaceholder.typicode.com/posts')
.then(res => {
    const posts=res.data
    store.dispatch(setPosts(posts))
})
.catch(err => {
    console.log(err)
})


const element =(
    <Provider store={store}>
            <App />
    </Provider>
)

ReactDOM.render(element, document.getElementById('root'));



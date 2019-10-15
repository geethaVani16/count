import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import 'semantic-ui/dist/semantic.min.css';

import configureStore from './store/configureStore'

const store = configureStore()

store.subscribe (() => {
    console.log(store.getState())
})



const element =(
    <Provider store={store}>
            <App />
    </Provider>
)

ReactDOM.render(element, document.getElementById('root'));



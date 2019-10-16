import  { createStore, combineReducers } from "redux" 
import countReducer from '../reducers/count'
import postsReducer from '../reducers/posts'


const configureStore = () => {
    const store = createStore (combineReducers({
        count :countReducer,
        posts:postsReducer
    }))

    return store
}


export default configureStore

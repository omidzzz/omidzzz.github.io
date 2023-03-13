import { configureStore } from '@reduxjs/toolkit';
import lastReducer from './reducers/last'
import postReducer from './reducers/post'

export const store = configureStore({
    reducer:{
        last: lastReducer,
        post: postReducer
    }
})
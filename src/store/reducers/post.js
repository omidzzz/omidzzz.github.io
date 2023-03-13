import { createSlice } from '@reduxjs/toolkit'
import { fetchPost } from '../utils/thunks'

export const postSlice = createSlice({
    name:'post',
    initialState:{
        loading:  true,
        entries:{
            items:[]
        }
    },
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchPost.pending,(state)=>{
            state.loading = true
        })
        .addCase(fetchPost.fulfilled,(state,action)=>{
            state.loading = false;
            state.entries = action.payload;
        })
        .addCase(fetchPost.rejected,(state)=>{
            state.loading = false;
        })
    }
});

export default postSlice.reducer;
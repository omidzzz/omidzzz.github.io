import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const apiUrl = 'http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=simplyeffedup&limit=3&api_key=f59084f6f83edbe693185eb0ec6b2272&format=json';

export const fetchLast = createAsyncThunk(
    'posts/fetchLast',
    async({},{ getState })=>{
        try{

            const response = await axios.get('https://lemonade-p9qr.onrender.com/api/last');

            return {
                items: [response.data.recenttracks.track[1]]
            }
        } catch(error){
            throw error;
        }
    }
);

export const fetchPost = createAsyncThunk(
    '/posts/fetchPost',
    async({}, { getState })=>{
        try{
            const response = await axios.get('https://lemonade-p9qr.onrender.com/api/getposts');
            return{
                items: [response.data]
            }
        } catch(error){
            throw(error);
        }
    }
)
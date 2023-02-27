import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react';


import { fetchLast } from '../store/utils/thunks'
import axios from 'axios';

import '../style/style.css'

const Posts = () => {
    const lastItems = useSelector((state) => state.last)
    const dispatch = useDispatch();
    const lastI = lastItems.entries.items[0]

    useEffect(() => {
        dispatch(fetchLast({}))
    }, [])

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts();
    }, [])

    const getPosts = () => {
        axios.get('https://lemonade-p9qr.onrender.com/api/getposts')
            .then(response => {
                console.log(response)
                setPosts(response.data)
            })
    }

    let [lasts, setLasts] = useState([]);

    useEffect(() => {
        getLasts();
    }, [])

    const getLasts = () => {
        axios.get('https://lemonade-p9qr.onrender.com/api/last')
            .then(response => {
                console.log(response)
                setLasts(response.recenttracks)
            })
    }


    return (
        <>
            <div className='leftSection'>
                {posts.map((post) => (
                    <div className='musicP container mt-2 mb-2' key={post.id}>
                        <div className=' hstack'>
                            <img className='col-md-2' src={post.img} />
                            <span className='postT col-md-6 postMarg'>{post.title}</span>
                            <span className='postT booty ms-auto'><a target="_blank" className='btn btn-primary col' href={post.dlLink} download>Download</a></span>
                        </div>
                    </div>

                ))}

            </div>
            <div className='rightSection'>
                <div className='musicP container border border-secondary border-3 mt-2 mb-2'>
                    <div className=' border-bottom border-secondary hstack mt-2 mb-2 m-2' variant='warning'>
                        <h4 className='lastT'>Recently Played Tracks</h4>
                    </div>
                    <div className=' border-bottom border-secondary hstack mt-2 mb-2 m-2' variant='warning'>
                        <img
                            className='col-sm-2 m-2'
                            src="https://ik.imagekit.io/fkxt1hr5m/lastfm.png"
                        />
                        <span className='postMarg postT col-sm-4'>Artist</span>
                        <span className='col-sm-4 postT ms-auto'>Track</span>
                    </div>
                    {lastI ?
                        lasts.map((item, i) => (
                            <div className=' container hstack m-2' variant='danger' key={i}>
                                <img
                                    className='col-sm-2'
                                    src={`${item.image[1]['#text']}`}
                                />
                                <span className='postMarg postT col-sm-4'>{item.artist['#text']}</span>
                                <span className='postT col-sm-4 ms-auto'> {item.name}</span>
                            </div>
                        ))
                        : null}

                </div>
            </div>
        </>
    )
}

export default Posts;
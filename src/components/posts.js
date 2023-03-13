import { useEffect, useState } from 'react';

import axios from 'axios';

import '../style/style.css'


const Posts = () => {

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts();
    }, [])

    const getPosts = () => {
        axios.get('https://lemonade-p9qr.onrender.com/api/getposts')
            .then(response => {
                setPosts(response.data);
            })
    }

    let [last, setLast] = useState([]);

    useEffect(() => {
        getLast();
    }, [])

    const getLast = () => {
        axios.get('https://lemonade-p9qr.onrender.com/api/last')
            .then(response => {
                setLast(response.data.recenttracks.track)
            })
    }


    return (
        <>
            <div id="lS" className='leftSection'>
                <div className='musicP yellowBack container border border-secondary border-3 mt-2 mb-2'>
                    <div className=' border-bottom border-secondary hstack mt-2 mb-2 m-2' variant='warning'>
                        <h4 className='lastT'>Download</h4>
                    </div>                    {posts.map((post, i) => (
                        <div key={i}>
                            <div className='pt-3 pb-2 hstack'>
                                <img className='col-md-2' src={post.img} />
                                <span className='postT col-md-6 postMarg'>{post.title}</span>
                                <span className='postT booty ms-auto'><a target="_blank" className='btn btn-primary col' href={post.dlLink} download>Download</a></span>
                            </div>
                        </div>

                    ))}

                </div>
            </div>
            <div className='rightSection'>
                <div className='musicP yellowBack container border border-secondary border-3 mt-2 mb-2'>
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
                    {last ?
                        last.slice(0, 4).map((item, i) => (
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
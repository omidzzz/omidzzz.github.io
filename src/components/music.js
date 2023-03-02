import {useEffect,useState} from "react";
import axios from 'axios';

const Music = () => {

    let [posts,setPosts] = useState([]);
    useEffect(()=>{
        getPosts();
    },[])

    const getPosts = () => {
        axios.get('/api/getposts')
        .then(response => {
            setPosts(response.data)
        })
    }

    return(
        <>
            <div>
                {posts.map((post) => (
                    <div className="musicPosts mt-2 pb-4" key={post.id}>
                        <div className="postTitleContainer">
                            <div className="musicPostTitle pt-2 pb-2">{post.title}</div>
                        </div>
                        <img className="musicPostImg" src={post.img}/>
                        <div className="musicInfoContainer">
                            <div className="musicInfo">
                                Band: {post.band}<br/>
                                Origin: {post.origin}<br/>
                                Album: {post.album}<br/>
                                Year: {post.year}<br/>
                                <a className='btn btn-primary mt-2 mb-2' href={post.dlLink} download>Download</a>
                                <br/>
                                <pre>{post.lyrics}</pre>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Music;
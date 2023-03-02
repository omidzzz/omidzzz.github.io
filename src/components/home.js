import React,{useState} from "react"

import Logo from "./logo"
import Header from "./header"
import Posts from "./posts"

import '../style/style.css'

const Home = () => {



    return(

        <>

            <div className='bodyContainer'>
                <Posts/>
            </div>
        </>
    )
}

export default Home;
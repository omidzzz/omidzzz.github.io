import React, {Component} from 'react'
import {BrowserRouter, Routes, Route, Link, NavLink, Navigate} from 'react-router-dom'
import './style/style.css'

import Home from './components/home'
import Music from './components/music'
import Header from './components/header'
import Logo from './components/logo'


const App = () => {

    return (
        <BrowserRouter>
            <Header/>
            <Logo/>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/music' element={<Music/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
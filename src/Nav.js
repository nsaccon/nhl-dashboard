import React from 'react'
import './Nav.css'

const Nav = () => {
    return (
        <div className='nav'>
            <img className='nav_logo' src="https://cdn.vox-cdn.com/uploads/chorus_asset/file/16029142/EYG_MicrositeLogo.png" alt="NHL logo"/>
            <div className="nav_pageTitles">
                <a href='#searchScreen'>Young Guns</a>
                <a>Future Watch</a>
            </div>
        </div>
    )
}

export default Nav

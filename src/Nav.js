import React from 'react'
import './Nav.css'

const Nav = () => {
    return (
        <div className='nav'>
            <img className='nav_logo' src="http://assets.stickpng.com/images/5a4fbb7bda2b4f099b95da15.png" alt="NHL logo"/>
            <div className="nav_pageTitles">
                <a>Players</a>
                <a>Teams</a>
            </div>
        </div>
    )
}

export default Nav

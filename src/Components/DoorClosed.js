import React from 'react'
import { NavLink, BrowserRouter, Route, Switch, Link } from "react-router-dom"


// import door from '../img/door.png'
import merkel from '../img/merkel.png'
import wc from '../img/toilet.jpg'
import lightButton from '../img/lightButton.jpg'

export default function DoorClosed() {
    return (
        <div>
            <img className='wc' src={wc} alt="" />
            <div className='doorCombo'>
                <img className='merkel' src={merkel} alt="" />
                <div> <Link to="/open" > <div className='openDoorDark'></div> </Link> </div>
                <div> <Link to="/onoff" > <img className='lightButton' src={lightButton} alt="" /> </Link> </div>
            </div>
            <div className='floor' ></div>
        </div>
    )
}

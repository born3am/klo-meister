import React from 'react'
import { NavLink, BrowserRouter, Route, Switch, Link } from "react-router-dom"


// import door from '../img/door.png'
import door from '../img/door.png'
import merkel from '../img/merkel.png'
import wc from '../img/toilet.jpg'
import lightButton from '../img/lightButton.jpg'

export default function DoorClosed() {
    return (

        <div className='doorCombo'>

            <img className='merkel' src={merkel} alt="" />
            <div> <img className='door' src={door} alt="" /> </div>
            <div className='wcLight' >
                <img className='wc' src={wc} alt="" />
                <img id='lightButton' src={lightButton} alt="" />
            </div>
        </div>




    )
}

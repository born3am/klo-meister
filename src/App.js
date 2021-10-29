import React from 'react'
import { NavLink, BrowserRouter, Route, Switch } from "react-router-dom"

import DarkRoom from './Components/DarkRoom'
import Door from './Components/Door'
import Room from './Components/Room'

import door from './img/door.png'
import wc from './img/toilet.jpg'
import lightButton from './img/lightButton.jpg'

export default function App() {
    return (
        <BrowserRouter>

            <div>
                <img className='wc'  src={wc} alt="" />                
                <div className='doorCombo'>
                    <img className='door' src={door} alt="" />
                    <img className='lightButton' src={lightButton} alt="" />
                </div>
               
                <Switch>
                    <Door />
                    <DarkRoom />
                    <Room />
                </Switch>
            </div>
        </BrowserRouter>
    )
}
import React, { useState, Component } from 'react'
import { NavLink, BrowserRouter, Route, Switch, Link } from "react-router-dom"



import door from '../img/door.png'

import merkel from '../img/merkel.png'
import wc from '../img/toilet.jpg'
import lightButton from '../img/lightButton.jpg'
import waldo from '../img/waldo-toilet.png'


import './Door.css'


export default function Door() {

    const [doorOpened, setDoorOpened] = useState(false);
    const [lightOn, setLightOn] = useState(false);


        const doorAction = () => {
        if (doorOpened) {
            setDoorOpened(false);
        } else {
            setDoorOpened(true) };
        };
    

    const lightAction = () => {
        if (lightOn) {
            setLightOn(false);
        } else {
            setLightOn(true);
        }
    };

    return (

        <div>
            <div className='doorCombo'>

                <img className='merkel' src={merkel} alt="" />

                <div className={doorOpened ? "doorOpened" : "doorClosed"} onClick={doorAction} >

                    {/* {doorOpened ? <img src={} alt="" /> : <img className={""} src={door} alt="" /> } */}

                    <div className={lightOn ? "lightOn" : "lightOff"} ><img className={lightOn ? "lightOnImg" : "lightOffImg"} src={waldo} alt="" /></div>

                </div>
                <div className='wcLight' >
                    <img className='wc' src={wc} alt="" />
                    <img onClick={lightAction} id='lightButton' src={lightButton} alt=""></img>
                </div>
            </div>
            <footer className='floor' ><a href="https://www.vecteezy.com/free-vector/door">Door Vectors by Vecteezy</a>
            </footer>
        </div>
    )
}


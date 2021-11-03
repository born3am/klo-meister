import React, { useState, Component } from 'react'
import { NavLink, BrowserRouter, Route, Switch, Link } from "react-router-dom"



import door from '../img/door.png'

import merkel from '../img/merkel.png'
import wc from '../img/toilet.jpg'
import lightButton from '../img/lightButton.jpg'
import btnOn from '../img/lightbtnOn.png'
import btnOff from '../img/lightbtnOff.png'
import waldo from '../img/waldo-toilet.png'


import './Door.css'


export default function Door() {

    const [doorOpened, setDoorOpened] = useState(false);
    const [lightOn, setLightOn] = useState(false);


    const doorAction = () => {
        if (doorOpened) {
            setDoorOpened(false);
        } else {
            setDoorOpened(true)
        };
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
                    {doorOpened &&
                        <div className={lightOn ? "lightOn" : "lightOff"} >
                            <img className={lightOn ? "lightOnImg" : "lightOffImg"} src={waldo} alt="" />
                        </div>
                    }
                </div>
                <div className='wcLight' >
                    <img className='wc' src={wc} alt="" />
                    <div onClick={lightAction} >
                        {
                            lightOn ?
                                <img id='lightButton' src={btnOff} alt=""></img>
                                : <img id='lightButton' src={btnOn} alt=""></img>
                        }
                    </div>
                </div>
            </div>
            <footer className='floor' ><a href="https://www.vecteezy.com/free-vector/door">Door Vectors by Vecteezy</a>
            </footer>
        </div>
    )
}


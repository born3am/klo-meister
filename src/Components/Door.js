import React, { Component } from 'react'
import { NavLink, BrowserRouter, Route, Switch, Link } from "react-router-dom"



import door from '../img/door.png'
import merkel from '../img/merkel.png'
import wc from '../img/toilet.jpg'
import lightButton from '../img/lightButton.jpg'

import './Door.css'


export default class Door extends Component {

    state = {
        doorOpened: false
    };

    doorAction = () => {
        if (this.state.doorOpened) {
            this.setState({ doorOpened: false });
        } else {
            this.setState({ doorOpened: true });
        }
    };


    render() {


        return (

            <div className='doorCombo'>

                <img className='merkel' src={merkel} alt="" />
                
                <div className={this.state.doorOpened ? "doorOpened" : "doorClosed"} onClick={this.doorAction} ></div>
                <div className='wcLight' >
                    <img className='wc' src={wc} alt="" />
                    <img id='lightButton' src={lightButton} alt="" />
                </div>
            </div>




        )
    }
}

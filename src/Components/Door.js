import React, { Component } from 'react'
import { NavLink, BrowserRouter, Route, Switch, Link } from "react-router-dom"



import door from '../img/door.png'

import merkel from '../img/merkel.png'
import wc from '../img/toilet.jpg'
import lightButton from '../img/lightButton.jpg'
import waldo from '../img/waldo-toilet.png'


import './Door.css'


export default class Door extends Component {

    state = {
        doorOpened: false,
        lightOn: false
    };

    doorAction = () => {
        if (this.state.doorOpened) {
            this.setState({ doorOpened: false });
        } else {
            this.setState({ doorOpened: true });
        }
    };

    lightAction = () => {
        if (this.state.lightOn) {
            this.setState({ lightOn: false });
        } else {
            this.setState({ lightOn: true });
        }
    };


    render() {
        console.log(this.state.lightOn);


        return (

            <div>
                <div className='doorCombo'>

                    <img className='merkel' src={merkel} alt="" />

                    <div className={this.state.doorOpened ? "doorOpened" : "doorClosed"} onClick={this.doorAction} >

                        <div className={this.state.lightOn ? "lightOn" : "lightOff"} ><img className={this.state.lightOn ? "lightOnImg" : "lightOffImg"} src={waldo} alt="" /></div>

                    </div>
                    <div className='wcLight' >
                        <img className='wc' src={wc} alt="" />
                        <img onClick={this.lightAction} id='lightButton' src={lightButton} alt=""></img>
                    </div>
                </div>
                <footer className='floor' ><a href="https://www.vecteezy.com/free-vector/door">Door Vectors by Vecteezy</a>
                </footer>
            </div>




        )
    }
}

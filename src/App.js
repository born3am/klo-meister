import React, { Component } from 'react'
import { NavLink, BrowserRouter, Route, Switch, Link } from "react-router-dom"

import DarkRoom from './Components/DarkRoom'
import DoorOpened from './Components/DoorOpened'
import Room from './Components/Room'
import DoorClosed from './Components/DoorClosed'


import door from './img/door.png'
import merkel from './img/merkel.png'
import wc from './img/toilet.jpg'
import lightButton from './img/lightButton.jpg'

import './App.css'

class App extends Component {

    // state = {
    //     lightOn: false
    // };

    // lightChange = () => {
    //     if (this.state.lightOn) {
    //         this.setState({ lightOn: false });
    //     } else {
    //         this.setState({ lightOn: true });
    //     }
    // };



    render() {
        return (
            <BrowserRouter>

                <div className='body' >
                    <nav className='navBar'>
                        <ul>
                            <li> <NavLink activeClassName="selected" to={'/merkel'} >Ask Merkel</NavLink> </li>
                            <li>  <NavLink activeClassName="selected" to={'/me'} >Ask Me</NavLink> </li>
                            <li>  <NavLink activeClassName="selected" to={'/opened'} >Door opened</NavLink></li>
                            <li>  <NavLink activeClassName="selected" to={'/closed'} >Door closed</NavLink></li>
                        </ul>
                    </nav>

                    <DoorClosed />
                    <div className='floor' ></div>

                    <Switch>
                        <Route exact path="/opened" component={DoorOpened} />
                        <Route exact path="/onoff" component={Room} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;

import React, { Component } from 'react'
import { NavLink, BrowserRouter, Route, Switch, Link } from "react-router-dom"

import DarkRoom from './Components/DarkRoom'
import Door from './Components/DoorClosed'
import Room from './Components/Room'

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
                            <li> <NavLink activeClassName="selected" to={'/open'} >Ask Merkel</NavLink> </li>
                            <li>  <NavLink to={'/open'} >Ask Me</NavLink> </li>
                            <li>  <NavLink to={'/open'} >Door opened</NavLink></li>
                            <li>  <NavLink to={'/open'} >Door closed</NavLink></li>
                        </ul>
                    </nav>

                    {/* <img className='wc' src={wc} alt="" /> */}

                    <div className='doorCombo'>

                        <img className='merkel' src={merkel} alt="" />
                        <div> <NavLink to={'/open'} >  <img className='door' src={door} alt="" /> </NavLink> </div>
                        <div> <NavLink to={'/onoff'} > <img className='lightButton' src={lightButton} alt="" /> </NavLink> </div>


                    </div>
                    <div className='floor' ></div>

                    <Switch>
                        <Route exact path="/open" component={Door} />
                        <Route exact path="/onoff" component={Room} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;

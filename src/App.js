import React, { Component } from 'react'
import { NavLink, BrowserRouter, Route, Switch, Link } from "react-router-dom"




import './App.css'
import Merkel from './Components/Merkel/Merkel'
import Me from './Components/Me/Me'
import Door from './Components/Door'


export default function App() {

    return (
        <BrowserRouter>

            <div className='body' >
                <nav className='navBar'>
                    <ul>
                        <li> <NavLink activeClassName="selected" to={'/home'} >Home</NavLink> </li>

                        <li> <NavLink activeClassName="selected" to={'/merkel'} >Poke Merkel</NavLink> </li>
                        <li>  <NavLink activeClassName="selected" to={'/me'} >Poke Me</NavLink> </li>


                    </ul>
                </nav>


                <Switch>

                    <Route exact path="/home" component={Door} />
                    <Route exact path="/merkel" component={Merkel} />
                    <Route exact path="/me" component={Me} />

                </Switch>

            </div>
        </BrowserRouter>
    )
}



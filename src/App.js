import React, { Component } from 'react'
import { NavLink, BrowserRouter, Route, Switch, Link } from "react-router-dom"

import Door from './Components/Door'


// import door from './img/door.png'
// import merkel from './img/merkel.png'
// import wc from './img/toilet.jpg'
// import lightButton from './img/lightButton.jpg'

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

                            <li>  <NavLink activeClassName="selected" to={'/closed'} >Light On/Off</NavLink></li>

                        </ul>
                    </nav>

                    <Door />
                    <div className='floor' ><a href="https://www.vecteezy.com/free-vector/door">Door Vectors by Vecteezy</a></div>

                    <Switch>
                        {/* <Route exact path="/opened" component={Door} />
                        <Route exact path="/onoff" component={Door} /> */}
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;

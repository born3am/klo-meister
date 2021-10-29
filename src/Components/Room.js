import React, { Component } from 'react'

import waldo from '../img/waldo-toilet.png'


export default class Room extends Component {

    state = {
        lightOn: false
    };

    lightChange = () => {
        if (this.state.lightOn) {
            this.setState({ lightOn: false });
        } else {
            this.setState({ lightOn: true });
        }
    };

    whereIsWaldo = () => {
        if (this.state.lightOn) {
            <img src="waldo" alt="" />
        }

    }


    render() {
        return (
            <div className={this.state.lightOn ? "lit" : " dark"} >
                <button onClick={this.lightChange} >The bathroom switch is {this.state.lightOn ? "On" : "Off"}</button>
            </div>
        )
    }
}

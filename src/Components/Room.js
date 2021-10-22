import React, { Component } from 'react'


export default class Room extends Component {
    
    state ={
        lightOn: true
    };

     lightChange =() => {
        if (this.state.lightOn) {
            this.setState ({lightOn: false});
         }else {
            this.setState ({lightOn: true});
         }
    };

    render() {
        return (
            <div className={this.state.lightOn ? "lit": " dark"} >
                <button onClick={this.lightChange} >The room is {this.state.lightOn?"On": "Off"}</button>
            </div>
        )
    }
}
 
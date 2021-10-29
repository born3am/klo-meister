import React, { Component } from 'react'


export default class Room extends Component {
    
    state ={
        lightOn: false
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
                <button onClick={this.lightChange} >The bathroom switch is {this.state.lightOn?"On": "Off"}</button>
            </div>
        )
    }
}
 
import React from "react";
import { Circle } from "./Circle.jsx";

export class Board extends React.Component{
    render(){
        return(
        <div>
            Board {this.props.activeUser}
            <Circle color={this.props.activeUser} updateUser={this.props.updateUser}/>
            <Circle color={this.props.activeUser} updateUser={this.props.updateUser}/>
            <Circle color={this.props.activeUser} updateUser={this.props.updateUser}/>
        </div>
        );
    }
}
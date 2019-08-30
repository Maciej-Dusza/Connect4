import React from "react";

export class Menu extends React.Component{
    render(){
        return(
        <div>Menu {this.props.activeUser}</div>
        );
    }
}
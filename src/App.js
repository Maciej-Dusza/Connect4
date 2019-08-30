import React from "react";
import {Board} from "./Board.jsx";
import {Menu} from "./Menu.jsx";
import {Chat} from "./Chat.jsx";

export class App extends React.Component{
   
    constructor(){
        super();
        this.state={
            activeUser: "red"
        };
        this.bindedOnClick=this.onClick.bind(this);
    }

    onClick(){
        if(this.state.activeUser==="red"){
            this.setState({activeUser:"yellow"});
        } else {
            this.setState({activeUser:"red"});
        }
    }

   render(){
       return (
        <div>
            <div>CONNECT 4</div>
            <div>
                <Board activeUser={this.state.activeUser} updateUser={this.bindedOnClick}/>
                <Menu activeUser={this.state.activeUser}/>
                <Chat activeUser={this.state.activeUser}/>
            </div>
        </div>
        )
    }
}

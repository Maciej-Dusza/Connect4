import React from "react";
import { Circle } from "./Circle.jsx";

export class Board extends React.Component{
    render(){
        return(
        <div>
            Board {this.props.activeUser}
            <div style={{display:"flex"}}>
                {this.props.gameBoard.map((element,index) =>
                    <Circle 
                        color={this.props.activeUser} 
                        updateUser={this.props.updateUser}
                        key={index}
                        circleIndex={index}/>
                )}
            </div>
            
          
        </div>
        );
    }
}



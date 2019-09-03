import React from "react";
import { Circle } from "./Circle.jsx";
import styled from "@emotion/styled";

const BoardStyled=styled.div`
    background-color: #2F3A9D;
    padding: 10px;
    border-radius: 30px;
`;



export class Board extends React.Component{
    render(){
        return(
        <BoardStyled>          
                {this.props.gameBoard.map((element,index) =>
                   <div style={{display:"flex"}} key={index}>
                    {element.map((subelement,subindex)=>
                        <Circle 
                            color={this.props.gameBoard[index][subindex]} 
                            updateUser={this.props.updateUser}
                            key={index*10+subindex}
                            circleIndex={index}
                            circleSubindex={subindex}
                        />
                    )}
                   </div>
                )}

            
          
        </BoardStyled>
        );
    }
}



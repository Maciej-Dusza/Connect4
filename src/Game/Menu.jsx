import React from "react";
import styled from "@emotion/styled";
import {Timer} from "./Timer.jsx"

const MenuStyled=styled.div`
    width: 250px;
    background-color: silver;
    padding: 10px;
`;

const CircleStyled=styled.div`
    height: 50px;
    width: 50px;
    background-color: ${({color})=>color || 'white'};
    border-radius: 50%;
    margin: 1px;
`;

const DivStyled=styled.div`
    height: 50px;
    margin: 5px;
    display:flex;
    align-items: center;
    width: ${(props)=>props.width || "auto"};
`;

const newGameStates=["Pause","Win"]

export class Menu extends React.Component{
    
    constructor(){
        super();
        this.reset=this.reset.bind(this);
        this.newGame=this.newGame.bind(this);
    }


    reset(){
        this.props.resetGame()
        this.props.reset()
        console.log("reset")
    };
    
    newGame(){
            return newGameStates.indexOf(this.props.activeGame)>-1;
    }

    render(){
        return(
        <MenuStyled>
            <div>MENU</div>
            <div>             
                {this.props.activeGame==="" && <button onClick={this.props.startGame}>
                    Start
                </button>}
                {this.props.activeGame==="Game" && <button onClick={this.props.pauseGame}>
                    Stop
                </button>}
                {this.props.activeGame==="Pause" && <button onClick={this.props.startGame}>
                    Resume
                </button>}
                {this.newGame() && <button onClick={this.reset}>
                    New Game
                </button>}
            </div>
            <DivStyled>
                <DivStyled>Active User:</DivStyled>
                <DivStyled width="70px">{this.props.activeUser}</DivStyled> 
                <CircleStyled color={this.props.color}/>          
            </DivStyled>
            <Timer
                activeGame={this.props.activeGame}
           />            
        </MenuStyled>
        );
    }
}
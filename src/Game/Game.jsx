import React from "react";
import {Board} from "./Board.jsx";
import {Menu} from "./Menu.jsx";
import {Chat} from "./Chat.jsx";
import {checkWinner} from "./CheckWinner.jsx";
import styled from "@emotion/styled";
import {initArray} from "../helpers/helper.js"
import { ContentWraper } from "../common/ContentWrapper.jsx";
import { Prompt } from "react-router-dom";

const MainStyled=styled.div`
        display: flex;
        justify-content: space-between;
    `;

const PopupStyled=styled.div`
    position: absolute;    
    top:50%;
    left: 50%;
    background: ${(props)=> props.color};
    padding: 20px;
    transform: translate(-50%, -50%);

    
`;

export class Game extends React.Component{
   
    constructor(props){
        super(props);
        this.state={
            activeUser: "red",
            gameBoard: [],
            win: 0,
            activeGame:""
        };
        this.state.gameBoard= initArray(this.props.rows,this.props.columns,"");  
        this.updateUser=this.updateUser.bind(this);
        this.reset=this.reset.bind(this);
        this.startGame=this.startGame.bind(this);
        this.pauseGame=this.pauseGame.bind(this);
        this.resetGame=this.resetGame.bind(this);
    }

    updateUser(index,subindex){
        while(this.state.gameBoard[index+1] && this.state.gameBoard[index+1][subindex]===""){
            index++;
        }
        const copyGameBoard = [...this.state.gameBoard]
        copyGameBoard[index][subindex]= this.state.activeUser;
        this.setState({gameBoard:copyGameBoard});
        const win=checkWinner(this.state.gameBoard, index, subindex);
        this.setState({win: win});
        if(win>=3){
            this.setState({activeGame:"Win"});
            this.props.setGame("");
            return;
        }
        if(this.state.activeUser==="red"){
            this.setState({activeUser:"yellow"});
        } else {
            this.setState({activeUser:"red"});
        }
    }

    reset(){
        this.setState({
            gameBoard: initArray(this.props.rows,this.props.columns,""),
            win: 0
        })
    };

    startGame(){
        this.setState({activeGame: "Game"});
        this.props.setGame("Play");
    };
    pauseGame(){
        this.setState({activeGame: "Pause"});
        this.props.setGame("Play");
    };
    resetGame(){
        this.setState({activeGame: ""});
        this.props.setGame("Play");
    };

   render(){
       return (
           <ContentWraper>
            <div>
                <MainStyled>
                    <Menu 
                        activeUser={this.state.activeUser}
                        reset={this.reset}
                        color={this.state.activeUser}
                        startGame={this.startGame}
                        activeGame={this.state.activeGame}
                        pauseGame={this.pauseGame}
                        resetGame={this.resetGame}
                    />
                    {this.props.a}
                    
                    
                    <div style={{position: "relative"}}>
                        <Board 
                            activeUser={this.state.activeUser} 
                            updateUser={this.updateUser}
                            gameBoard={this.state.gameBoard}
                            activeGame={this.state.activeGame}
                        />
                        {this.state.win>=3 && 
                            <PopupStyled color={this.state.activeUser}>
                                {this.state.activeUser} 
                                WIN
                            </PopupStyled>}
                        {this.state.activeGame==="" && 
                            <PopupStyled color="silver" onClick={this.startGame}>
                                Click to start
                            </PopupStyled>}
                        {this.state.activeGame==="Pause" && 
                        <PopupStyled color="silver" onClick={this.startGame}>
                            <div>Game Paused</div>
                            <div>Click to continue</div>
                        </PopupStyled>}
                    </div>
                    <Chat activeUser={this.state.activeUser}/>
                </MainStyled>
            </div>
            <Prompt
                    when={this.props.game==="Play"}
                    message={"Are you sure you want to leave game?"}
                    onConfirm={()=> this.props.setGame("")}
                    />
        </ContentWraper>
        )
    }
}

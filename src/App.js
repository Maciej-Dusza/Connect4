import React from "react";
import {Header} from "./Header.jsx";
import {Board} from "./Board.jsx";
import {Menu} from "./Menu.jsx";
import {Chat} from "./Chat.jsx";
import {checkWinner} from "./CheckWinner.jsx";
import styled from "@emotion/styled";
import {initArray} from "./helper.js"

const MainStyled=styled.div`
        display: flex;
        margin: 90px 30px 30px;
        justify-content: space-between;
    `;

const WinnerStyled=styled.div`
    position: absolute;    
    top:50%;
    left: 50%;
    background: ${(props)=> props.color};
    padding: 20px;
    transform: translate(-50%, -50%);

    
`;

export class App extends React.Component{
   
    constructor(){
        super();
        this.state={
            activeUser: "red",
            gameBoard: initArray(6,7,""),
            win: 0,
            activeGame:""  
        };
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
            gameBoard: initArray(6,7,""),
            win: 0
        })
    };

    startGame(){
        this.setState({activeGame: "Game"});
        console.log("Game START");
    };
    pauseGame(){
        this.setState({activeGame: "Pause"});
        console.log("Pause");
    };
    resetGame(){
        this.setState({activeGame: ""});
        console.log("Reset");
    };

   render(){
       return (
            <div>
                <Header/>
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
                    
                    <div style={{position: "relative"}}>
                        <Board 
                            activeUser={this.state.activeUser} 
                            updateUser={this.updateUser}
                            gameBoard={this.state.gameBoard}
                            activeGame={this.state.activeGame}
                        />
                        {this.state.win>=3 && <WinnerStyled color={this.state.activeUser}>{this.state.activeUser} WIN</WinnerStyled>}
                    </div>
                    <Chat activeUser={this.state.activeUser}/>
                </MainStyled>

                
            </div>
        )
    }
}

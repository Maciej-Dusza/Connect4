import React from "react";
import {Header} from "./Header.jsx";
import {Board} from "./Board.jsx";
import {Menu} from "./Menu.jsx";
import {Chat} from "./Chat.jsx";
import {checkWinner} from "./CheckWinner.jsx"
import styled from "@emotion/styled";

const MainStyled=styled.div`
        display: flex;
        margin: 90px 30px 30px;
        justify-content: space-between;
    `;

export class App extends React.Component{
   
    constructor(){
        super();
        this.state={
            activeUser: "red",
            gameBoard: [
                ["","","","","","",""],
                ["","","","","","",""],
                ["","","","","","",""],
                ["","","","","","",""],
                ["","","","","","",""],
                ["","","","","","",""],
            ]   
        };
        this.updateUser=this.updateUser.bind(this);
    }

    updateUser(index,subindex){
        const copyGameBoard = [...this.state.gameBoard]
        copyGameBoard[index][subindex]= this.state.activeUser;
        this.setState({gameBoard:copyGameBoard}, ()=>console.log(this.state.gameBoard));
        const win=checkWinner(this.state.gameBoard, index, subindex);
        console.log("win final ", win);
        if(this.state.activeUser==="red"){
            this.setState({activeUser:"yellow"});
        } else {
            this.setState({activeUser:"red"});
        }
    }

   render(){
       return (
            <div>
                <Header/>
                <MainStyled>
                    <Menu activeUser={this.state.activeUser}/>
                    <Board 
                        activeUser={this.state.activeUser} 
                        updateUser={this.updateUser}
                        gameBoard={this.state.gameBoard}
                    />
                    <Chat activeUser={this.state.activeUser}/>
                </MainStyled>
                
            </div>
        )
    }
}

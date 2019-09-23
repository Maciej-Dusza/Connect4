import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {Game} from "./Game/Game.jsx"
import {Options} from "./Options/Options.jsx"
import {Header} from "./Game/Header.jsx"
import {initArray} from "./helpers/helper.js"

export class App extends React.Component{
    constructor(){
        super();
        this.state={
            rows: 6,
            columns: 7,
        };
        this.boardHigh=this.boardHigh.bind(this);
        this.boardWitdh=this.boardWitdh.bind(this);
    };

    boardHigh(event){
        this.setState({
            rows: event.target.value, 
            gameBoard: initArray(event.target.value,this.state.columns,"")
        })
    };

    boardWitdh(event){
        this.setState({
            columns: event.target.value, 
            gameBoard: initArray(this.state.rows,event.target.value,"")
        })
    };

    render(){

        const a = 5;
        return <Router>
            <Header/>
            <Route exact path="/" render={() => (
                <Game 
                    rows={this.state.rows}
                    columns={this.state.columns}
                />)} 
            />

            <Route path="/options" render={()=>( 
                <Options 
                    boardHigh= {this.boardHigh} 
                    boardWitdh={this.boardWitdh} 
                    rows={this.state.rows}
                    columns={this.state.columns}
                />)}
            />

        </Router>
    }
}
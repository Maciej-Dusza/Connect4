import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Game } from "./Game/Game.jsx"
import { Options } from "./Options/Options.jsx"
import { Header } from "./Game/Header.jsx"
import { initArray } from "./helpers/helper.js"

export class App extends React.Component {
    constructor() {
        super();
        this.state = {
            rows: 6,
            columns: 7,
            gameMode: "playerVsComputer",
            game: "",
        };
        this.boardHigh = this.boardHigh.bind(this);
        this.boardWitdh = this.boardWitdh.bind(this);
        this.setGameMode = this.setGameMode.bind(this);
        this.setGame = this.setGame.bind(this);
    };

    componentWillUnmount() {
        this.state.game = "";
    }

    boardHigh(event) {
        this.setState({
            rows: event.target.value,
            gameBoard: initArray(event.target.value, this.state.columns)
        })
    };

    boardWitdh(event) {
        this.setState({
            columns: event.target.value,
            gameBoard: initArray(this.state.rows, event.target.value)
        })
    };

    setGameMode(event) {
        this.setState({
            gameMode: event.target.value,
        });
        console.log("Seting Game Mode")
    };

    setGame(status) {
        this.setState({
            game: status,
        })
    }

    render() {

        return <Router>
            <Header
            />
            <Route exact path="/" render={() => (
                <Game
                    rows={this.state.rows}
                    columns={this.state.columns}
                    setGame={this.setGame}
                    game={this.state.game}
                    gameMode={this.state.gameMode}
                />)}
            />

            <Route path="/options" render={() => (
                <Options
                    boardHigh={this.boardHigh}
                    boardWitdh={this.boardWitdh}
                    rows={this.state.rows}
                    columns={this.state.columns}
                    setGameMode={this.setGameMode}
                    gameMode={this.state.gameMode}
                />)}
            />

        </Router>
    }
}
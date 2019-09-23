import React from "react";
import { ContentWraper } from "../common/ContentWrapper.jsx";

export class Options extends React.Component{

    render(){

        return( 
        <ContentWraper>
            <div>Opttions</div>
            <div>Wielkość Planszy</div>
            <select onChange={this.props.boardHigh} value= {this.props.rows}>
                        <option value="10">10</option>
                        <option value="9">9</option>
                        <option value="8">8</option>
                        <option value="7">7</option>
                        <option value="6">6</option>
                        <option value="5">5</option>
                     </select>
                     <select onChange={this.props.boardWitdh} value= {this.props.columns}>
                        <option value="10">10</option>
                        <option value="9">9</option>
                        <option value="8">8</option>
                        <option value="7">7</option>
                        <option value="6">6</option>
                        <option value="5">5</option>
                     </select>
            <div>Mode</div>
            <select onChange={this.props.setGameMode} value={this.props.gameMode}>
                <option value="playerVsPlayer">Player vs Player</option>
                <option value="playerVsComputer">Player vs Computer</option>
            </select>
        </ContentWraper>
        )
    }
};
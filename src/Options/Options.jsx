import React from "react";
import { ContentWraper } from "../common/ContentWrapper.jsx";

const possibleSizes = [10, 9, 8, 7, 6, 5];

export class Options extends React.Component {

    render() {

        return (
            <ContentWraper>
                <div>Opttions</div>
                <div>Wielkość Planszy</div>
                <select onChange={this.props.boardHigh} value={this.props.rows}>
                    {possibleSizes.map((element) =>
                        <option value={element} key={element}>{element}</option>
                    )}
                </select>
                <select onChange={this.props.boardWitdh} value={this.props.columns}>
                    {possibleSizes.map((element) =>
                        <option value={element} key={element}>{element}</option>
                    )}
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
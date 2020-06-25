import React from 'react';
import { Board } from '../components/board.js';
import {
    getNewBoard,
    flipTheLights,
    getLights,
    checkForWin,
} from '../game-logic.js';

export class BoardContainer extends React.Component {
    state = {
        numMoves: 0,
        hasWon: false,
        board: this.props.startingBoard,
    };

    handleClick = (row, col) => {
        let updatedBoard = flipTheLights(this.state.board, row, col);
        let hasWon = checkForWin(updatedBoard);
        this.setState({
            board: updatedBoard,
            numMoves: 1 + this.state.numMoves,
            hasWon: hasWon,
        });
    };

    reset = () => {
        this.setState({ board: getNewBoard(), numMoves: 0, hasWon: false });
    };

    render() {
        return (
            <Board
                lights={getLights(this.state.board, this.handleClick)}
                numMoves={this.state.numMoves}
                reset={this.reset}
                hasWon={this.state.hasWon}
                winComponent={this.state.winComponent}
            />
        );
    }
}

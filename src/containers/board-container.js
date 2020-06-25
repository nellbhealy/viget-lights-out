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
    };

    board = this.props.startingBoard ? this.props.startingBoard : getNewBoard();

    shouldBeOn = (row, col) => {
        return this.board[row][col];
    };

    flip = (row, col) => {
        this.board[row][col] = !this.board[row][col];
    };

    win = () => {
        this.setState({ hasWon: true });
    };

    handleClick = (row, col) => {
        this.board = flipTheLights(this.board, row, col);
        this.setState({ numMoves: ++this.state.numMoves });
        if (checkForWin(this.board)) this.win();
    };

    reset = () => {
        this.board = getNewBoard();
        this.setState({ numMoves: 0, hasWon: false });
    };

    render() {
        return (
            <Board
                lights={getLights(this.board, this.handleClick)}
                numMoves={this.state.numMoves}
                reset={this.reset}
                hasWon={this.state.hasWon}
                winComponent={this.state.winComponent}
            />
        );
    }
}

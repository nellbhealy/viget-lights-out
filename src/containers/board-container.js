import React from 'react';
import { Light } from '../components/light.js';
import { Board } from '../components/board.js';

export class BoardContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            board: [],
            numMoves: 0,
            winComponent: <p />,
        };
        this.board = this.getNewBoard();
    }

    /**
     * Decides which tiles start off in the On positon.
     * If no lights get turned on, the method will call itself again.
     */
    getNewBoard = () => {
        let board = [];
        let isALightOn = false;
        for (let row = 0; row < 5; row++) {
            board.push([]);
            for (let col = 0; col < 5; col++) {
                let isOn = Math.random() < 0.1 ? true : false;
                if (isOn) isALightOn = true;
                board[row].push(isOn);
            }
        }
        if (isALightOn) {
            return board;
        } else {
            return this.getNewBoard();
        }
    };

    shouldBeOn = (row, col) => {
        return this.board[row][col];
    };

    flip = (row, col) => {
        this.board[row][col] = !this.board[row][col];
    };

    flipTheLights = (row, col) => {
        for (let x = -1; x < 2; x++) {
            if (col + x < 5 && col + x >= 0) {
                this.flip(row, col + x);
            }
        }
        for (let y = -1; y < 2; y++) {
            if (row + y < 5 && row + y >= 0 && y != 0) {
                this.flip(row + y, col);
            }
        }
    };

    checkForWin = () => {
        for (let row = 0; row < 5; row++) {
            for (let col = 0; col < 5; col++) {
                if (this.board[row][col]) return false;
            }
        }
        return true;
    };

    win = () => {
        let winComp = (
            <div>Congratulations, you Won! Click reset to play again.</div>
        );
        this.setState({ winComponent: winComp });
    };

    handleClick = (row, col) => {
        this.flipTheLights(row, col);
        this.state.numMoves++;
        this.setState({ board: this.board });
        if (this.checkForWin()) this.win();
    };

    reset = () => {
        this.board = this.getNewBoard();
        this.state.numMoves = 0;
        this.setState({ board: this.board });
    };

    getLights = () => {
        let lights = [];
        for (let row = 0; row < 5; row++) {
            lights.push([]);
            for (let col = 0; col < 5; col++) {
                lights[row].push(
                    <Light
                        key={`${row}-${col}`}
                        handleClick={this.handleClick}
                        shouldBeOn={this.shouldBeOn}
                        row={row}
                        col={col}
                    />
                );
            }
        }
        return lights;
    };

    render() {
        return (
            <Board
                lights={this.getLights()}
                numMoves={this.state.numMoves}
                reset={this.reset}
                winComponent={this.state.winComponent}
            />
        );
    }
}

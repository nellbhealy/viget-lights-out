import React from 'react';
import { Light } from './light.js';

export class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            board: [],
            numMoves: 0,
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

    handleClick = (row, col) => {
        row = parseInt(row);
        col = parseInt(col);
        for (let x = -1; x < 2; x++) {
            for (let y = -1; y < 2; y++) {
                if (
                    row + y < 5 &&
                    row + y >= 0 &&
                    col + x < 5 &&
                    col + x >= 0
                ) {
                    this.flip(row + y, col + x);
                }
            }
        }
        this.state.numMoves++;
        this.setState({ board: this.board });
    };

    reset = () => {
        this.board = this.getNewBoard();
        this.state.numMoves = 0;
        this.setState({ board: this.board });
    };

    render() {
        let lights = [];
        for (let row = 0; row < 5; row++) {
            lights.push([]);
            for (let col = 0; col < 5; col++) {
                lights[row].push(
                    <Light
                        handleClick={this.handleClick}
                        shouldBeOn={this.shouldBeOn}
                        row={row}
                        col={col}
                    />
                );
            }
        }
        return (
            <div className="root">
                <div className="grid-container">{lights}</div>
                <p>{this.state.numMoves}</p>
                <button onClick={this.reset}>Reset</button>
            </div>
        );
    }
}

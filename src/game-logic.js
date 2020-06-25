import React from 'react';
import { Light } from './components/light.js';

export const flipTheLights = (board, row, col) => {
    for (let delta = -1; delta < 2; delta++) {
        if (col + delta < 5 && col + delta >= 0) {
            board[row][col + delta] = !board[row][col + delta];
        }
        if (row + delta < 5 && row + delta >= 0 && delta != 0) {
            board[row + delta][col] = !board[row + delta][col];
        }
    }
    return board;
};

export const getLights = (board, handleClick) => {
    let lights = [];
    for (let row = 0; row < 5; row++) {
        lights.push([]);
        for (let col = 0; col < 5; col++) {
            lights[row].push(
                <Light
                    key={`${row}-${col}`}
                    testid={`${row}-${col}`}
                    handleClick={() => handleClick(row, col)}
                    isOn={board[row][col]}
                />
            );
        }
    }
    return lights;
};

export const checkForWin = board => {
    return board.every(row => row.every(value => !value));
};

/**
 * Decides which tiles start off in the On positon.
 * If no lights get turned on, the method will call itself again.
 */
export const getNewBoard = () => {
    let board = [];
    for (let row = 0; row < 5; row++) {
        board.push([]);
        for (let col = 0; col < 5; col++) {
            let isOn = Math.random() < 0.1 ? true : false;
            board[row].push(isOn);
        }
    }

    return checkForWin(board) ? getNewBoard(board) : board;
};

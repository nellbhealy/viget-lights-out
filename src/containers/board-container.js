import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Board from '../components/board.js';
import {
    getNewBoard,
    flipTheLights,
    getLights,
    checkForWin,
} from '../game-logic.js';

const BoardContainer = props => {
    const [data, setData] = useState({
        numMoves: 0,
        hasWon: false,
        board: props.startingBoard,
    });

    const handleClick = (row, col) => {
        const updatedBoard = flipTheLights(data.board, row, col);
        const hasWon = checkForWin(updatedBoard);
        setData({
            board: updatedBoard,
            numMoves: 1 + data.numMoves,
            hasWon: hasWon,
        });
    };

    const reset = () => {
        setData({ board: getNewBoard(), numMoves: 0, hasWon: false });
    };

    return (
        <Board
            lights={getLights(data.board, handleClick)}
            numMoves={data.numMoves}
            reset={reset}
            hasWon={data.hasWon}
        />
    );
};

BoardContainer.propTypes = {
    startingBoard: PropTypes.array,
};

export default BoardContainer;

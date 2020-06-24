import React from 'react';

export const Board = props => {
    return (
        <div className="root">
            <div className="grid-container">{props.lights}</div>
            <p>{props.numMoves}</p>
            <button onClick={props.reset}>Reset</button>
        </div>
    );
};

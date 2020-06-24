import React from 'react';

export const Board = props => {
    return (
        <div className="root">
            <div className="grid-container">{props.lights}</div>
            <p>{props.numMoves}</p>
            <button onClick={props.reset}>Reset</button>
            {props.winComponent}
        </div>
    );
};

Board.propTypes = {
    lights: React.PropTypes.array,
    numMoves: React.PropTypes.number,
    reset: React.PropTypes.func,
    winComponent: React.PropTypes.element,
};

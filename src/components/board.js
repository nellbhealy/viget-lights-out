import React from 'react';
import PropTypes from 'prop-types';

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
    lights: PropTypes.array,
    numMoves: PropTypes.number,
    reset: PropTypes.func,
    winComponent: PropTypes.element,
};

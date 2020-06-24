import React from 'react';
import PropTypes from 'prop-types';

export const Light = props => {
    let onOrOff = props.isOn ? 'on' : 'off';
    return (
        <button
            data-testid={props.testid}
            className={'grid-item ' + onOrOff}
            onClick={props.handleClick}
        />
    );
};

Light.propTypes = {
    handleClick: PropTypes.func,
    isOn: PropTypes.bool,
};

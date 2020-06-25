import React from 'react';
import PropTypes from 'prop-types';

const classNames = require('classnames');

export const Light = props => {
    const lightClass = classNames({
        'grid-item': true,
        on: props.isOn,
        off: !props.isOn,
    });
    return (
        <button
            data-testid={props.testid}
            className={lightClass}
            onClick={props.handleClick}
        />
    );
};

Light.propTypes = {
    handleClick: PropTypes.func,
    isOn: PropTypes.bool,
};

import React from 'react';

export class Light extends React.Component {
    onClick = () => {
        this.props.handleClick(this.props.row, this.props.col);
    };

    render() {
        let onOrOff = this.props.shouldBeOn(this.props.row, this.props.col)
            ? 'on'
            : 'off';
        return (
            <button className={'grid-item ' + onOrOff} onClick={this.onClick} />
        );
    }
}

Light.propTypes = {
    handleClick: React.PropTypes.func,
    shouldBeOn: React.PropTypes.func,
    row: React.PropTypes.number,
    col: React.PropTypes.number,
};

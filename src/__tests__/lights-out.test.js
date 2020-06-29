import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import BoardContainer from '../containers/board-container.js';
import { startingBoardOne, solveable } from '../components/test-board.js';

afterEach(cleanup);

it('should start off with the correct board when passed a starting board', () => {
    const { getByTestId, asFragment } = render(
        <BoardContainer startingBoard={startingBoardOne} />
    );
    expect(asFragment()).toMatchSnapshot();
});

it('should flip appropriate lights when clicked', () => {
    const { getByTestId } = render(
        <BoardContainer startingBoard={startingBoardOne} />
    );

    //click Light at grid position 0-1
    fireEvent.click(getByTestId('0-1'));
    expect(getByTestId('0-0')).toHaveClass('on');
    expect(getByTestId('0-1')).toHaveClass('off');
    expect(getByTestId('0-2')).toHaveClass('on');
    expect(getByTestId('1-1')).toHaveClass('on');

    //click Light at grid position 2-3
    fireEvent.click(getByTestId('2-3'));
    expect(getByTestId('1-3')).toHaveClass('on');
    expect(getByTestId('2-2')).toHaveClass('on');
    expect(getByTestId('2-3')).toHaveClass('on');
    expect(getByTestId('2-4')).toHaveClass('on');
    expect(getByTestId('3-3')).toHaveClass('on');
});

it('should display winning message when all lights are off', () => {
    const { getByTestId } = render(
        <BoardContainer startingBoard={solveable} />
    );

    fireEvent.click(getByTestId('1-1'));
    expect(getByTestId('win-div')).toHaveTextContent(
        'Congratulations, you Won! Click reset to play again.'
    );
});

it('should remove winning message and reset moves to zero when the reset button is clicked', () => {
    const { getByTestId } = render(
        <BoardContainer startingBoard={solveable} />
    );

    fireEvent.click(getByTestId('1-1'));
    expect(getByTestId('win-div')).toHaveTextContent(
        'Congratulations, you Won! Click reset to play again.'
    );

    fireEvent.click(getByTestId('reset'));
    expect(getByTestId('win-div')).toBeUndefined();
});

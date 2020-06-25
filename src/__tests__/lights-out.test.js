import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BoardContainer } from '../containers/board-container.js';
import { startingBoardOne } from '../components/test-board.js';

it('should start off with the correct board when passed a starting board', () => {
    const { getByTestId, asFragment } = render(
        <BoardContainer startingBoard={startingBoardOne} />
    );
    expect(
        asFragment(<BoardContainer startingBoard={startingBoardOne} />)
    ).toMatchSnapshot();
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

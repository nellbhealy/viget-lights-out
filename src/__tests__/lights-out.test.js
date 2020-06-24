import React from 'react';
import { Light } from '../components/light.js';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { BoardContainer } from '../containers/board-container.js';
import '@testing-library/jest-dom';

afterEach(cleanup);

it('should start off with the correct board', () => {
    const { getByTestId, asFragment } = render(
        <BoardContainer isTest={true} />
    );
    expect(asFragment(<BoardContainer isTest={true} />)).toMatchSnapshot();
});

it('should flip appropriate lights when clicked', () => {
    const { getByTestId, asFragment } = render(
        <BoardContainer isTest={true} />
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

import React from 'react';
import './style.css';
import { BoardContainer } from '../containers/board-container';
import { getNewBoard } from '../game-logic.js';

export default function Home() {
    return <BoardContainer startingBoard={getNewBoard()} />;
}

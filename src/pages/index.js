import React from 'react';
import './style.css';
import BoardContainer from '../containers/board-container';
import { getNewBoard } from '../game-logic.js';

const Home = () => {
    return <BoardContainer startingBoard={getNewBoard()} />;
};

export default Home;

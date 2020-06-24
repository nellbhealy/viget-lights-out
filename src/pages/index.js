import React from 'react';
import './style.css';
import { BoardContainer } from '../containers/board-container';

export default function Home() {
    return <BoardContainer isTest={false} />;
}

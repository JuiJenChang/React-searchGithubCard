import React from 'react';
import './Title.css';

function Title({ username }) {
    return (
        <header className="title-header">
            <div className="title-content">
                <p>GitHub user /</p>
                <h1>{username}</h1>
            </div>
        </header>
    );
}

export default Title;
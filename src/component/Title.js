import React, { Component } from 'react';
import './Title.css';

class Title extends Component {
    render() {
        return (
            <header className="title-header">
                <div className="title-content">
                    <p>GitHub user /</p>
                    <h1>{this.props.username}</h1>
                </div>
            </header>
        );
    }
}

export default Title;
import React from 'react';
import './comment.css';

export function Comment({ username, text }) {
    return (
        <div className="comment">
            <div className="avatar"></div>
            <div className="comment-content">
                <h3 className="comment-name">{username}</h3>
                <p className="comment-text">{text}</p>
            </div>
        </div>
    );
}
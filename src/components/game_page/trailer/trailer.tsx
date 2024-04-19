import React from 'react';
import './trailer.css';

export function Trailer() {
    return (
        <div className="trailer">
            <iframe 
                width="598" 
                height="346" 
                src="https://www.youtube.com/embed/AKXiKBnzpBQ" 
                allowFullScreen
                title="Game Trailer"
            ></iframe>
        </div>
    );
}

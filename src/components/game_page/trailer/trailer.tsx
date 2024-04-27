import React from 'react';


import { TrailerContainer, TrailerFrame } from './trailer.styled';

const Trailer = () => {
    return (
        <TrailerContainer>
            <TrailerFrame
                src="https://www.youtube.com/embed/AKXiKBnzpBQ"
                allowFullScreen
                title="Game Trailer"
            ></TrailerFrame>
        </TrailerContainer>
    );
}

export default Trailer;

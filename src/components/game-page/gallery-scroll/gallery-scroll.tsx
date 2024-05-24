import React, { useState, useRef } from 'react';
import { GalleryContainer, GalleryWrapper, ScrollButton, ScreenshotImage } from './gallery-scroll.styled';
import { screen1, screen2, screen3, screen4, screen5, screen6, screen7 } from '.';
import Modal from '../modal/modal'; 
const screenshots = [screen1, screen2, screen3, screen4, screen5, screen6, screen7];

const Gallery = ({ openModal })=> {
    const [index, setIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(null);
    const galleryRef = useRef<HTMLDivElement>(null);

    const handleNextClick = () => {
        setIndex(prevIndex => (prevIndex + 3) % screenshots.length);
    };

    const handleBackClick = () => {
        setIndex(prevIndex => (prevIndex - 3 + screenshots.length) % screenshots.length);
    };

    const openImage = (src) => {
        console.log('верго')
        setSelectedImage(src);
    };

    const closeImage = () => {
        setSelectedImage(null);
    };
    // Функция, которая возвращает отображаемые элементы в галерее, включая круговую навигацию
    const getDisplayedScreenshots = () => {
        const displayedScreenshots = [];
        for (let i = index; i < index + 6; i++) {
            const screenshotIndex = i % screenshots.length;
            displayedScreenshots.push(screenshots[screenshotIndex]);
        }
        return displayedScreenshots;
    };

    return (
        <GalleryContainer>
            <GalleryWrapper ref={galleryRef}>
                {getDisplayedScreenshots().map((src, i) => (
                    <ScreenshotImage key={i} src={src} alt={`Screenshot ${index + i + 1}`} onClick={() => openModal(src)} />
                ))}
            </GalleryWrapper>
            <ScrollButton className="btn-scroll left-btn" onClick={handleBackClick}>&#9664;&#xFE0E;</ScrollButton>
            <ScrollButton className="btn-scroll right-btn" onClick={handleNextClick}>&#9654;&#xFE0E;</ScrollButton>
        </GalleryContainer>
    );
};

export default Gallery;

import React, { useRef } from 'react';
import { GalleryContainer, GalleryWrapper, ScrollButton, ScreenshotImage } from './gallery-scroll.styled';
import { screen1, screen2, screen3, screen4, screen5, screen6, screen7 } from './'

const Gallery = () => {
    const galleryRef = useRef<HTMLDivElement>(null);

    function scrollGallery(direction: number) {
        const gallery = galleryRef.current;
        if (gallery) {
            const scrollDistance = gallery.offsetWidth / 5; // Расстояние для прокрутки, равное ширине одного скриншота
            gallery.scrollBy(scrollDistance * direction, 0);
        }
    }

    return (
        <GalleryContainer>
            <GalleryWrapper ref={galleryRef}>
                <ScreenshotImage src={screen1} alt="Screenshot 1" />
                <ScreenshotImage src={screen2} alt="Screenshot 2" />
                <ScreenshotImage src={screen3} alt="Screenshot 3" />
                <ScreenshotImage src={screen4} alt="Screenshot 4" />
                <ScreenshotImage src={screen5} alt="Screenshot 5" />
                <ScreenshotImage src={screen6} alt="Screenshot 6" />
                <ScreenshotImage src={screen7} alt="Screenshot 7" />
            </GalleryWrapper>
            <ScrollButton className="btn-scroll left-btn" onClick={() => scrollGallery(-1)}>Назад</ScrollButton>
            <ScrollButton className="btn-scroll right-btn" onClick={() => scrollGallery(1)}>Вперед</ScrollButton>
        </GalleryContainer>
    );
};

export default Gallery;

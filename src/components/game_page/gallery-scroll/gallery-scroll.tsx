// import React from 'react';
// import { screen1, screen2, screen3, screen4, screen5, screen6, screen7 } from './'
// import './gallery-scroll.css';
// const Gallery = () => {
//     function scrollGallery(direction: number) {
  
//         return false; // Предотвращение перезагрузки страницы
//     }

//     return (
//         <div className="gallery-container">
//             <div className="gallery">
//                 <img src={screen1} alt="Screenshot 1" className='screenshot'/>
//                 <img src={screen2} alt="Screenshot 2" className='screenshot'/>
//                 <img src={screen3} alt="Screenshot 3" className='screenshot'/>
//                 <img src={screen4} alt="Screenshot 4" className='screenshot'/>
//                 <img src={screen5} alt="Screenshot 5" className='screenshot'/>
//                 <img src={screen6} alt="Screenshot 6" className='screenshot'/>
//                 <img src={screen7} alt="Screenshot 7" className='screenshot'/>
//             </div>
//             <button className="btn-scroll" onClick={() => scrollGallery(-1)} style={{ position: 'absolute', left: 0, width: 64, height: 103 }}>Назад</button>
//             <button className="btn-scroll" onClick={() => scrollGallery(1)} style={{ position: 'absolute', right: 0, width: 64, height: 103 }}>Вперед</button>
//         </div>
//     );
// };

// export default Gallery;

import React, { useRef } from 'react';
import './gallery-scroll.css';
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
        <div className="gallery-container">
            <div ref={galleryRef} className="gallery">
            <img src={screen1} alt="Screenshot 1" className='screenshot'/>
                <img src={screen2} alt="Screenshot 2" className='screenshot'/>
                <img src={screen3} alt="Screenshot 3" className='screenshot'/>
                <img src={screen4} alt="Screenshot 4" className='screenshot'/>
                <img src={screen5} alt="Screenshot 5" className='screenshot'/>
                <img src={screen6} alt="Screenshot 6" className='screenshot'/>
                <img src={screen7} alt="Screenshot 7" className='screenshot'/>
            </div>
            <button className="btn-scroll" onClick={() => scrollGallery(-1)} style={{ position: 'absolute', left: 0, width: 64, height: 103 }}>Назад</button>
            <button className="btn-scroll" onClick={() => scrollGallery(1)} style={{ position: 'absolute', right: 0, width: 64, height: 103 }}>Вперед</button>
        </div>
    );
};

export default Gallery;

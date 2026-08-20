import React from 'react';
import Image from 'next/image';
import '../../style/multislide.scss'

export interface MediaItem {
  src: string;
  type: 'image' | 'video';
}

interface MultislideProps {
  topSliderImages: MediaItem[];
  bottomSliderImages: MediaItem[];
}

const Multislide: React.FC<MultislideProps> = ({ topSliderImages, bottomSliderImages }) => {

  const renderItem = (item: MediaItem, index: number, isDuplicate = false, prefix = '') => {
    const key = `${prefix}-slide-${isDuplicate ? 'duplicate-' : ''}${index}`;
    return (
      <div className="slide" key={key}>
        {item.type === 'video' ? (
          <video src={item.src} autoPlay muted loop playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px', background: 'black' }} />
        ) : (
          <Image src={item.src} alt={`Slide ${index + 1}`} loading="lazy" width={100} height={100}/>
        )}
      </div>
    );
  };

  return (
    <div className="slider-container">
      {/* Slider du haut */}
      <div className="slider">
        <div className="slide-track">
          {/* Premier groupe de slides */}
          {topSliderImages.map((item, index) => renderItem(item, index, false, 'top'))}
          {/* Deuxième groupe de slides pour l'effet infini */}
          {topSliderImages.map((item, index) => renderItem(item, index, true, 'top'))}
        </div>
      </div>

      {/* Slider du bas */}
      <div className="slider">
        <div className="slide-track-reverse">
          {/* Premier groupe de slides */}
          {bottomSliderImages.map((item, index) => renderItem(item, index, false, 'bottom'))}
          {/* Deuxième groupe de slides pour l'effet infini */}
          {bottomSliderImages.map((item, index) => renderItem(item, index, true, 'bottom'))}
        </div>
      </div>
    </div>
  );
};

export default Multislide;
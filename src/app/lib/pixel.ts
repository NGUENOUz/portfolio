// pixel.ts
import ReactPixel from 'react-facebook-pixel';

const pixelId = '1215779299521232';

export const initPixel = () => {
    if (typeof window !== 'undefined' && pixelId) { // Vérifie si window est défini
      ReactPixel.init(pixelId);
    }
  };
  
  export const pageView = () => {
    if (typeof window !== 'undefined' && pixelId) { // Vérifie si window est défini
      ReactPixel.pageView();
    }
  };
  
  export const trackCustom = (event: string, data: object) => {
    if (typeof window !== 'undefined' && pixelId) { // Vérifie si window est défini
      ReactPixel.trackCustom(event, data);
    }
  };
  
  export const track = (event: string, data: object) => {
    if (typeof window !== 'undefined' && pixelId) { // Vérifie si window est défini
      ReactPixel.track(event, data);
    }
  };
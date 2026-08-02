// PixelInitializer.tsx
'use client';
import { initPixel, pageView } from './pixel';
import { useEffect } from 'react';

export default function PixelInitializer() {
  useEffect(() => {
    initPixel();
    pageView();
  }, []);

  return null; // Ce composant n'affiche rien
}
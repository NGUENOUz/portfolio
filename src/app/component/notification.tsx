'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import '../../style/modules.scss';
import { StaticImageData } from 'next/image';
 
// Importation des images
import mockup from '../../images/video.png';


interface Testimonial {
    name: string;
    country: string;
    flag: StaticImageData;
  }

const testimonials = [
  { name: 'Sophie Dupont', country: 'France', flag: mockup },
  { name: 'John Smith', country: 'États-Unis', flag: mockup },
  
];

export default function Notifications() {
    const [currentTestimonial, setCurrentTestimonial] = useState<Testimonial | null>(null);

    useEffect(() => {
      const interval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * testimonials.length);
        setCurrentTestimonial(testimonials[randomIndex]);
      }, 500000);
  
      return () => clearInterval(interval);
    }, []);
  
    if (!currentTestimonial) return null;
  return (
    <div className="notifications">
      <Image
     width={0} height={0}
        src={currentTestimonial.flag.src} // Utilisation de currentTestimonial.flag.src
        alt={`${currentTestimonial.country} flag`}
        className="flag"/>
      <p>
        <strong>{currentTestimonial.name}</strong>, {currentTestimonial.country}
      </p>
      <p>Vient de souscrire à la formation Excel !</p>
    </div>
  );
}
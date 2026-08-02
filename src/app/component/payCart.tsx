'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import mockup from '../../images/video.png';
import '../../style/modules.scss';

export default function PayCart() {
  const modulesContentRef = useRef<HTMLDivElement | null>(null);
  const payCartRef = useRef<HTMLDivElement | null>(null);
  const [isFixed, setIsFixed] = useState(false);

  const handleScroll = () => {
    if (modulesContentRef.current && payCartRef.current) {
      const modulesContentRect = modulesContentRef.current.getBoundingClientRect();
      const payCartRect = payCartRef.current.getBoundingClientRect();

      if (
        (payCartRect.top)+250 >= (modulesContentRect.top )-100&&
       ( payCartRect.bottom) +300<= (modulesContentRect.bottom)-130
      ) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="PayCart__Contenair" ref={modulesContentRef}>
      <div className={`payCart ${isFixed ? 'fixed' : 'nonFixe'}`} ref={payCartRef}>
        <Image src={mockup} alt="preview" className="preview" />
        <h2>Formation 100% pratique</h2>
        <p>Voici un apperçu du contenu de cette formation qu&apos;il vous faut !!!</p>
        <p>Ne manquez pas cette opportunité de vous faire former dans Excel</p>
        <button className="btn-grad">Je profite de l&apos;offre</button>
      </div>
    </div>
  );
}
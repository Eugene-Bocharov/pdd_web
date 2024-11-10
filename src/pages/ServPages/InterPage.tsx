import React, { useState, useEffect } from 'react';
import { Footer } from '../../components/Organisms/Footer/Footer';
import { Header } from '../../components/Organisms/Header/Header';
import { HeaderMob } from '../../components/Organisms/HeaderMob/HeaderMob';
import { HalfText } from '../../components/Organisms/HalfText/HalfText';
import { PicDesc } from '../../components/Organisms/PicDesc/PicDesc';
import { ReactMinimalGallery } from 'react-minimal-gallery';
import { ProjShow } from '../../components/Organisms/ProjShow/ProjShow';

export default function InterPage() {
  const images = [
    'https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1505843513577-22bb7d21e455?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1492889971304-ac16ab4a4a5a?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      {windowWidth <= 1100 ? <HeaderMob /> : <Header />}
      <div>InterPage</div>;
      <PicDesc
        title="Who are we ?"
        description="We are a beauty and health company based in Toronto, Ontario. Our mission is to empower individuals to look and feel their best by offering exceptional services and products. We are committed to providing a personalized and welcoming experience for all of our clients."
        position="normal"
        link="#"
        pic="https://images.unsplash.com/photo-1581182815808-b6eb627a8798?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <ProjShow
        title="Interior Renovations"
        description="Interior Renovations are designed to provide an interactive interface to the community and provides an interface to the community"
        images={images}
      />
      <HalfText
        title="Improve your health, beauty, life with us"
        description="We are a licensed beauty salon and academy in Edmonton, offering expert waxing and threading services to help clients achieve smooth, flawless skin. Our skilled estheticians specialize in sweet waxing and Brazilian waxing, ensuring a comfortable and efficient experience. We are dedicated to delivering the highest level of care while helping you look and feel your best."
      />
      <Footer />
    </>
  );
}

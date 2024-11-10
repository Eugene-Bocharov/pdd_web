import React, { useState, useEffect } from 'react';

import { Header } from '../../components/Organisms/Header/Header';
import { HalfText } from '../../components/Organisms/HalfText/HalfText';
import { HeaderMob } from '../../components/Organisms/HeaderMob/HeaderMob';
import { Title } from '../../components/Molecules/Title/Title';
import { Slider } from '../../components/Organisms/Slider/Slider';
import { InfoCard } from '../../components/Organisms/InfoCard/InfoCard';
import { PicDesc } from '../../components/Organisms/PicDesc/PicDesc';
import { DarkTitleDesk } from '../../components/Organisms/DarkTitleDesc/DarkTitleDesc';
import { ServiceDesc } from '../../components/Organisms/ServiceDesc/ServiceDesc';
import { DarkText } from '../../components/Organisms/DarkText/DarkText';
import { TitleDesc } from '../../components/Organisms/TitleDesc/TitleDesc';
import { Footer } from '../../components/Organisms/Footer/Footer';

export function AboutPage() {
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
      <HalfText
        title="Improve your health, beauty, life with us"
        description="We are a licensed beauty salon and academy in Edmonton, offering expert waxing and threading services to help clients achieve smooth, flawless skin. Our skilled estheticians specialize in sweet waxing and Brazilian waxing, ensuring a comfortable and efficient experience. We are dedicated to delivering the highest level of care while helping you look and feel your best."
      />
      <DarkTitleDesk
        title="Smooth Skin, Expert Care"
        description="Our licensed beauty salon offers top-quality waxing and threading services. We are dedicated to delivering precise and comfortable treatments tailored to your needs. Whether you’re looking for sweet waxing, Brazilian waxing, or expert threading, our professionals ensure smooth, flawless results. With a focus on client satisfaction, we take pride in providing personalized care that leaves you feeling confident and refreshed."
        link="#"
      />
      <PicDesc
        title="Who are we ?"
        description="We are a beauty and health company based in Toronto, Ontario. Our mission is to empower individuals to look and feel their best by offering exceptional services and products. We are committed to providing a personalized and welcoming experience for all of our clients."
        position="normal"
        pic="https://images.unsplash.com/photo-1581182815808-b6eb627a8798?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <InfoCard
        color="black"
        title="Custom websites made just for you"
        description="At HIPL, we understand that a professionally designed and developed website is crucial for your business's success. Our expert team is committed to creating websites that not only look stunning but also perform seamlessly. We meticulously plan and execute each project to ensure your website is fully responsive, user-friendly, and optimized for search engines. "
      />
      <PicDesc
        title="Who are we ?"
        description="We are a beauty and health company based in Toronto, Ontario. Our mission is to empower individuals to look and feel their best by offering exceptional services and products. We are committed to providing a personalized and welcoming experience for all of our clients."
        position="reversed"
        pic="https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Sample image URL
      />

      <Title title="Ready to work with us ?" link="/appointments" />
      <Footer />
    </>
  );
}

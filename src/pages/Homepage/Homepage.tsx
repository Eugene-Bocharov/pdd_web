import React, { useState, useEffect } from 'react';

import { Header } from '../../components/Organisms/Header/Header';
import { HeaderMob } from '../../components/Organisms/HeaderMob/HeaderMob';
import { HomeWelc } from '../../components/Organisms/HomeWelc/HomeWelc';
import { TitleDesc } from '../../components/Organisms/TitleDesc/TitleDesc';
import { PicDesc } from '../../components/Organisms/PicDesc/PicDesc';
import { InfoCard } from '../../components/Organisms/InfoCard/InfoCard';
import { Title } from '../../components/Molecules/Title/Title';
import { Slider } from '../../components/Organisms/Slider/Slider';
import { DarkText } from '../../components/Organisms/DarkText/DarkText';
import { DarkTitleDesk } from '../../components/Organisms/DarkTitleDesc/DarkTitleDesc';
import { ServiceDesc } from '../../components/Organisms/ServiceDesc/ServiceDesc';
import { Footer } from '../../components/Organisms/Footer/Footer';

export function Homepage() {
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
      <HomeWelc />
      <TitleDesc
        title="Who are we ?"
        description="We are an affordable health and beauty spa in Edmonton Alberta that provides various services that are tailored to your needs."
      />
      <PicDesc
        title="Exceptional Spa Experience"
        description="Our talented estheticians and massage therapists will make your experience above and beyond expectations."
        position="normal"
        pic="https://lashfx.ca/cdn/shop/articles/How_Long_Does_It_Take_for_Eyelashes_to_Grow_Back.webp?v=1707514749&width=1100"
      />
      <DarkTitleDesk
        title="Explore & Book Today"
        description="Please browse our services pages and book an appointment to try our services and take advantage of our introductory rates."
        link="#"
      />
      <PicDesc
        title="Who are we ?"
        description="We are a beauty and health company based in Toronto, Ontario. Our mission is to empower individuals to look and feel their best by offering exceptional services and products. We are committed to providing a personalized and welcoming experience for all of our clients."
        position="reversed"
        pic="https://pearlishskinclinic.com/wp-content/uploads/2022/02/skin-care-400x400.jpg" // Sample image URL
      />
      <Title title="Ready to work with us ?" link="/appo" />
      <Footer />
    </>
  );
}

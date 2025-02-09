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

import { photos } from '../../static/serviceExp';
import { Partners } from '../../components/Organisms/Partners/Partners';

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
        title="About us"
        description="We are a Construction company based in Calgary, Alberta with over a decade of experience in the industry."
      />
      <PicDesc
        title="Our specialization"
        description="We specialize in exterior projects. We take pride in tackling challenges head-on, ensuring every project reflects our commitment. "
        position="normal"
        pic={photos.nc[5]}
      />
      <DarkTitleDesk
        title="Commitment to excellence"
        description="Our team is passionate about transforming spaces and making your vision into reality. For any new exterior project, we are here to help."
        link="#"
      />
      <PicDesc
        title="Let’s build something amazing together!"
        description=""
        position="reversed"
        pic={photos.nc[3]}
      />
      <Partners title="" pic={photos.partner} />
      <Title title="Ready to work with us ?" link="/contact" />
      <Footer />
    </>
  );
}

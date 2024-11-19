import React, { useState, useEffect } from 'react';
import styles from './HomeWelc.module.scss';
import { TypeAnimation } from 'react-type-animation';

export const HomeWelc: React.FC = () => {
  const [showScrollBtn, setShowScrollBtn] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 500) {
        setShowScrollBtn(false);
      } else {
        setShowScrollBtn(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.midContainer}>
        <div className={styles.divider}>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>
              {/* <TypeAnimation
                sequence={[
                  'Lets be Creative',
                  2000,
                  'Lets be Innovative',
                  2000,
                  'Lets be Amazing',
                  2000,
                  'Lets be Relentless',
                  2000,
                ]}
                wrapper="span"
                speed={25}
                className={styles.typeAnimationTitle}
                repeat={Infinity}
              /> */}
              Bring Your Vision into Reality with Us
            </h1>
            <h3 className={styles.description}>
              Whatever your unique idea or needs, we’ve got the tools and know
              how to make a custom solution tailored to your needs.
            </h3>
            <div className={styles.boxDivider}>
              <a href="/about" className={styles.seeButton}>
                See more
              </a>
              <a href="/contact" className={styles.contactButton}>
                Contact Us
              </a>
            </div>
          </div>
        </div>
        <div className={styles.imgBox}></div>
      </div>
    </div>
  );
};

export default HomeWelc;

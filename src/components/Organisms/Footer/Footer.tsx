import React from 'react';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.midContainer}>
          <div className={styles.titleBox}>
            <div className={styles.logoImgBox}>
              <div className={styles.logoImg}></div>
            </div>
            <h1 className={styles.logoTitle}>Bring Your Vision into Reality</h1>
          </div>
          <div className={styles.dividerBox}>
            <div className={styles.collumn}>
              <p className={styles.subTitle}>Services</p>
              <a className={styles.link} href="/services#massages">
                Massages
              </a>
              <a className={styles.link} href="/services#sweet">
                Sweet
              </a>
              <a className={styles.link} href="/services#brazilian">
                Brazilian
              </a>
              <a className={styles.link} href="/services#threading">
                Threading
              </a>
              <a className={styles.link} href="/services#hot-waxing">
                Hot Waxing
              </a>
              <a className={styles.link} href="/services#skin">
                Skin
              </a>
              <a className={styles.link} href="/services#nails">
                Nails
              </a>
              <a className={styles.link} href="/services#lashes">
                Lashes
              </a>
            </div>
            <div className={styles.collumn}>
              <p className={styles.subTitle}>Social Media</p>
              <a className={styles.link} href="#">
                Instagram
              </a>
              <a className={styles.link} href="#">
                Facebook
              </a>
              <a className={styles.link} href="#">
                X
              </a>
              <a className={styles.link} href="#">
                LinkedIn
              </a>
            </div>
            <div className={styles.collumn}>
              <p className={styles.subTitle}>Contact</p>
              <a className={styles.link} href="#">
                780 709 9979 (text only)
              </a>
              <a className={styles.link} href="#">
                kazahealthnbeauty@gmail.com
              </a>
              <a className={styles.link} href="#">
                Copyright © 2024 Project Development And Design Inc. - All
                rights reserved
              </a>
              <a className={styles.link} href="/contact#form">
                Write us
              </a>
            </div>
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.midContainer}>
          <p className={styles.rightT}>
            Copyright © 2024 Project Development And Design Inc. - All rights
            reserved
          </p>
        </div>
      </div>
    </>
  );
};

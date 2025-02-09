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
              {/* <a className={styles.link} href="/interior">
                Interior Renovations
              </a> */}
              <a className={styles.link} href="/exterior">
                Exterior Finishings
              </a>
              <a className={styles.link} href="/newconstr">
                New Construction
              </a>
              <a className={styles.link} href="/roofing">
                Roofing & Other
              </a>
              <a className={styles.link} href="/additions">
                Additions & Remodeling
              </a>
            </div>
            <div className={styles.collumn}>
              <p className={styles.subTitle}>Social Media</p>
              <a
                className={styles.link}
                href="https://www.instagram.com/projectandesign/profilecard/?igsh=dWRlaHhqNDl6Zmt2"
              >
                Instagram
              </a>
              <a
                className={styles.link}
                href="https://www.facebook.com/profile.php?id=61553015094076"
              >
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
                403-918-6333
              </a>
              <a className={styles.link} href="#">
                info@projectandesign.ca
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
            Copyright © 2025 Project Development And Design Inc. - All rights
            reserved | Website made by Yevhenii Bocharov
          </p>
        </div>
      </div>
    </>
  );
};

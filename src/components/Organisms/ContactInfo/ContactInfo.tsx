import React from 'react';
import styles from './ContactInfo.module.scss';

interface ContactInfoProps {
  title: string;
}

export const ContactInfo: React.FC<ContactInfoProps> = ({
  title,
}: ContactInfoProps) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.collumnDiv}>
        <div className={styles.collumn}>
          <p className={styles.subTitle}>Contact</p>
          <a className={styles.link} href="#">
            780 709 9979 (text only)
          </a>
          <a className={styles.link} href="#">
            kazahealthnbeauty@gmail.com
          </a>
          <a className={styles.link} href="#">
            76 Harrow Circle NW, EDMONTON AB T5A 2S5
          </a>
          <a className={styles.link} href="/contact#form">
            Write us
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
      </div>
    </div>
  );
};
